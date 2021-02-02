/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Ecommerce Dashboard init js
*/

! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body"),
        this.charts = []
    };

    
    Dashboard.prototype.initCharts = function() {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
        };

        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#revenue-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }

        var options = {
            chart: {
                height: 363,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    opacity: 0.2,
                    blur: 7,
                    left: -7,
                    top: 7
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 4
            },
            series: [{
                name: 'Current Week',
                type: 'area',
                data: [10, 20, 15, 25, 20, 30, 20]
            }, {
                name: 'Previous Week',
                type: 'line',
                data: [0, 15, 10, 30, 15, 35, 25]
            }],
            fill: {
                type: 'solid',
                opacity: [0.35, 1],
            },
            colors: colors,
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                type: 'string',
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "k"
                    },
                    offsetX: -15
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#revenue-chart"),
            options
        );

        chart.render();
    },
    // inits the map
    Dashboard.prototype.initMaps = function() {
        //various examples
        if ($('#world-map-markers').length > 0) {
            $('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                regionStyle: {
                    initial: {
                        fill: '#e3eaef'
                    }
                },
                markerStyle: {
                    initial: {
                        r: 9,
                        'fill': '#727cf5',
                        'fill-opacity': 0.9,
                        'stroke': '#fff',
                        'stroke-width': 7,
                        'stroke-opacity': 0.4
                    },

                    hover: {
                        'stroke': '#fff',
                        'fill-opacity': 1,
                        'stroke-width': 1.5
                    }
                },
                backgroundColor: 'transparent',
                markers: [{
                    latLng: [40.71, -74.00],
                    name: 'New York'
                }, {
                    latLng: [37.77, -122.41],
                    name: 'San Francisco'
                }, {
                    latLng: [-33.86, 151.20],
                    name: 'Sydney'
                }, {
                    latLng: [1.3, 103.8],
                    name: 'Singapore'
                }],
                zoomOnScroll: false
            });
        }
    },
    //initializing various components and plugins
    Dashboard.prototype.init = function () {
        var $this = this;
        // font
        // Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';        
        
        // init charts
        this.initCharts();

        //init maps
        this.initMaps();
    },

    //init flotchart
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

    //initializing Dashboard
function ($) {
    "use strict";
    $(document).ready(function(e) {
        $.Dashboard.init();
    });
}(window.jQuery);