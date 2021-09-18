import util from 'util';
import cheerio from 'cheerio';
import HtmlResponse from './BaseSite.js';
import WallStreetBets from './WallStreetBets.js';

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

		return { dataTitle, wallStreetBets };
	}).get();

	return dataDetails;
}

export default FetchCore;
