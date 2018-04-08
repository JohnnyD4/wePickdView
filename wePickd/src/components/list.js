import React from 'react';
import { StyleSheet,
	Text,
	View,
	Button,
	Image,
	ActivityIndicator,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { inject } from 'mobx-react';
// import scrapeIt from 'scrape-it';

@inject('movies')
export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: '',
		}
		this.getMovie = this.getMovie.bind(this);
	}

	componentWillMount() {
		const movieList = this.props.navigation.state.params;

		fetch(`http://localhost:4000/links/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				list: movieList,
			})
		}).then((res) => {
			const movies = res._bodyInit;
			this.setState({ movies });
		}).catch((err) => {
			throw err;
		})
	}

	getMovie(moviePicked) {
		fetch(`http://localhost:4000/movie/${moviePicked.id}`)
		.then((res) => {
			const movie = JSON.parse(res._bodyInit);
			movie.image = moviePicked.image;
			this.props.navigation.push('MoviePage', {movie})
		})
		.catch((err) => {
			console.log('ERROR', err);
			throw err;
		})
	}
	


	render() {
		let { movies } = this.state;
		let build; 
		let isLoading = true;
		if (movies.length > 0) {
			isLoading = false;
			movies = JSON.parse(movies);

			build = movies.map((movie, index) => {
				if (movie) {
					return (
						<TouchableOpacity key={index} onPress={() => this.getMovie(movie) }>
							<Text>{movie.title}</Text>
							<Image
								key={movie.id}
								style={{width: 80, height: 90}}
								source={{ uri: `https:${movie.image}`}}
								
							/>
						</TouchableOpacity>
					)
				}
			});
		}


		return (
			<ScrollView style={styles.container}>
				<ActivityIndicator
					animating={isLoading}
					size='large'
					color='#0000ff'
				/>
				{build}
			</ScrollView>
		);
	}
}
    
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});