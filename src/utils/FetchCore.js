import cheerio from 'cheerio';
import HtmlResponse from './BaseSite.js';
import WallStreetBets from '../fetch/WallStreetBets.js';
import Twitter from '../fetch/Twitter.js';

async function FetchCore(code) {
	// Load html source from website.
	const loadElement = cheerio.load(
		await HtmlResponse(code)
	);

	// get spesific container from html;
	const dataDetails = loadElement('div.data__details').map((_, elemet) => {
		const dataElements = loadElement(elemet);
		const dataTitle = dataElements.find('h3.data__details_title').text();
		const wallStreetBets = WallStreetBets(loadElement, dataElements);
		const twitter = Twitter(loadElement, dataElements);

		return { dataTitle, twitter, wallStreetBets };
	}).get();

	return dataDetails;
}

export default FetchCore;
