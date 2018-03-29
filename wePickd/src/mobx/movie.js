import { action, computed, observable } from 'mobx';

class movies {
	constructor() {

	}

	@observable test = 'test';

	@computed
	get test2() {
		console.log('fg');
		return 'sdf';
	}

	@action
	getMovieList(movieList) {
		console.log('thehdf');
		// fetch(`http://localhost:4000/links/`, {
		// 	method: 'POST',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		list: movieList,
		// 	})
		// }).then((res) => {
		// 	const movies = res._bodyInit;
		// 	console.log(res);
		// 	return movies;
		// })
	}

}

export default new movies();
