import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { inject } from 'mobx-react';

export default class MovieStats extends React.Component {
	constructor(props) {
		super(props);

		const movie = props.movie;

		this.state = {
			id: movie.id,
			title: movie.title,
			ticketLink: movie.link,
			image: movie.image,
			description: movie.longDescription,
			rating: movie.ratings[0].code,
			releaseDate: movie.releaseDate,
			runTime: movie.runTime,
			showTimes: movie.showTimes,
			stats: movie.stats,
		}
	}

	render() {
		let categories;
		let { stats } = this.state;

		categories = Object.entries(stats).map(([key, score], idx) => {
			let value ;
			switch (key) {
				case '1':
				case 1:
					value = `${score} Do NOT Watch with Mom`
					return <Button
						key={idx}
						title={value}
						buttonStyle={{
							borderRadius: 50
						}}
					/>
				case '2':
				case 2:
					value = `${score} Go see with the Family`
					return <Button
						key={idx}
						title={value}
						buttonStyle={{
							borderRadius: 50
						}}
					/>
				case '3':
				case 3:
					value = `${score} Boys Night Kinda Movie`
					return <Button
						key={idx}
						title={value}
						buttonStyle={{
							borderRadius: 50
						}}
					/>
				case '4':
				case 4:
					value = `${score} Girls Night Out Movie`
					return <Button
						key={idx}
						title={value}
						buttonStyle={{
							borderRadius: 50
						}}
					/>
				default:
				return null;
			}
		});

		return (
			<View style={styles.container}>
				<Text>{this.state.title}</Text>
				<Text>Rating: {this.state.rating}</Text>
				<Image
					style={{width: 240, height: 360}}
					source={{ uri: `https:${this.state.image}`}}
					/>
				<View style={styles.buttonContainer}>
					{categories}
				</View>
				<Button
					title='45 Do NOT Watch with Mom'
					buttonStyle={{
						borderRadius: 50
					}}
				/>
			</View>
		);
	}
}
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
	},
	buttonContainer: {
		margin: '2%',
	},
	buttons: {
		backgroundColor: 'grey',
		width: '50%',
	},
	score: {
		color: 'white',
	}
});