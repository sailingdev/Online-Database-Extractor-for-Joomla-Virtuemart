/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Flot charts init js
*/

! function($) {
	"use strict";

	var FlotChart = function() {
		this.$body = $("body")
		this.$realData = []
	};

	//creates plot graph
	FlotChart.prototype.createPlotGraph = function(selector, data1, data2, labels, colors, borderColor, bgColor) {
		//shows tooltip
		function showTooltip(x, y, contents) {
			$('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
				position : 'absolute',
				top : y + 5,
				left : x + 5
			}).appendTo("body").fadeIn(200);
		}


		$.plot($(selector), [{
			data : data1,
			label : labels[0],
			color : colors[0]
		}, {
			data : data2,
			label : labels[1],
			color : colors[1]
		}], {
			series : {
				lines : {
					show : true,
					fill : true,
					lineWidth : 2,
					fillColor : {
						colors : [{
							opacity : 0.5
						}, {
							opacity : 0.5
						}, {
							opacity: 0.8
						}]
					}
				},
				points : {
					show : true
				},
				shadowSize : 0
			},

			grid : {
				hoverable : true,
				clickable : true,
				borderColor : borderColor,
				tickColor : "transparent",
				borderWidth : 1,
				labelMargin : 10,
				backgroundColor : bgColor
			},
			legend : {
				position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
			},
			yaxis : {
				axisLabel: "Daily Visits",
				tickColor : 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			},
			xaxis : {
				axisLabel: "Last Days",
				tickColor : 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			},
			tooltip : true,
			tooltipOpts : {
				content : '%s: Value of %x is %y',
				shifts : {
					x : -60,
					y : 25
				},
				defaultTheme : false
			},
			splines: {
				show: true,
				tension: 0.1, // float between 0 and 1, defaults to 0.5
				lineWidth: 1 // number, defaults to 2
			}
		});
	},
	//end plot graph

	//creates plot Dot graph
	FlotChart.prototype.createPlotDotGraph = function(selector, data1, data2, labelsDot, colorsDot, borderColorDot, bgColorDot) {
		//shows tooltip
		function showTooltip(x, y, contents) {
			$('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
				position : 'absolute',
				top : y + 5,
				left : x + 5
			}).appendTo("body").fadeIn(200);
		}

		$.plot($(selector), [{
			data : data1,
			label : labelsDot[0],
			color : colorsDot[0]
		}, {
			data : data2,
			label : labelsDot[1],
			color : colorsDot[1]
		}],
			{
			series : {
				lines : {
					show : true,
					fill : false,
					lineWidth : 3,
					fillColor : {
						colors : [{
							opacity : 0.3
						}, {
							opacity : 0.3
						}]
					}
				},
				curvedLines: {
					apply: true,
					active: true,
					monotonicFit: true
				},
				splines: {
					show: true,
					tension: 0.4,
					lineWidth: 5,
					fill: 0.4
				}
			},

			grid : {
				hoverable : true,
				clickable : true,
				borderColor : borderColorDot,
				tickColor : "#f9f9f9",
				borderWidth : 1,
				labelMargin : 10,
				backgroundColor : bgColorDot
			},
			legend : {
				position : "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
			},
			yaxis : {
				axisLabel: "Gold Price(USD)",
				tickColor : 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			},
			xaxis : {
				axisLabel: "Numbers",
				tickColor : 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			},
			tooltip : false,
		});
	},
	//end plot Dot graph

	//creates Pie Chart
	FlotChart.prototype.createPieGraph = function(selector, labels, datas, colors) {
		
		var data = [{
			label : labels[0],
			data : datas[0]
        }, {
            label: labels[1],
            data: datas[1]
        }, {
            label: labels[2],
            data: datas[2]
        }, {
            label: labels[3],
            data: datas[3]
        }, {
            label: labels[4],
            data: datas[4]
        }];
		var options = {
			series : {
				pie: {
					show: true,
					radius: 1,
					label: {
						show: true,
						radius: 1,
						background: {
							opacity: 0.2
						}
					}
				}
			},
			legend : {
				show : false
			},
			grid : {
				hoverable : true,
				clickable : true
			},
			colors : colors,
			tooltip : true,
			tooltipOpts : {
				content : "%s, %p.0%"
			}
		};

		$.plot($(selector), data, options);
	},

	//returns some random data
	FlotChart.prototype.randomData = function() {
		var totalPoints = 300;
		if (this.$realData.length > 0)
			this.$realData = this.$realData.slice(1);

		// Do a random walk
		while (this.$realData.length < totalPoints) {

			var prev = this.$realData.length > 0 ? this.$realData[this.$realData.length - 1] : 50,
			    y = prev + Math.random() * 10 - 5;

			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}

			this.$realData.push(y);
		}

		// Zip the generated y values with the x values
		var res = [];
		for (var i = 0; i < this.$realData.length; ++i) {
			res.push([i, this.$realData[i]])
		}

		return res;
	}, FlotChart.prototype.createRealTimeGraph = function(selector, data, colors) {
		var plot = $.plot(selector, [data], {
			colors : colors,
			series : {
				grow : {
					active : false
				}, //disable auto grow
				shadowSize : 0, // drawing is faster without shadows
				lines : {
					show : true,
					fill : true,
					lineWidth : 2,
					steps : false
				}
			},
			grid : {
				show : true,
				aboveData : false,
				color : '#8391a2',
				labelMargin : 15,
				axisMargin : 0,
				borderWidth : 0,
				borderColor : null,
				minBorderMargin : 5,
				clickable : true,
				hoverable : true,
				autoHighlight : false,
				mouseActiveRadius : 20
			},
			tooltip : true, //activate tooltip
			tooltipOpts : {
				content : "Value is : %y.0" + "%",
				shifts : {
					x : -30,
					y : -50
				}
			},
			yaxis : {
				axisLabel: "Response Time (ms)",
				min : 0,
				max : 100,
				tickColor : 'rgba(65, 80, 95, 0.07)',
				color : '#8391a2'
			},
			xaxis : {
				axisLabel: "Point Value (1000)",
				show : true,
				tickColor : 'rgba(65, 80, 95, 0.07)',
				color : '#8391a2'
			}
		});

		return plot;
	},
	//creates Donut Chart
	FlotChart.prototype.createDonutGraph = function(selector, labels, datas, colors) {
		var data = [{
			label : labels[0],
			data : datas[0]
		}, {
			label : labels[1],
			data : datas[1]
		}, {
			label : labels[2],
			data : datas[2]
		},{
            label : labels[3],
            data : datas[3]
        }, {
			label : labels[4],
			data : datas[4]
		}];
		var options = {
			series : {
				pie : {
					show : true,
					innerRadius : 0.7
				}
			},
			legend : {
				show : true,
				labelFormatter : function(label, series) {
					return '<div style="font-size:14px;">&nbsp;' + label + '</div>'
				},
				labelBoxBorderColor : null,
				margin : 50,
				width : 20
			},
			grid : {
				hoverable : false,
				clickable : false
			},
			colors : colors,
			tooltip: false
		};

		$.plot($(selector), data, options);
	},
	//creates Bar Chart
	FlotChart.prototype.createStackBarGraph = function(selector, ticks, colors, data) {
		var options = {
			bars: {
				show: true,
				barWidth: 0.2,
				fill: 1
			},
			grid: {
				show: true,
				aboveData: false,
				labelMargin: 5,
				axisMargin: 0,
				borderWidth: 1,
				minBorderMargin: 5,
				clickable: true,
				hoverable: true,
				autoHighlight: false,
				mouseActiveRadius: 20,
				borderColor: 'rgba(65, 80, 95, 0.07)'
			},
			series: {
				stack: 0
			},
			legend: {
				position: "ne",
				margin: [0, -32],
				noColumns: 0,
				labelBoxBorderColor: null,
				labelFormatter: function (label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width: 30,
				height: 2
			},
			yaxis: ticks.y,
			xaxis: ticks.x,
			colors: colors,
			tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -30,
					y: -50
				}
			}
		};
		$.plot($(selector), data, options);
	},
	//creates Line Chart
	FlotChart.prototype.createLineGraph = function(selector, ticks, colors, data) {
		var options = {
			series: {
				lines: {
					show: true
				},
				points: {
					show: true
				}
			},
			legend : {
				position : "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
			},
			yaxis: ticks.y,
			xaxis: ticks.x,
			colors: colors,
			grid: {
				hoverable: true,
				borderColor: 'rgba(65, 80, 95, 0.07)',
				borderWidth: 1,
				backgroundColor: 'transparent'
			},
			tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -30,
					y: -50
				}
			}
		};
		return $.plot($(selector), data, options);
	},
	//creates Combine Chart
	FlotChart.prototype.createCombineGraph = function(selector, ticks, labels, datas, colors) {
		var data = [{
			label : labels[0],
			data : datas[0],
			color : colors[0],
			lines : {
				show : true,
				fill : true
			},
			points : {
				show : true
			}
		}, {
			label : labels[1],
			data : datas[1],
			color : colors[1],
			lines : {
				show : true
			},
			points : {
				show : true
			}
		}, {
			label : labels[2],
			data : datas[2],
			color : colors[2],
			bars : {
				show : true
			}
		}];
		var options = {
			series : {
				shadowSize : 0
			},
			grid : {
				hoverable : true,
				clickable : true,
				tickColor : "#f9f9f9",
				borderWidth : 1,
				borderColor : "rgba(65, 80, 95, 0.07)"
			},
			tooltip : true,
			colors: colors,
			tooltipOpts : {
				defaultTheme : false
			},
			legend : {
				position : "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
			},
			yaxis : {
				axisLabel: "Point Value (1000)",
				tickColor : 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			},
			xaxis : {
				axisLabel: "Daily Hours",
				ticks: ticks,
				tickColor : 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			}
		};

		$.plot($(selector), data, options);
	},

	//initializing various charts and components
	FlotChart.prototype.init = function() {
		//plot graph data
		var uploads = [[0, 13], [1, 22], [2, 27], [3, 36], [4, 40], [5, 25], [6, 36],[7, 20], [8, 12], [9, 20], [10, 48], [11, 16], [12, 14]];
		var downloads = [[0, 28], [1, 56], [2, 26], [3, 20], [4, 21], [5, 25], [6, 19],[7, 22], [8, 35], [9, 28], [10, 36], [11, 19], [12, 11]];
		var plabels = ["Bitcoin", "Ethereum", "Litecoin"];
		var colors = ['#4fc6e1','#6658dd'];
		var dataColors = $("#website-stats").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		var borderColor = 'rgba(65, 80, 95, 0.07)';
		var bgColor = 'transparent';
		this.createPlotGraph("#website-stats", uploads, downloads, plabels, colors, borderColor, bgColor);

		//plot graph Dot data
		var uploadsDot = [[0, 2], [1, 4], [2, 7], [3, 9], [4, 6], [5, 3], [6, 10],[7, 8], [8, 5], [9, 14], [10, 10], [11, 10], [12, 8]];
		var downloadsDot = [[0, 1], [1, 3], [2, 6], [3, 7], [4, 4], [5, 2], [6, 8],[7, 6], [8, 4], [9, 10], [10, 8], [11, 14], [12, 5]];
		var plabelsDot = ["Bitcoin", "Ethereum"];
		var colors = ['#6658dd','#f1556c'];
		var dataColors = $("#website-stats1").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		var borderColorDot = 'rgba(65, 80, 95, 0.07)';
		var bgColorDot = 'transparent';
		this.createPlotDotGraph("#website-stats1", uploadsDot, downloadsDot, plabelsDot, colors, borderColorDot, bgColorDot);

		//Pie graph data
		var pielabels = ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Cardano"];
		var datas = [48, 30, 15, 32, 26];
		var colors = ['#4a81d4','#f672a7','#f7b84b','#4fc6e1',"#1abc9c"];
		var dataColors = $("#pie-chart").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		this.createPieGraph("#pie-chart", pielabels, datas, colors);

		//real time data representation
		var colors = ['#4a81d4'];
		var dataColors = $("#flotRealTime").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		var plot = this.createRealTimeGraph('#flotRealTime', this.randomData(), [colors]);
		plot.draw();
		var $this = this;
		function updatePlot() {
			plot.setData([$this.randomData()]);
			// Since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			setTimeout(updatePlot, $('html').hasClass('mobile-device') ? 500 : 500);
		}

		updatePlot();

		//Donut pie graph data
		var donutlabels = ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Cardano"];
		var donutdatas = [48, 30, 15, 32, 26];
		var colors = ['#4a81d4','#f672a7','#f7b84b','#4fc6e1',"#1abc9c"];
		var dataColors = $("#donut-chart").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		this.createDonutGraph("#donut-chart", donutlabels, donutdatas, colors);

		//Combine graph data
		var data24Hours = [[0, 201], [1, 520], [2, 337], [3, 261], [4, 157], [5, 95], [6, 200], [7, 250], [8, 320], [9, 500], [10, 152], [11, 214], [12, 364], [13, 449], [14, 558], [15, 282], [16, 379], [17, 429], [18, 518], [19, 470], [20, 330], [21, 245], [22, 358], [23, 74]];
		var data48Hours = [[0, 311], [1, 630], [2, 447], [3, 371], [4, 267], [5, 205], [6, 310], [7, 360], [8, 430], [9, 610], [10, 262], [11, 324], [12, 474], [13, 559], [14, 668], [15, 392], [16, 489], [17, 539], [18, 628], [19, 580], [20, 440], [21, 355], [22, 468], [23, 184]];
		var dataDifference = [[23, 727], [22, 128], [21, 110], [20, 92], [19, 172], [18, 63], [17, 150], [16, 592], [15, 12], [14, 246], [13, 52], [12, 149], [11, 123], [10, 2], [9, 325], [8, 10], [7, 15], [6, 89], [5, 65], [4, 77], [3, 600], [2, 200], [1, 385], [0, 200]];
		var ticks = [[0, "22h"], [1, ""], [2, "00h"], [3, ""], [4, "02h"], [5, ""], [6, "04h"], [7, ""], [8, "06h"], [9, ""], [10, "08h"], [11, ""], [12, "10h"], [13, ""], [14, "12h"], [15, ""], [16, "14h"], [17, ""], [18, "16h"], [19, ""], [20, "18h"], [21, ""], [22, "20h"], [23, ""]];
		var combinelabels = ["Last 24 Hours", "Last 48 Hours", "Difference"];
		var combinedatas = [data24Hours, data48Hours, dataDifference];
		var colors = ['#e3eaef','#f1556c','#1abc9c'];
		var dataColors = $("#combine-chart").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		this.createCombineGraph("#combine-chart", ticks, combinelabels, combinedatas, colors);

		//bar chart = stacked
		var stack_ticks = {
			y: {
				axisLabel: "Sales Value (USD)",
				tickColor: 'rgba(65, 80, 95, 0.07)',
				font: {
					color: '#8391a2'
				}
			},
			x: {
				axisLabel: "Last 10 Days",
				tickColor: 'rgba(65, 80, 95, 0.07)',
				font: {
					color: '#8391a2'
				}
			}
		};

		//random data
		var d1 = [];
		for (var i = 0; i <= 10; i += 1)
			d1.push([i, parseInt(Math.random() * 30)]);

		var d2 = [];
		for (var i = 0; i <= 10; i += 1)
			d2.push([i, parseInt(Math.random() * 30)]);

		var d3 = [];
		for (var i = 0; i <= 10; i += 1)
			d3.push([i, parseInt(Math.random() * 30)]);

		var ds = new Array();

		ds.push({
			label: "Series One",
			data: d1,
			bars: {
				order: 1
			}
		});
		ds.push({
			label: "Series Two",
			data: d2,
			bars: {
				order: 2
			}
		});
		ds.push({
			label: "Series Three",
			data: d3,
			bars: {
				order: 3
			}
		});
		var colors = ['#4fc6e1','#f7b84b','#4a81d4'];
		var dataColors = $("#ordered-bars-chart").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		this.createStackBarGraph("#ordered-bars-chart", stack_ticks, colors, ds);


		//creating line chart
		var line_ticks = {
			y: {
				min: -1.2,
				max: 1.2,
				tickColor: 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			},
			x: {
				tickColor: 'rgba(65, 80, 95, 0.07)',
				font : {
					color : '#8391a2'
				}
			}
		};

		//sample data
		var sin = [],
			cos = [];
		var offset = 0;
		for (var i = 0; i < 12; i += 0.2) {
			sin.push([i, Math.sin(i + offset)]);
			cos.push([i, Math.cos(i + offset)]);
		}
		var line_data = [
			{
				data: sin,
				label: "Google",
			},
			{
				data: cos,
				label: "Yahoo"
			}
		];
		var colors = ['#6c757d','#f1556c'];
		var dataColors = $("#line-chart-alt").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
		this.createLineGraph("#line-chart-alt", line_ticks, colors, line_data);
	},

	//init flotchart
	$.FlotChart = new FlotChart, $.FlotChart.Constructor =
	FlotChart

}(window.jQuery),

//initializing flotchart
function($) {
	"use strict";
	$.FlotChart.init()
}(window.jQuery);