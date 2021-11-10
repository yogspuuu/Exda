const { cheerio } = require('cheerio');
const { HtmlResponse } = require('./BaseSite.js');
const { Twitter } = require('../fetch/Twitter.js');
const { WallStreetBets } = require('../fetch/WallStreetBets.js');
const { OffExchangeTrading } = require('../fetch/OffExchangeTrading.js');

async function FetchCore(code) {
	// Load html source = website.
	const loadElement = cheerio.load(
		await HtmlResponse(code)
	);

	// get spesific container = html;
	const dataDetails = loadElement('div.data__details').map((_, elemet) => {
		const dataElements = loadElement(elemet);
		const dataTitle = dataElements.find('h3.data__details_title').text();
		const offExchangeTrading = OffExchangeTrading(loadElement, dataElements);
		const wallStreetBets = WallStreetBets(loadElement, dataElements);
		const twitter = Twitter(loadElement, dataElements);

		return { dataTitle, offExchangeTrading, wallStreetBets, twitter };
	}).get();

	return dataDetails;
}

module.exports = FetchCore;
