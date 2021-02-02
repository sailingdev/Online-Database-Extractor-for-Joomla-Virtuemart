/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Kanban Board init js
*/

! function($) {
	"use strict";

	var KanbanBoard = function() {
		this.$body = $("body")
	};

	//initializing various charts and components
	KanbanBoard.prototype.init = function() {
		$('.tasklist').each(function () {
			Sortable.create($(this)[0], {
				group: 'shared',
				animation: 150,
				ghostClass: 'bg-ghost'
			});
			
		});	
	},

	//init KanbanBoard
	$.KanbanBoard = new KanbanBoard, $.KanbanBoard.Constructor =
	KanbanBoard

}(window.jQuery),

//initializing KanbanBoard
function($) {
	"use strict";
	$.KanbanBoard.init()
}(window.jQuery);