/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Calendar init js
*/

!function($) {
    "use strict";

    var CalendarApp = function() {
        this.$body = $("body")
        this.$modal = $('#event-modal'),
        this.$calendar = $('#calendar'),
        this.$formEvent = $("#form-event"),
        this.$btnNewEvent = $("#btn-new-event"),
        this.$btnDeleteEvent = $("#btn-delete-event"),
        this.$btnSaveEvent = $("#btn-save-event"),
        this.$modalTitle = $("#modal-title"),
        this.$calendarObj = null,
        this.$selectedEvent = null,
        this.$newEventData = null
    };


    /* on click on event */
    CalendarApp.prototype.onEventClick =  function (info) {
        this.$formEvent[0].reset();
        this.$formEvent.removeClass("was-validated");
        
        this.$newEventData = null;
        this.$btnDeleteEvent.show();
        this.$modalTitle.text('Edit Event');
        this.$modal.modal({
            backdrop: 'static'
        });
        this.$selectedEvent = info.event;
        $("#event-title").val(this.$selectedEvent.title);
        $("#event-category").val(this.$selectedEvent.classNames[0]);
    },

    /* on select */
    CalendarApp.prototype.onSelect = function (info) {
        this.$formEvent[0].reset();
        this.$formEvent.removeClass("was-validated");
        
        this.$selectedEvent = null;
        this.$newEventData = info;
        this.$btnDeleteEvent.hide();
        this.$modalTitle.text('Add New Event');

        this.$modal.modal({
            backdrop: 'static'
        });
        this.$calendarObj.unselect();
    },
    
    /* Initializing */
    CalendarApp.prototype.init = function() {
        
        /*  Initialize the calendar  */
        var today = new Date($.now());

        var Draggable = FullCalendarInteraction.Draggable;
        var externalEventContainerEl = document.getElementById('external-events');

        // init dragable
        new Draggable(externalEventContainerEl, {
            itemSelector: '.external-event',
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText,
                    className: $(eventEl).data('class')
                };
            }
        });

        var defaultEvents =  [{
                title: 'Meeting with Mr. Shreyu',
                start: new Date($.now() + 158000000),
                end: new Date($.now() + 338000000),
                className: 'bg-warning'
            },
            {
                title: 'Interview - Backend Engineer',
                start: today,
                end: today,
                className: 'bg-success'
            },
            {
                title: 'Phone Screen - Frontend Engineer',
                start: new Date($.now() + 168000000),
                className: 'bg-info'
            },
            {
                title: 'Buy Design Assets',
                start: new Date($.now() + 338000000),
                end: new Date($.now() + 338000000 * 1.2),
                className: 'bg-primary',
            }];

        var $this = this;

        // cal - init
        $this.$calendarObj = new FullCalendar.Calendar($this.$calendar[0], {
            plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list' ],
            slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
            minTime: '08:00:00',
            maxTime: '19:00:00',  
            themeSystem: 'bootstrap',
            bootstrapFontAwesome: false,
            buttonText: {
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day',
                list: 'List',
                prev: 'Prev',
                next: 'Next'
            },
            defaultView: 'dayGridMonth',  
            handleWindowResize: true,   
            height: $(window).height() - 200,   
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            events: defaultEvents,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            dateClick: function (info) { $this.onSelect(info); },
            eventClick: function(info) { $this.onEventClick(info); }
        });

        $this.$calendarObj.render();

        // on new event button click
        $this.$btnNewEvent.on('click', function(e) {
            $this.onSelect({date: new Date(), allDay: true});
        });

        // save event
        $this.$formEvent.on('submit', function(e) {
            e.preventDefault();
            var form = $this.$formEvent[0];

            // validation
            if (form.checkValidity()) {
                if ($this.$selectedEvent) {
                    $this.$selectedEvent.setProp('title', $("#event-title").val());
                    $this.$selectedEvent.setProp('classNames', [$("#event-category").val()]);
                } else {
                    var eventData = {
                        title: $("#event-title").val(),
                        start: $this.$newEventData.date,
                        allDay: $this.$newEventData.allDay,
                        className: $("#event-category").val()
                    }
                    $this.$calendarObj.addEvent(eventData);
                }
                $this.$modal.modal('hide');
            } else {
                e.stopPropagation();
                form.classList.add('was-validated');
            }
        });

        // delete event
        $($this.$btnDeleteEvent.on('click', function(e) {
            if ($this.$selectedEvent) {
                $this.$selectedEvent.remove();
                $this.$selectedEvent = null;
                $this.$modal.modal('hide');
            }
        }));
    },

   //init CalendarApp
    $.CalendarApp = new CalendarApp, $.CalendarApp.Constructor = CalendarApp
    
}(window.jQuery),

//initializing CalendarApp
function($) {
    "use strict";
    $.CalendarApp.init()
}(window.jQuery);