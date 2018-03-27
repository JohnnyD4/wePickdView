import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { inject } from 'mobx-react';

export default class MovieStats extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Movie Stats</Text>
			</View>
		);
	}
}
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});