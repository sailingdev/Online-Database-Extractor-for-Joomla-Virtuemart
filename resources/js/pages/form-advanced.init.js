/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form advanced init js
*/

!function($) {
    "use strict";

    var FormAdvanced = function() {};

    //initializing tooltip
    FormAdvanced.prototype.initSelect2 = function() {
        // Select2
        $('[data-toggle="select2"]').select2();
    },

    //initializing popover
    //Max Length
    FormAdvanced.prototype.initMaxLength = function() {
        //Bootstrap-MaxLength
        $('input#defaultconfig').maxlength({
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        });

        $('input#thresholdconfig').maxlength({
            threshold: 20,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        });

        $('input#alloptions').maxlength({
            alwaysShow: true,
            separator: ' out of ',
            preText: 'You typed ',
            postText: ' chars available.',
            validate: true,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        });

        $('textarea#textarea').maxlength({
            alwaysShow: true,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        });

        $('input#placement').maxlength({
            alwaysShow: true,
            placement: 'top-left',
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        });
    },

    //initializing Custom Select
    FormAdvanced.prototype.initSelectize = function() {
        $('#selectize-tags').selectize({
            persist: false,
            createOnBlur: true,
            create: true
        });
        $('#selectize-select').selectize({
            create: true,
            sortField: {
                field: 'text',
                direction: 'asc'
            },
            dropdownParent: 'body'
        });
        $('#selectize-maximum').selectize({
            maxItems: 3
        });
        $('#selectize-links').selectize({
            theme: 'links',
            maxItems: null,
            valueField: 'id',
            searchField: 'title',
            options: [
                {id: 1, title: 'Coderthemes', url: 'https://coderthemes.com/'},
                {id: 2, title: 'Google', url: 'http://google.com'},
                {id: 3, title: 'Yahoo', url: 'http://yahoo.com'},
            ],
            render: {
                option: function(data, escape) {
                    return '<div class="option">' +
                            '<span class="title">' + escape(data.title) + '</span>' +
                            '<span class="url">' + escape(data.url) + '</span>' +
                        '</div>';
                },
                item: function(data, escape) {
                    return '<div class="item"><a href="' + escape(data.url) + '">' + escape(data.title) + '</a></div>';
                }
            },
            create: function(input) {
                return {
                    id: 0,
                    title: input,
                    url: '#'
                };
            }
        });
        $('#selectize-confirm').selectize({
            delimiter: ',',
            persist: false,
            onDelete: function(values) {
                return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
            }
        });
        $('#selectize-optgroup').selectize({
            sortField: 'text'
        });
        $('#selectize-programmatic').selectize({
            options: [
                {class: 'mammal', value: "dog", name: "Dog" },
                {class: 'mammal', value: "cat", name: "Cat" },
                {class: 'mammal', value: "horse", name: "Horse" },
                {class: 'mammal', value: "kangaroo", name: "Kangaroo" },
                {class: 'bird', value: 'duck', name: 'Duck'},
                {class: 'bird', value: 'chicken', name: 'Chicken'},
                {class: 'bird', value: 'ostrich', name: 'Ostrich'},
                {class: 'bird', value: 'seagull', name: 'Seagull'},
                {class: 'reptile', value: 'snake', name: 'Snake'},
                {class: 'reptile', value: 'lizard', name: 'Lizard'},
                {class: 'reptile', value: 'alligator', name: 'Alligator'},
                {class: 'reptile', value: 'turtle', name: 'Turtle'}
            ],
            optgroups: [
                {value: 'mammal', label: 'Mammal', label_scientific: 'Mammalia'},
                {value: 'bird', label: 'Bird', label_scientific: 'Aves'},
                {value: 'reptile', label: 'Reptile', label_scientific: 'Reptilia'}
            ],
            optgroupField: 'class',
            labelField: 'name',
            searchField: ['name'],
            render: {
                optgroup_header: function(data, escape) {
                    return '<div class="optgroup-header">' + escape(data.label) + ' <span class="scientific">(' + escape(data.label_scientific) + ')</span></div>';
                }
            }
        });

        $("#selectize-optgroup-column").selectize({
            options: [
                {id: 'avenger', make: 'dodge', model: 'Avenger'},
                {id: 'caliber', make: 'dodge', model: 'Caliber'},
                {id: 'caravan-grand-passenger', make: 'dodge', model: 'Caravan Grand Passenger'},
                {id: 'challenger', make: 'dodge', model: 'Challenger'},
                {id: 'ram-1500', make: 'dodge', model: 'Ram 1500'},
                {id: 'viper', make: 'dodge', model: 'Viper'},
                {id: 'a3', make: 'audi', model: 'A3'},
                {id: 'a6', make: 'audi', model: 'A6'},
                {id: 'r8', make: 'audi', model: 'R8'},
                {id: 'rs-4', make: 'audi', model: 'RS 4'},
                {id: 's4', make: 'audi', model: 'S4'},
                {id: 's8', make: 'audi', model: 'S8'},
                {id: 'tt', make: 'audi', model: 'TT'},
                {id: 'avalanche', make: 'chevrolet', model: 'Avalanche'},
                {id: 'aveo', make: 'chevrolet', model: 'Aveo'},
                {id: 'cobalt', make: 'chevrolet', model: 'Cobalt'},
                {id: 'silverado', make: 'chevrolet', model: 'Silverado'},
                {id: 'suburban', make: 'chevrolet', model: 'Suburban'},
                {id: 'tahoe', make: 'chevrolet', model: 'Tahoe'},
                {id: 'trail-blazer', make: 'chevrolet', model: 'TrailBlazer'},
            ],
            optgroups: [
                {$order: 3, id: 'dodge', name: 'Dodge'},
                {$order: 2, id: 'audi', name: 'Audi'},
                {$order: 1, id: 'chevrolet', name: 'Chevrolet'}
            ],
            labelField: 'model',
            valueField: 'id',
            optgroupField: 'make',
            optgroupLabelField: 'name',
            optgroupValueField: 'id',
            lockOptgroupOrder: true,
            searchField: ['model'],
            plugins: ['optgroup_columns'],
            openOnFocus: false
        });

        $('.selectize-close-btn').selectize({
            plugins: ['remove_button'],
            persist: false,
            create: true,
            render: {
                item: function(data, escape) {
                    return '<div>"' + escape(data.text) + '"</div>';
                }
            },
            onDelete: function(values) {
                return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
            }
        });

        $('.selectize-drop-header').selectize({
            sortField: 'text',
            hideSelected: false,
            plugins: {
                'dropdown_header': {
                    title: 'Language'
                }
            }
        })
    },

    //initializing Slimscroll
    FormAdvanced.prototype.initSwitchery = function() {
        $('[data-plugin="switchery"]').each(function (idx, obj) {
            new Switchery($(this)[0], $(this).data());
        });
    },

    //initializing form validation
    FormAdvanced.prototype.initMultiSelect = function() {
        if($('[data-plugin="multiselect"]').length > 0)
            $('[data-plugin="multiselect"]').multiSelect($(this).data());
    },

    // touchspin
    FormAdvanced.prototype.initTouchspin = function() {
        var defaultOptions = {
        };

        // touchspin
        $('[data-toggle="touchspin"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultOptions, $(obj).data());
            $(obj).TouchSpin(objOptions);
        });
    },


    //initilizing
    FormAdvanced.prototype.init = function() {
        var $this = this;
        this.initSelect2(),
        this.initMaxLength(),
        this.initSelectize(),
        this.initSwitchery(),
        this.initMultiSelect(),
        this.initTouchspin();
    },

    $.FormAdvanced = new FormAdvanced, $.FormAdvanced.Constructor = FormAdvanced

}(window.jQuery),
    //initializing main application module
    function ($) {
        "use strict";
        $.FormAdvanced.init();
    }(window.jQuery);


// Auto complete
/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    'use strict';

    var countriesArray = $.map(countries, function (value, key) { return { value: value, data: key }; });

    // Setup jQuery ajax mock:
    $.mockjax({
        url: '*',
        responseTime: 2000,
        response: function (settings) {
            var query = settings.data.query,
                queryLowerCase = query.toLowerCase(),
                re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi'),
                suggestions = $.grep(countriesArray, function (country) {
                     // return country.value.toLowerCase().indexOf(queryLowerCase) === 0;
                    return re.test(country.value);
                }),
                response = {
                    query: query,
                    suggestions: suggestions
                };

            this.responseText = JSON.stringify(response);
        }
    });

    // Initialize ajax autocomplete:
    $('#autocomplete-ajax').autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        lookup: countriesArray,
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function(suggestion) {
            $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
        },
        onHint: function (hint) {
            $('#autocomplete-ajax-x').val(hint);
        },
        onInvalidateSelection: function() {
            $('#selction-ajax').html('You selected: none');
        }
    });

    var nhlTeams = ['Anaheim Ducks', 'Atlanta Thrashers', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago Blackhawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton OIlers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New Rork Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Phoenix Coyotes', 'Pittsburgh Penguins', 'Saint Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Washington Capitals'];
    var nbaTeams = ['Atlanta Hawks', 'Boston Celtics', 'Charlotte Bobcats', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 'LA Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Jersey Nets', 'New Orleans Hornets', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia Sixers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
    var nhl = $.map(nhlTeams, function (team) { return { value: team, data: { category: 'NHL' }}; });
    var nba = $.map(nbaTeams, function (team) { return { value: team, data: { category: 'NBA' } }; });
    var teams = nhl.concat(nba);

    // Initialize autocomplete with local lookup:
    $('#autocomplete').devbridgeAutocomplete({
        lookup: teams,
        minChars: 1,
        onSelect: function (suggestion) {
            $('#selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: 'Sorry, no matching results',
        groupBy: 'category'
    });
    
    // Initialize autocomplete with custom appendTo:
    $('#autocomplete-custom-append').autocomplete({
        lookup: countriesArray,
        appendTo: '#suggestions-container'
    });

    // Initialize autocomplete with custom appendTo:
    $('#autocomplete-dynamic').autocomplete({
        lookup: countriesArray
    });
});

var countries = {
    "AD": "Andorra",
    "A2": "Andorra Test",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AN": "Netherlands Antilles",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "\u00c5land Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BL": "Saint Barth\u00e9lemy",
    "BM": "Bermuda",
    "BN": "Brunei",
    "BO": "Bolivia",
    "BQ": "British Antarctic Territory",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos [Keeling] Islands",
    "CD": "Congo - Kinshasa",
    "CF": "Central African Republic",
    "CG": "Congo - Brazzaville",
    "CH": "Switzerland",
    "CI": "C\u00f4te d\u2019Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CS": "Serbia and Montenegro",
    "CT": "Canton and Enderbury Islands",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DD": "East Germany",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "FQ": "French Southern and Antarctic Territories",
    "FR": "France",
    "FX": "Metropolitan France",
    "GA": "Gabon",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GF": "French Guiana",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GP": "Guadeloupe",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong SAR China",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "JT": "Johnston Island",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MF": "Saint Martin",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MI": "Midway Islands",
    "MK": "Macedonia",
    "ML": "Mali",
    "MM": "Myanmar [Burma]",
    "MN": "Mongolia",
    "MO": "Macau SAR China",
    "MP": "Northern Mariana Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NQ": "Dronning Maud Land",
    "NR": "Nauru",
    "NT": "Neutral Zone",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PC": "Pacific Islands Trust Territory",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "PN": "Pitcairn Islands",
    "PR": "Puerto Rico",
    "PS": "Palestinian Territories",
    "PT": "Portugal",
    "PU": "U.S. Miscellaneous Pacific Islands",
    "PW": "Palau",
    "PY": "Paraguay",
    "PZ": "Panama Canal Zone",
    "QA": "Qatar",
    "RE": "R\u00e9union",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "Saint Helena",
    "SI": "Slovenia",
    "SJ": "Svalbard and Jan Mayen",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "ST": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    "SU": "Union of Soviet Socialist Republics",
    "SV": "El Salvador",
    "SY": "Syria",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "UM": "U.S. Minor Outlying Islands",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Vatican City",
    "VC": "Saint Vincent and the Grenadines",
    "VD": "North Vietnam",
    "VE": "Venezuela",
    "VG": "British Virgin Islands",
    "VI": "U.S. Virgin Islands",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna",
    "WK": "Wake Island",
    "WS": "Samoa",
    "YD": "People's Democratic Republic of Yemen",
    "YE": "Yemen",
    "YT": "Mayotte",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "ZZ": "Unknown or Invalid Region"
}