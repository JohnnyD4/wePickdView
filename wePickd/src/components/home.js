import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { inject } from 'mobx-react';

export default class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			zip: '',
		};
		this.changeZip = this.changeZip.bind(this);
		this.SubmitZip = this.SubmitZip.bind(this);
	}

	changeZip(text) {
		this.setState({ zip: text });
	}

	SubmitZip() {
		console.log(this.state.zip);
		fetch(`http://localhost:4000/zip/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				zip_code: this.state.zip,
			})
		}).then((res) => {
			const movies = res._bodyInit;
			console.log(movies);
			if (movies.length > 0) {
				this.props.navigation.push('List', JSON.parse(movies));
			} else {
				throw new Error('Sorry no movies');
			}
		}).catch((err) => {
			console.log(err);
		})
		// const test = [{"id":"14651974","title":"Love, Simon","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=178983&d=2018-03-27"},{"id":"14462292","title":"I Can Only Imagine","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=176826&d=2018-03-27"},{"id":"11714869","title":"Pacific Rim Uprising","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=150442&d=2018-03-27"},{"id":"13794695","title":"Sherlock Gnomes","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=170893&d=2018-03-27"},{"id":"14085794","title":"A Wrinkle in Time","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=173606&d=2018-03-27"},{"id":"12878741","title":"Black Panther","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=162611&d=2018-03-27"},{"id":"14080689","title":"Red Sparrow","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=173564&d=2018-03-27"},{"id":"14830399","title":"Unsane","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=180910&d=2018-03-27"},{"id":"14505122","title":"Game Night","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=177297&d=2018-03-27"},{"id":"13401697","title":"Midnight Sun","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=168212&d=2018-03-27"},{"id":"13061659","title":"Tomb Raider","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=164355&d=2018-03-27"},{"id":"14436043","title":"Peter Rabbit","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=176569&d=2018-03-27"},{"id":"14609079","title":"Paul, Apostle of Christ","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=178498&d=2018-03-27"},{"id":"13061659","title":"Tomb Raider 3D","link":"http://www.fandango.com/tms.asp?t=AAFLL&m=178101&d=2018-03-27"},{"id":"11755020","title":"Antarctica 3D: On the Edge"},{"id":"9759173","title":"Kenya 3D: Animal Kingdom"},{"id":"10029449","title":"Walking With Dinosaurs 3D"},{"id":"11459210","title":"Secret Ocean"},{"id":"13936269","title":"Amazon Adventure"},{"id":"13656799","title":"Dream Big: Engineering Our World"},{"id":"11714869","title":"Pacific Rim Uprising 3D","link":"http://www.fandango.com/tms.asp?t=AAVMB&m=167076&d=2018-03-27"},{"id":"14337068","title":"The Leisure Seeker","link":"http://www.fandango.com/tms.asp?t=AANZD&m=175858&d=2018-03-27"},{"id":"11401553","title":"The Greatest Showman","link":"http://www.fandango.com/tms.asp?t=AANZD&m=146853&d=2018-03-27"},{"id":"14433008","title":"Annihilation","link":"http://www.fandango.com/tms.asp?t=AANZD&m=176814&d=2018-03-27"},{"id":"14922280","title":"7 Days in Entebbe","link":"http://www.fandango.com/tms.asp?t=AANZD&m=181395&d=2018-03-27"},{"id":"14085794","title":"A Wrinkle in Time 3D","link":"http://www.fandango.com/tms.asp?t=AANZD&m=173608&d=2018-03-27"},{"id":"14689236","title":"The Strangers: Prey at Night","link":"http://www.fandango.com/tms.asp?t=AANZD&m=179274&d=2018-03-27"},{"id":"14241373","title":"Death Wish","link":"http://www.fandango.com/tms.asp?t=AANZD&m=174917&d=2018-03-27"}];
		// this.props.navigation.push('List', test);
	}

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to We Pickd!</Text>
				<Text>Please put in your 5 digit zip code to view movies near you!</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 2}}
					onChangeText={this.changeZip}
					value={this.state.zip}
				/>
				<Button
					onPress={this.SubmitZip}
					title='Submit'
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