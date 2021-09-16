import axios from 'axios';

async function fetch(code) {
	// Get hmtl source from website.
	const url = `https://www.quiverquant.com/dashboard/${code}/`;
	const response = await axios.get(url);
	const html = response.data;

	return html;
}

export default fetch;
