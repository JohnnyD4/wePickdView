import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Stats from './movieStats';
import Info from './movieInfo';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class MoviePage extends React.Component {
	constructor(props) {
		super(props);
		const movie = props.navigation.state.params.movie;
		this.state = {
			movie,
			index: 0,
			routes: [
				{ key: 'stats', title: 'Movie Stats' },
				{ key: 'info', title: 'Movie Info' },
			],
		};
	}

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  // _renderScene = SceneMap({
  //   stats: FirstRoute,
  //   info: SecondRoute,
  // });

  renderScene = ({ route }) => {
		switch(route.key) {
			case 'stats':
				return <Stats movie={this.state.movie} />
			case 'info':
				return <Info movie={this.state.movie} />
			default:
				return <Stats movie={this.state.movie} />;
		}
  }

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});