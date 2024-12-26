const url = 'https://imdb236.p.rapidapi.com/imdb/types';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f70681134fmsh77ac107ca7b7377p14cd62jsn881aa11f8a61',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}