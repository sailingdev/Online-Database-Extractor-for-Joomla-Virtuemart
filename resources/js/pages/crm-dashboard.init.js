/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: CRM Dashboard init
*/


//
// Candlestick Chart - 1
//
var colors = ['#6658dd','#1abc9c'];
var dataColors = $("#sales-analytics").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 385,
        type: 'candlestick',
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[0],
                downward: colors[1]
            }
        }
    },
    series: [{
        data: seriesData
    }],

    stroke: {
        show: true,
        colors: '#f1f3fa',
        width: [1, 4]
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#sales-analytics"),
    options
);

chart.render();

//
// Sales Analytics
//
var colors = ['#1abc9c', '#4a81d4'];
var dataColors = $("#deal-analytics").data('colors');
if (dataColors) {
	colors = dataColors.split(",");
}

var options = {
	series: [{
		name: 'Won',
		type: 'column',
		data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
	}, {
		name: 'Loss',
		type: 'line',
		data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
	}],
	chart: {
		height: 370,
		type: 'line',
	},
	stroke: {
		width: [2, 3]
	},
	plotOptions: {
		bar: {
			columnWidth: '50%'
		}
	},
	colors: colors,
	dataLabels: {
		enabled: true,
		enabledOnSeries: [1]
	},
	labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
	xaxis: {
		type: 'datetime'
	},
	legend: {
        offsetY: 7,
	},
	grid: {
		padding: {
		  bottom: 20
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'light',
			type: "horizontal",
			shadeIntensity: 0.25,
			gradientToColors: undefined,
			inverseColors: true,
			opacityFrom: 0.75,
			opacityTo: 0.75,
			stops: [0, 0, 0]
		},
	},
	yaxis: [{
		title: {
			text: 'Net Revenue',
		},

	}, {
		opposite: true,
		title: {
			text: 'Number of Sales'
		}
	}]
};

var chart = new ApexCharts(document.querySelector("#deal-analytics"), options);
chart.render();



//
// Radialbar Chart - 3
//
var colors = ['#f1556c'];
var dataColors = $("#campaigns-ratio-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 285,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        gradient: {
            enabled: true,
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    colors: colors,
    series: [67],
    labels: ['Campaigns Ratio'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 180
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#campaigns-ratio-chart"),
    options
);

chart.render();