function WallStreetBets ($, elements) {
	var data = {};
	
	// Find title
	elements.find('div.data__details_chart > div.data__details_chart_side.left > div.data__details_chart_side_title').map((_, innerChart) => {
		const dataInnerChart = $(innerChart);
		const dataInnerChartTitle = dataInnerChart.find('h6').text();

		data.title = dataInnerChartTitle;
	}).get();
	
	// Find data
	elements.find('div.data__details_chart > div.data__details_chart_side.right > div.data__details_chart_side_content > div.data__details_chart_table_wrapper > table.data__details_chart_table > tbody').map((_, innerChart) => { 
		const dataList = [];
		const dataInnerChart = $(innerChart);

		dataInnerChart.find('tr').each((_, trElement) => {
			var dataTemp = [];
			const dataChartTr = $(trElement);
			
			dataChartTr.find('td').each((_, tdElement) => {
				const dataChartTd = $(tdElement).text();
				
				dataTemp.push(dataChartTd);
			});
			
			dataList.push(dataTemp);
		});
		
		data.listData = dataList;
	}).get()

	return data;
}

export default WallStreetBets;
