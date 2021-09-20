function Twitter(loadElement, elements) {
	const data = {};
	const dataListTemp = [];
	
	// Find title
	elements.find('div.data__details_chart > div.data__details_chart_side.left > div.data__details_chart_side_title').map((_, innerChart) => {
		const dataInnerChart = loadElement(innerChart);
		const dataInnerChartTitle = dataInnerChart.find('h6').text();

		if (dataInnerChartTitle.includes('Twitter')) {
			data.description = dataInnerChartTitle;
		}

	}).get();

	// Find description
	elements.find('div.data__details_chart > div.data__details_chart_side.right > div.data__details_chart_side_title').map((_, innerChart) => {
		const dataInnerChart = loadElement(innerChart);
		const dataInnerChartDescription = dataInnerChart.find('span').text();

		if (dataInnerChartDescription.includes('Twitter')) {
			data.description = dataInnerChartDescription;
		}

	}).get();
	
	// Find data
	elements.find('div.data__details_chart > div.data__details_chart_side.right > div.data__details_chart_side_content > div.data__details_chart_table_wrapper > table.data__details_chart_table > tbody').map((_, innerChart) => { 
		const dataList = [];
		const dataInnerChart = loadElement(innerChart);

		dataInnerChart.find('tr').each((_, trElement) => {
			var dataTemp = [];
			const dataChartTr = loadElement(trElement);
			
			dataChartTr.find('td').each((_, tdElement) => {
				const dataChartTd = loadElement(tdElement).text();
				
				dataTemp.push(dataChartTd);
			});	
			
			dataList.push(dataTemp);
		});

		dataListTemp.push(dataList);
	}).get();
	
	data.listData = dataListTemp[0];

	return data;
}

export default Twitter;
