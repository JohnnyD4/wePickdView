import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { inject } from 'mobx-react';
// import scrapeIt from 'scrape-it';

export default class List extends React.Component {
	constructor() {
		super();
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
			console.log(res);
			// const movies = res._bodyInit;
			// if (movies.length > 0) {
			// 	// this.props.navigation.push('List', movies);
			// } else {
			// 	throw new Error('Sorry no movies');
			// }
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>List</Text>
			</View>
		);
	}
}
    
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});