/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form pickers init js
*/

!function ($) {
    "use strict";

    var FormPickers = function () { };

    FormPickers.prototype.init = function () {
        //Flat picker
        $('#basic-datepicker').flatpickr();

        $('#datetime-datepicker').flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i"
        });

        $('#humanfd-datepicker').flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
        });

        $('#minmax-datepicker').flatpickr({
            minDate: "2020-01",
            maxDate: "2020-03"
        });

        $('#disable-datepicker').flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            disable: ["2025-01-10", "2025-01-21", "2025-01-30", new Date(2025, 4, 9) ],
            dateFormat: "Y-m-d",
        });

        $('#multiple-datepicker').flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d"
        });

        $('#conjunction-datepicker').flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d",
            conjunction: " :: "
        });

        $('#range-datepicker').flatpickr({
            mode: "range"
        });

        $('#inline-datepicker').flatpickr({
            inline: true
        });

        $('#basic-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i"
        });

        $('#24hours-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
        });

        $('#minmax-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            minDate: "16:00",
            maxDate: "22:30",
        });

        $('#preloading-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            defaultDate: "01:45"
        });

        // Color Picker
        
        $('#basic-colorpicker').colorpicker();

        $('#hexa-colorpicker').colorpicker({
            format: 'auto'
        });

        $('#component-colorpicker').colorpicker({
            format: null
        });

        $('#horizontal-colorpicker').colorpicker({
            horizontal: true
        });

        $('#inline-colorpicker').colorpicker({
            color: '#DD0F20',
            inline: true,
            container: true
        });

        //Clock Picker
        $('.clockpicker').clockpicker({
            donetext: 'Done'
        });
        
        $('#single-input').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            'default': 'now'
        });
        $('#check-minutes').click(function(e){
            // Have to stop propagation here
            e.stopPropagation();
            $("#single-input").clockpicker('show')
                    .clockpicker('toggleView', 'minutes');
        });
        
    },
        $.FormPickers = new FormPickers, $.FormPickers.Constructor = FormPickers

}(window.jQuery),

    //initializing 
    function ($) {
        "use strict";
        $.FormPickers.init()
    }(window.jQuery);


