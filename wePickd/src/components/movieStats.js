import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { inject } from 'mobx-react';

export default class MovieStats extends React.Component {
	constructor(props) {
		super(props);
		const movie = props.navigation.state.params.movie;
		this.state = {
			id: movie.id,
			title: movie.title,
			ticketLink: movie.link,
			image: movie.image,
		}
	}
	render() {
		console.log(this.props.navigation.state.params.movie)
		return (
			<View style={styles.container}>
				<Text>{this.state.title}</Text>
				<Image
					style={{width: 240, height: 360}}
					source={{ uri: `https:${this.state.image}`}}
				/>
			</View>
		);
	}
}
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});