import util from 'util';
import cheerio from 'cheerio';
import HtmlResponse from './fetch/index.js';
import WallStreetBets from './fetch/WallStreetBets.js';

async function run() {
	// Load html source from website.
	const loadElement = cheerio.load(
		await HtmlResponse('SOL')
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

console.log(util.inspect(await run(), { maxArrayLength: null }));
