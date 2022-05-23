jQuery(document).ready(function() {
	//Fabrx Stacked Columns Script
	Highcharts.chart('FabrxAreaChartOne', {
		chart: {
			type: 'areaspline',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			lineWidth: 1,
			lineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		tooltip: {
			pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0,
			},
			areaspline: {
				pointStart: 0,
				marker: {
					enabled: false,
					symbol: 'circle',
					radius: 2,
					states: {
						hover: {
							enabled: true,
						},
					}
				}
			}
		},
		series: [{
			name: 'Legend',
			data: [0, 568, 985, 1023, 1230, 652, 1456, 456, 2340, 1865, 1455, 2300],
			color: '#97C3FF',
		}]
	});
});

jQuery(document).ready(function() {  //////////////////////////////////////////ESTE ES ////////////////////////////////////
	
	$.ajax({
		url: "http://localhost:8090/dashDataOrder",
		async: false,
		success: function(data) {

			var theList = data;
			for (i = 0; i < theList.length; i++) {

				if (theList[i].id == 1) {
					
					// montos en dolares
					var currencyUSD		= theList[i].currency;
					var januaryUSD 		= parseInt(theList[i].january);
					var februaryUSD 	= parseInt(theList[i].february);
					var marchUSD 		= parseInt(theList[i].march);
					var aprilUSD		= parseInt(theList[i].april);
					var mayUSD 			= parseInt(theList[i].may);
					var juneUSD 		= parseInt(theList[i].june);
					var julyUSD 		= parseInt(theList[i].july);
					var augustUSD 		= parseInt(theList[i].august);
					var septemberUSD 	= parseInt(theList[i].september);
					var octoberUSD 		= parseInt(theList[i].october);
					var novemberUSD 	= parseInt(theList[i].november);
					var decemberUSD 	= parseInt(theList[i].december);
												

				} else if (theList[i].id == 2) {
					//montos en pesos
					
					var currencyDOP		= theList[i].currency;
					var januaryDOP 		= parseInt(theList[i].january);
					var februaryDOP 	= parseInt(theList[i].february);
					var marchDOP 		= parseInt(theList[i].march);
					var aprilDOP		= parseInt(theList[i].april);
					var mayDOP 			= parseInt(theList[i].may);
					var juneDOP 		= parseInt(theList[i].june);
					var julyDOP 		= parseInt(theList[i].july);
					var augustDOP 		= parseInt(theList[i].august);
					var septemberDOP 	= parseInt(theList[i].september);
					var octoberDOP 		= parseInt(theList[i].october);
					var novemberDOP 	= parseInt(theList[i].november);
					var decemberDOP 	= parseInt(theList[i].december);		
									
				}
				
				doSomthingOnComplete1(	currencyDOP, currencyUSD,
										januaryUSD,  januaryDOP,
										februaryUSD, februaryDOP,
										marchUSD,	 marchDOP,
										aprilUSD,	 aprilDOP,
										mayUSD,		 mayDOP,
										juneUSD,     juneDOP,
										julyUSD,     julyDOP,
										augustUSD,   augustDOP,
										septemberUSD,septemberDOP,
										octoberUSD,  octoberDOP,
										novemberUSD, novemberDOP,
										decemberUSD, decemberDOP);				
			  }			
		 },
	});
	
	function doSomthingOnComplete1(		currencyDOP, currencyUSD,
										januaryUSD,  januaryDOP,
										februaryUSD, februaryDOP,
										marchUSD,	 marchDOP,
										aprilUSD,	 aprilDOP,
										mayUSD,		 mayDOP,
										juneUSD,     juneDOP,
										julyUSD,     julyDOP,
										augustUSD,   augustDOP,
										septemberUSD,septemberDOP,
										octoberUSD,  octoberDOP,
										novemberUSD, novemberDOP,
										decemberUSD, decemberDOP){
									
	//Fabrx Single Bar Script
	Highcharts.chart('FabrxAreaChartTwo', {
		chart: {
			type: 'areaspline',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			lineWidth: 1,
			lineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		tooltip: {
			pointFormat: '{series.name} <b>{point.y:,.0f}</b><br/>',
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0,
			},
			areaspline: {
				pointStart: 0,
				marker: {
					enabled: false,
					symbol: 'circle',
					radius: 2,
					states: {
						hover: {
							enabled: true,
						},
					}
				}
			}
		},
		series: [{
			name: 'Monto en ' + currencyUSD,
			color: '#006EFF',
			data: [januaryUSD, februaryUSD, marchUSD, aprilUSD, mayUSD, juneUSD, julyUSD, augustUSD, septemberUSD, octoberUSD, novemberUSD, decemberUSD],
		},
		{
			name: 'Monto en ' + currencyDOP,
			color: '#97C3FF',
			data: [januaryDOP, februaryDOP, marchDOP, aprilDOP, mayDOP, juneDOP, julyDOP, augustDOP, septemberDOP, octoberDOP, novemberDOP, decemberDOP],
		},]
	});
	}
});

jQuery(document).ready(function() {
	//Fabrx Stacked Bar Script
	Highcharts.chart('FabrxPointsChartOne', {
		chart: {
			type: 'line',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
			lineWidth: 1,
			lineColor: '#EAEAEA',
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			line: {
				marker: {
					lineWidth: 0,
					enabledThreshold: 0,
					symbol: false,
				},
			},
			series: {
				lineWidth: 1,
			},
		},
		series: [{
			name: 'Legend',
			color: '#006EFF',
			data: [450, 586, 1155, 800, 456, 1456, 1256, 956, 1156, 1856, 1669, 2356],
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Multiple Bar Script
	Highcharts.chart('FabrxPointsChartTwo', {
		chart: {
			type: 'line',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			lineWidth: 1,
			lineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			series: {
				lineWidth: 1,
			},
		},
		series: [{
			name: 'Legend',
			color: '#006EFF',
			data: [0, 980, 550, 1500, 1000, 1950, 1300, 1450, 1456, 1956, 1236, 1450],
		},
		{
			name: 'Legend',
			color: '#97C3FF',
			data: [1300, 500, 850, 1100, 650, 980, 2100, 1000, 456, 350, 1030, 962],
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Single Line Chart Script
	Highcharts.chart('FabrxMultipleColumnsChartOne', {
		chart: {
			type: 'column',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			title: {
				text: '',
			},
			lineWidth: 1,
			lineColor: '#EAEAEA',
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			series: {
				lineWidth: 1,
			},
			column: {
				pointPadding: 0.17,
				borderWidth: 0,
			},
		},
		series: [{
			name: 'Legend',
			color: '#006EFF',
			data: [350, 1856, 876, 963, 856, 456, 750, 2156, 1489, 876, 456, 1150],
		},
		{
			name: 'Legend',
			color: '#97C3FF',
			data: [465, 1236, 700, 356, 513, 654, 458, 1456, 956, 1321, 789, 1585],
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Double Line Chart Script
	Highcharts.chart('FabrxStackedChartOne', {
		chart: {
			type: 'column',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
			lineWidth: 1,
			lineColor: '#EAEAEA',
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			series: {
				lineWidth: 1,
			},
			column: {
				pointPadding: 0,
				borderWidth: 0,
				stacking: 'normal',
			},
		},
		series: [{
			name: 'Legend',
			color: '#006EFF',
			data: [256, 632, 120, 230, 200, 542, 653, 450, 236, 759, 1352, 1230],
			stack: 'male',
		},
		{
			name: 'Legend',
			color: '#97C3FF',
			data: [152, 546, 1590, 546, 1800, 1653, 1450, 450, 236, 759, 356, 756],
			stack: 'male',
		}]
	});
});

jQuery(document).ready(function() { 

	//Fabrx Curved Line Chart Script
	Highcharts.chart('FabrxStackedChartTwo', {
		chart: {
			type: 'column',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
			lineWidth: 1,
			lineColor: '#EAEAEA',
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			series: {
				lineWidth: 1,
			},
			column: {
				pointPadding: 0,
				borderWidth: 0,
			},
		},
		series: [{
			name: 'Legend',
			color: '#006EFF',
			data: [0, 480, 850, 1345, 1675, 2340, 524, 1450, 1856, 956, 775, 1240],
			stack: 'male',
		},
		{
			name: 'Legend',
			color: '#97C3FF',
			data: [0, 480, 850, 1345, 1675, 2340, 524, 1450, 1856, 956, 775, 1240],
			stack: 'male',
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Dot Plots Chart Chart Script
	Highcharts.chart('FabrxStackedChartThree', {
		chart: {
			type: 'column',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				enabled: true,
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
			lineWidth: 1,
			lineColor: '#EAEAEA',
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			series: {
				lineWidth: 1,
			},
			column: {
				pointPadding: 0,
				borderWidth: 0,
			},
		},
		series: [{
			name: 'Legend',
			color: '#006EFF',
			data: [450, 652, 785, 986, 1023, 1356, 1562, 1763, 1950, 2100, 1600, 1789, 1235, 1020, 850, 650, 350, 950, 1562, 1950, 250],
			stack: 'male',
		},
		{
			name: 'Legend',
			color: '#97C3FF',
			data: [450, 652, 785, 986, 1023, 1356, 1562, 1763, 1950, 2100, 1600, 1789, 1235, 1020, 850, 650, 350, 950, 1562, 1950, 250],
			stack: 'male',
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Stacked Area Chart Script
	Highcharts.chart('Fabrx3dBubbleChartOne', {
		chart: {
			borderWidth: 0,
			type: 'bubble',
			zoomType: 'xy',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			lineWidth: 1,
			lineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		series: [{
			data: [[9, 81, 15.2], [98, 5, 15], [51, 50, 15], [41, 22, 15], [58, 24, 15], [78, 37, 15], [55, 56, 15.2], [18, 45, 15], [42, 44, 15], [3, 52, 15], [31, 18, 15.2], [79, 91, 15], [93, 23, 15], [44, 83, 15], [42, 38, 15]],
			marker: {
				lineWidth: 0,
				fillColor: {
					radialGradient: {
						cx: 0.4, cy: 0.3, r: 0.7,
					},
					stops: [[0, '#006EFF']]
				}
			}
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Area Chart Chart Script
	Highcharts.chart('FabrxSplineChartOne', {
		chart: {
			type: 'spline',
			animation: Highcharts.svg,
			backgroundColor: null,
			events: {
				load: function() {
					var series = this.series[0];
					setInterval(function() {
						var x = (new Date()).getTime(),
							y = Math.random();
						series.addPoint([x, y], true, true);
					}, 1000);
				}
			}
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: '#EAEAEA',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				enabled: false,
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		yAxis: {
			gridLineColor: '#EAEAEA',
			lineWidth: 1,
			lineColor: '#EAEAEA',
			title: {
				text: '',
			},
			labels: {
				style: {
					color: '#959393',
					fontSize: '12px',
					fontFamily: "'Roboto', sans-serif",
				},
			},
		},
		legend: {
			itemStyle: {
				color: '#3F3B3B',
				fontSize: '12px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 9,
			symbolHeight: 9,
			itemDistance: 30,
			symbolPadding: 10,
		},
		time: {
			useUTC: false
		},
		accessibility: {
			announceNewData: {
				enabled: true,
				minAnnounceInterval: 2500,
				announcementFormatter: function(allSeries, newSeries, newPoint) {
					if (newPoint) {
						return 'New point added. Value: ' + newPoint.y;
					}
					return false;
				}
			}
		},
		tooltip: {
			headerFormat: '<b>{series.name}</b><br/>',
			pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
		},
		plotOptions: {
			spline: {
				marker: {
					enabled: false,
				},
			},
		},
		series: [{
			color: '#006EFF',
			name: 'Legend',
			data: (function() {
				var data = [],
					time = (new Date()).getTime(),
					i;
				for (i = -19; i <= 0; i += 1) {
					data.push({
						x: time + i * 1000,
						y: Math.random()
					});
				}
				return data;
			}())
		}]
	});
});

jQuery(document).ready(function() {
	//Fabrx Pie Chart Script
	Highcharts.chart('FabrxPieChartOne', {
		chart: {
			type: 'pie',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			lineColor: 'transparent',
			tickLength: 0,
			labels: {
				enabled: false,
			},
		},
		yAxis: {
			gridLineColor: 'transparent',
			title: {
				text: '',
			},
			labels: {
				enabled: false,
			},
		},
		legend: {
			itemStyle: {
				color: '#5D6F88',
				fontSize: '12px',
				fontWeight: '500',
				fontFamily: "'Roboto', sans-serif",
			},
			margin: 30,
			padding: 0,
			symbolWidth: 11,
			symbolHeight: 11,
			itemDistance: 30,
			symbolPadding: 10,
		},
		plotOptions: {
			pie: {
				size: 230,
				borderWidth: 0,
				allowPointSelect: true,
			},
			series: {
				lineWidth: 1,
			},
			column: {
				pointPadding: 0,
				borderWidth: 0,
			},
		},
		accessibility: {
			announceNewData: {
				enabled: true,
			},
			point: {
				valueSuffix: '%',
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			innerSize: '70%',
			dataLabels: [{
				enabled: false,
			}],
			name: 'Browsers',
			showInLegend: true,
			data: [
				{ name: '$986.27', y: 20, color: '#97C3FF', },
				{ name: '$67.70', y: 15, color: '#5FDD97', },
				{ name: '$361.12', y: 15, color: '#F46363', }],

		}
		],
	});
});


jQuery(document).ready(function() {

	$.ajax({
		url: "http://localhost:8090/dashData",
		async: false,
		success: function(data) {

			var theList = data;
			for (i = 0; i < theList.length; i++) {

				if (theList[i].id == 1) {
					var request = theList[i].value;

				} else if (theList[i].id == 2) {
					var order = theList[i].value;

				}
				doSomthingOnComplete1(request, order);
			}

		},

	});

	function doSomthingOnComplete1(request, order) {

		//Fabrx Pie Chart Script
		Highcharts.chart('FabrxPieChartOne2', {

			chart: {
				type: 'pie',
				backgroundColor: null,
			},
			title: {
				text: '',
			},
			credits: {
				enabled: false,
			},
			xAxis: {
				lineColor: 'transparent',
				tickLength: 0,
				labels: {
					enabled: false,
				},
			},

			yAxis: {
				gridLineColor: 'transparent',
				title: {
					text: '',
				},
				labels: {
					enabled: false,
				},
			},
			legend: {
				itemStyle: {
					color: '#5D6F88',
					fontSize: '12px',
					fontWeight: '500',
					fontFamily: "'Roboto', sans-serif",
				},
				margin: 30,
				padding: 0,
				symbolWidth: 11,
				symbolHeight: 11,
				itemDistance: 30,
				symbolPadding: 10,
			},
			plotOptions: {
				pie: {
					size: 230,
					borderWidth: 0,
					allowPointSelect: true,
				},
				series: {
					lineWidth: 1,
				},
				column: {
					pointPadding: 0,
					borderWidth: 0,
				},
			},
			accessibility: {
				announceNewData: {
					enabled: true,
				},
				point: {
					valueSuffix: '%',
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			},



			series: [{
				innerSize: '70%',
				dataLabels: [{
					enabled: false,
				}],



				name: 'Browsers',
				showInLegend: true,
				data: [

					{ name: 'Solicitudes ' + request, y: request, color: '#97C3FF', },
					{ name: 'Ordenes ' + order, y: order, color: '#2d5dc8', }],

			}
			],
		});
	}
});



jQuery(document).ready(function() {
	//Fabrx Pie Chart Script
	Highcharts.chart('FabrxPieChartTwo', {
		chart: {
			type: 'pie',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		legend: {
			symbolWidth: 11,
			symbolHeight: 11,
			itemDistance: 30,
			itemMarginTop: 7,
			itemMarginBottom: 7,
			itemStyle: {
				color: '#5D6F88',
				fontSize: '16px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
		},
		xAxis: {
			lineColor: 'transparent',
			tickLength: 0,
			labels: {
				enabled: false,
			},
		},
		yAxis: {
			gridLineColor: 'transparent',
			title: {
				text: '',
			},
			labels: {
				enabled: false,
			},
		},
		responsive: {
			rules: [{
				condition: {
					minWidth: 500
				},
				chartOptions: {
					legend: {
						align: 'right',
						verticalAlign: 'middle',
						layout: 'vertical',
					},
				},
			}],
		},
		plotOptions: {
			pie: {
				size: 230,
				borderWidth: 0,
				allowPointSelect: true,
			},
			showInLegend: true,
			series: {
				lineWidth: 1,
			},
			column: {
				pointPadding: 0,
				borderWidth: 0,
			},
		},
		accessibility: {
			announceNewData: {
				enabled: true,
			},
			point: {
				valueSuffix: '%',
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			dataLabels: [{
				enabled: false,
			}],
			name: 'Browsers',
			showInLegend: true,
			data: [
				{ name: '$1,079.41', y: 28, color: '#97C3FF', },
				{ name: '$435.61', y: 20, color: '#F46363', },
				{ name: '$424.01', y: 10, color: '#FF9138', }],
		}
		],
	});
});

jQuery(document).ready(function() {
	//Fabrx Pie Chart Script
	Highcharts.Legend.prototype.colorizeItem = function(item, visible) {
		if (!this.chart.styledMode) {
			var legend = this,
				options = legend.options,
				legendItem = item.legendItem,
				legendLine = item.legendLine,
				legendSymbol = item.legendSymbol,
				hiddenColor = legend.itemHiddenStyle.color,
				textColor = visible ?
					options.itemStyle.color :
					hiddenColor,
				symbolColor = visible ?
					(item.color || hiddenColor) :
					hiddenColor,
				markerOptions = item.options && item.options.marker,
				symbolAttr = {
					fill: symbolColor
				};
			if (legendSymbol) {
				if (markerOptions) {

					symbolAttr = item.pointAttribs();
					if (!visible) {
						symbolAttr.stroke = symbolAttr.fill = hiddenColor;
					}
				}
				legendSymbol.attr(symbolAttr);
			}
		}
		Highcharts.fireEvent(this, 'afterColorizeItem', {
			item: item,
			visible: visible
		});
	}
});

jQuery(document).ready(function() {
	Highcharts.chart('FabrxPieChartThree', {
		chart: {
			type: 'solidgauge',
			height: '65%',
			backgroundColor: null,
		},
		title: {
			text: '',
		},
		legend: {
			align: 'right',
			verticalAlign: 'middle',
			layout: 'vertical',
			symbolWidth: 11,
			symbolHeight: 11,
			itemDistance: 30,
			itemMarginTop: 7,
			itemMarginBottom: 7,
			itemStyle: {
				color: '#5D6F88',
				fontSize: '16px',
				fontWeight: 'normal',
				fontFamily: "'Roboto', sans-serif",
			},
		},
		credits: {
			enabled: false,
		},
		tooltip: {
			enabled: false,
		},
		pane: {
			startAngle: 0,
			endAngle: 360,
			background: [{
				outerRadius: '95%',
				innerRadius: '88%',
				backgroundColor: '#F5F5F5',
				borderWidth: 0
			},
			{
				outerRadius: '70%',
				innerRadius: '63%',
				backgroundColor: '#F5F5F5',
				borderWidth: 0
			},
			{
				outerRadius: '45%',
				innerRadius: '38%',
				backgroundColor: '#F5F5F5',
				borderWidth: 0
			}]
		},
		yAxis: {
			min: 0,
			max: 100,
			lineWidth: 0,
			tickPositions: []
		},
		plotOptions: {
			solidgauge: {
				dataLabels: {
					enabled: false
				},
				linecap: 'round',
				stickyTracking: false,
				rounded: true,
				showInLegend: true
			}
		},
		series: [{
			name: '$425.48',
			marker: {
				fillColor: '#006EFF',
			},
			data: [{
				color: '#006EFF',
				radius: '95%',
				innerRadius: '88%',
				y: 62
			}]
		},
		{
			name: '$582.64',
			marker: {
				fillColor: '#59A0FF',
			},
			data: [{
				color: '#59A0FF',
				radius: '70%',
				innerRadius: '63%',
				y: 75
			}]
		},
		{
			name: '$65.04',
			marker: {
				fillColor: '#97C3FF',
			},
			data: [{
				color: '#97C3FF',
				radius: '45%',
				innerRadius: '38%',
				y: 75
			}]
		}]
	});
});