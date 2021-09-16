import util from 'util';
import cheerio from 'cheerio';
import HtmlResponse from './fetch/index.js';
import WallStreetBets from './fetch/WallStreetBets.js';

async function run() {
	// Load html source from website.
	const $ = cheerio.load(
		await HtmlResponse('SOL')
	);

	// get spesific container from html;
	const dataDetails = $('div.data__details').map((_, elemet) => {
		const dataElements = $(elemet);
		const dataTitle = dataElements.find('h3.data__details_title').text();
		const wallStreetBets = WallStreetBets($, dataElements);

		// console.log(util.inspect(wallStreetBets, { maxArrayLength: null }));

		return { dataTitle };
	}).get();

	return dataDetails;
}

await run();
