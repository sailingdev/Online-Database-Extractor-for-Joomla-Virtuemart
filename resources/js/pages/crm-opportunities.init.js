/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: CRM Opportunities init
*/

$( document ).ready(function() {
    var colors = ['#4fc6e1','#6658dd','#f7b84b','#f1556c','#1abc9c'];
    var dataColors = $("#status-chart").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var DrawSparkline = function() {
        $('#status-chart').sparkline([20, 40, 30, 10, 28], {
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