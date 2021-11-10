import cheerio from 'cheerio';
import HtmlResponse from './BaseSite.js';
import Twitter from '../fetch/Twitter.js';
import WallStreetBets from '../fetch/WallStreetBets.js';
import OffExchangeTrading from '../fetch/OffExchangeTrading.js';

async function FetchCore(code) {
	// Load html source from website.
	const loadElement = cheerio.load(
		await HtmlResponse(code)
	);

	// get spesific container from html;
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

export default FetchCore;
