/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Leads init js
*/

!function($) {
    "use strict";

    var LeadsCharts = function() {};

    //creates Stacked chart
    LeadsCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            dataLabels: false,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: 'rgba(65, 80, 95, 0.07)',
            barSizeRatio: 0.2,
            barColors: lineColors
        });
    },

    LeadsCharts.prototype.init = function() {

        //creating Stacked chart
        var $stckedData  = [
            { y: '2012', a: 75,  b: 65},
            { y: '2013', a: 50,  b: 40},
            { y: '2014', a: 75,  b: 65},
            { y: '2015', a: 50,  b: 40},
            { y: '2016', a: 75,  b: 65},
            { y: '2017', a: 100, b: 90},
            { y: '2018', a: 80, b: 65}
        ];
        var colors = ['#4a81d4','#e3eaef'];
		var dataColors = $("#leads-statics").data('colors');
		if (dataColors) {
			colors = dataColors.split(",");
		}
        this.createStackedChart('leads-statics', $stckedData, 'y', ['a', 'b'], ["Won Leads", "Lost Leads"], colors);
    },
    //init
    $.LeadsCharts = new LeadsCharts, $.LeadsCharts.Constructor = LeadsCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.LeadsCharts.init();
}(window.jQuery);