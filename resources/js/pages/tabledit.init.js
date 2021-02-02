/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Edit table init js
*/

!function($) {
    "use strict";

    var EditableTable = function() {};

    EditableTable.prototype.init = function () {
        
        $("#inline-editable").Tabledit({
            inputClass: 'form-control form-control-sm',
            editButton: false,
            deleteButton: false,
            columns: {
                identifier: [0, "id"],
                editable: [
                    [1, "col1"],
                    [2, "col2"],
                    [3, "col3"],
                    [4, "col4"],
                    [6, "col6"]
                ]
            }
        }),

        $("#btn-editable").Tabledit({
            buttons: {
                edit: {
                    class: 'btn btn-success',
                    html: '<span class="mdi mdi-pencil"></span>',
                    action: 'edit'
                }
            },
            inputClass: 'form-control form-control-sm',
            deleteButton: false,
            saveButton: false,
            autoFocus: false,
            columns: {
                identifier: [0, "id"],
                editable: [
                    [1, "col1"],
                    [2, "col2"],
                    [3, "col3"],
                    [4, "col4"],
                    [6, "col6"]
                ]
            }
        })
    },
    $.EditableTable = new EditableTable, $.EditableTable.Constructor = EditableTable

}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.EditableTable.init()
}(window.jQuery);