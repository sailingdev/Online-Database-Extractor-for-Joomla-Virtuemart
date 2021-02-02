/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Morris charts init js
*/

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            dataLabels: false,
            resize: true, //defaulted to true
            gridLineColor: 'rgba(65, 80, 95, 0.07)',
            barColors: lineColors
        });
    },

    //creates area chart
    MorrisCharts.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, opacity,lineColors) {
        Morris.Area({
            element: element,
            pointSize: pointSize,
            lineWidth: lineWidth,
            data: data,
            xkey: xkey,
            dataLabels: false,
            ykeys: ykeys,
            labels: labels,
            fillOpacity: opacity,
            hideHover: 'auto',
            resize: true,
            gridLineColor: 'rgba(65, 80, 95, 0.07)',
            lineColors: lineColors
        });
    },

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          dataLabels: false,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: 'rgba(65, 80, 95, 0.07)',
          hideHover: 'auto',
          lineWidth: '3px',
          pointSize: 0,
          preUnits: '$',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },

    //creates Bar chart
    MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            dataLabels: false,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: 'rgba(65, 80, 95, 0.07)',
            barSizeRatio: 0.4,
            xLabelAngle: 35,
            barColors: lineColors
        });
    },

    //creates area chart with dotted
    MorrisCharts.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 1,
            data: data,
            dataLabels: false,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            pointFillColors: Pfillcolor,
            pointStrokeColors: Pstockcolor,
            resize: true,
            smooth: false,
            behaveLikeLine: true,
            fillOpacity: 0.4,
            gridLineColor: 'rgba(65, 80, 95, 0.07)',
            lineColors: lineColors
        });
    },
        
    //creates Donut chart
    MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            barSize: 0.2,
            resize: true, //defaulted to true
            colors: colors,
            backgroundColor: 'transparent'
        });
    },
    MorrisCharts.prototype.init = function() {

        //creating Stacked chart
        var $stckedData  = [
            { y: '2007', a: 45, b: 180, c: 100 },
            { y: '2008', a: 75,  b: 65, c: 80 },
            { y: '2009', a: 100, b: 90, c: 56 },
            { y: '2010', a: 75,  b: 65, c: 89 },
            { y: '2011', a: 100, b: 90, c: 120 },
            { y: '2012', a: 75,  b: 65, c: 110 },
            { y: '2013', a: 50,  b: 40, c: 85 },
            { y: '2014', a: 75,  b: 65, c: 52 },
            { y: '2015', a: 50,  b: 40, c: 77 },
            { y: '2016', a: 75,  b: 65, c: 90 },
            { y: '2017', a: 100, b: 90, c: 130 },
            { y: '2018', a: 80, b: 65, c: 95 }
        ];
        var colors = ['#4a81d4','#4fc6e1','#e3eaef'];
		var dataColors = $("#morris-bar-stacked").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b', 'c'], ["Bitcoin", "Ethereum", "Litecoin"], colors);

        //creating area chart
        var $areaData = [
            { y: '2012', a: 10, b: 20 },
            { y: '2013', a: 75,  b: 65 },
            { y: '2014', a: 50,  b: 40 },
            { y: '2015', a: 75,  b: 65 },
            { y: '2016', a: 50,  b: 40 },
            { y: '2017', a: 75,  b: 65 },
            { y: '2018', a: 90, b: 60 }
        ];
        var colors = ['#4a81d4', "#f1556c"];
		var dataColors = $("#morris-area-example").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b'], ["Bitcoin", "Ethereum"],['1'], colors);

        //create line chart
        var $data  = [
            { y: '2010', a: 50, b: 0 },
            { y: '2011', a: 75, b: 50 },
            { y: '2012', a: 30, b: 80 },
            { y: '2013', a: 50, b: 50 },
            { y: '2014', a: 75, b: 10 },
            { y: '2015', a: 50, b: 40 },
            { y: '2016', a: 75, b: 50 },
            { y: '2017', a: 100, b: 70 }
        ];
        var colors = ['#4a81d4', '#f672a7'];
		var dataColors = $("#morris-line-example").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createLineChart('morris-line-example', $data, 'y', ['a', 'b'], ["Bitcoin", "Ethereum"],['0.1'],['#ffffff'],['#999999'], colors);


        //creating bar chart
        var $barData  = [
            { y: '2012', a: 100, b: 90 , c: 40 },
            { y: '2013', a: 75,  b: 65 , c: 20 },
            { y: '2014', a: 50,  b: 40 , c: 50 },
            { y: '2015', a: 75,  b: 65 , c: 95 },
            { y: '2016', a: 50,  b: 40 , c: 22 },
            { y: '2017', a: 75,  b: 65 , c: 56 },
            { y: '2018', a: 100, b: 90 , c: 60 }
        ];
        var colors = ['#02c0ce','#0acf97', '#ebeff2'];
		var dataColors = $("#morris-bar-example").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ["Bitcoin", "Ethereum", "Litecoin"], colors);

        //creating area chart with dotted
        var $areaDotData = [
            { y: '2012', a: 10, b: 20 },
            { y: '2013', a: 75,  b: 65 },
            { y: '2014', a: 50,  b: 40 },
            { y: '2015', a: 75,  b: 65 },
            { y: '2016', a: 50,  b: 40 },
            { y: '2017', a: 75,  b: 65 },
            { y: '2018', a: 90, b: 60 }
        ];
        var colors = ['#e3eaef', "#6658dd"];
		var dataColors = $("#morris-area-with-dotted").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b'], ["Bitcoin","Litecoin"],['#ffffff'],['#999999'], colors);

        //creating donut chart
        var $donutData = [
            {label: "Ethereum", value: 12},
            {label: "Bitcoin", value: 30},
            {label: "Litecoin", value: 20}
        ];
        var colors = ['#4fc6e1','#6658dd', '#ebeff2'];
		var dataColors = $("#morris-donut-example").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createDonutChart('morris-donut-example', $donutData, colors);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);