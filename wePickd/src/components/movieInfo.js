import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { inject } from 'mobx-react';

export default class MovieInfo extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
			</View>
		);
	}
}
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});