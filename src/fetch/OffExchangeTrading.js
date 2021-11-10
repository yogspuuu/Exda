function OffExchangeTrading(loadElement, elements) {
	const data = {};
	const dataListTemp = [];

	// Find title
	elements.find('div.data__details_metrics > div.data__details_metrics_item > div.data__details_metrics_item_title').map((_, innerChart) => {
		const dataInnerChart = loadElement(innerChart);
		const dataInnerChartTitle = dataInnerChart.find('h5').text();

		if (dataInnerChartTitle.includes('Off-Exchange')) {
			data.title = dataInnerChartTitle;
		}

	}).get();

	// Find description
	elements.find('div.data__details_metrics > div.data__details_metrics_item').map((_, innerChart) => {
		const dataInnerChart = loadElement(innerChart);
		const dataInnerChartDescription = dataInnerChart.find('p').text();

		if (dataInnerChartDescription.includes('off-exchange')) {
			data.description = dataInnerChartDescription;
		}

	}).get();

	// Find data
	elements.find('div.data__details_metrics_item > div.data__details_metrics_item_list > div.data__details_metrics_item_list_inner > div.data__details_metrics_item_list_field').map((_, innerChart) => { 
		const dataDict = {};
		
		const dataInnerChart = loadElement(innerChart);
		const dataKey = dataInnerChart.find('div.data__details_metrics_item_list_field_left > div.data__details_metrics_item_list_text > i').text();
		const dataValue = dataInnerChart.find('div.data__details_metrics_item_list_field_right').text();

		dataDict[dataKey] = dataValue;
		dataListTemp.push(dataDict);

	}).get();

	data.listData = dataListTemp;

	return data;
}

module.exports = OffExchangeTrading;