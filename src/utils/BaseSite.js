const { axios } = require('axios');

async function BaseSite(code) {
	// Get hmtl source from website.
	const url = `https://www.quiverquant.com/dashboard/${code}/`;
	const response = await axios.get(url);
	const html = response.data;

	return html;
}

module.exports = BaseSite;
