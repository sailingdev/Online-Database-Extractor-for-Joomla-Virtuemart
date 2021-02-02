/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Dashboard 2 init
*/

$( document ).ready(function() {
    
    var DrawSparkline = function() {
        // Line Chart
        var colors = ['#00acc1', '#f1556c'];
        var dataColors = $("#lifetime-sales").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#lifetime-sales').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '220',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.3),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        $('#lifetime-sales').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: "100%",
            height: '220',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: hexToRGB(colors[1], 0.3),
            composite: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        // Bar Chart
        var colors = ['#00acc1'];
        var dataColors = $("#income-amounts").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#income-amounts').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '220',
            barWidth: '10',
            barSpacing: '3',
            barColor: colors
        });

        // Pie Chart
        var colors = ['#00acc1','#4b88e4','#e3eaef','#fd7e14'];
        var dataColors = $("#total-users").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#total-users').sparkline([20, 40, 30, 10], {
            type: 'pie',
            width: '220',
            height: '220',
            sliceColors: colors
        });
    };
    
    DrawSparkline();
    
    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });
});

// Vector map
//various examples
var colors = ['#6658dd'];
var dataColors = $("#world-map-markers").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
$('#world-map-markers').vectorMap({
    map : 'world_mill_en',
    normalizeFunction : 'polynomial',
    hoverOpacity : 0.7,
    hoverColor : false,
    regionStyle : {
        initial : {
            fill : '#ced4da'
        }
    },
     markerStyle: {
        initial: {
            r: 9,
            'fill': colors[0],
            'fill-opacity': 0.9,
            'stroke': '#fff',
            'stroke-width' : 7,
            'stroke-opacity': 0.4
        },

        hover: {
            'stroke': '#fff',
            'fill-opacity': 1,
            'stroke-width': 1.5
        }
    },
    backgroundColor : 'transparent',
    markers : [{
        latLng : [41.90, 12.45],
        name : 'Vatican City'
    }, {
        latLng : [43.73, 7.41],
        name : 'Monaco'
    }, {
        latLng : [-0.52, 166.93],
        name : 'Nauru'
    }, {
        latLng : [-8.51, 179.21],
        name : 'Tuvalu'
    }, {
        latLng : [43.93, 12.46],
        name : 'San Marino'
    }, {
        latLng : [47.14, 9.52],
        name : 'Liechtenstein'
    }, {
        latLng : [7.11, 171.06],
        name : 'Marshall Islands'
    }, {
        latLng : [17.3, -62.73],
        name : 'Saint Kitts and Nevis'
    }, {
        latLng : [3.2, 73.22],
        name : 'Maldives'
    }, {
        latLng : [35.88, 14.5],
        name : 'Malta'
    }, {
        latLng : [12.05, -61.75],
        name : 'Grenada'
    }, {
        latLng : [13.16, -61.23],
        name : 'Saint Vincent and the Grenadines'
    }, {
        latLng : [13.16, -59.55],
        name : 'Barbados'
    }, {
        latLng : [17.11, -61.85],
        name : 'Antigua and Barbuda'
    }, {
        latLng : [-4.61, 55.45],
        name : 'Seychelles'
    }, {
        latLng : [7.35, 134.46],
        name : 'Palau'
    }, {
        latLng : [42.5, 1.51],
        name : 'Andorra'
    }, {
        latLng : [14.01, -60.98],
        name : 'Saint Lucia'
    }, {
        latLng : [6.91, 158.18],
        name : 'Federated States of Micronesia'
    }, {
        latLng : [1.3, 103.8],
        name : 'Singapore'
    }, {
        latLng : [0.33, 6.73],
        name : 'SÃ£o TomÃ© and PrÃ­ncipe'
    }]
});

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}