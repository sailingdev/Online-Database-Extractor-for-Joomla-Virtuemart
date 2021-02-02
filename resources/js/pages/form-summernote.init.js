/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Summernote init js
*/

!function ($) {
    "use strict";

    var Summernote = function () {
        this.$body = $("body")
    };


    /* Initializing */
    Summernote.prototype.init = function () {
        $('#summernote-basic').summernote({
            placeholder: 'Write something...',
            height: 230,
            callbacks: {
                // fix broken checkbox on link modal
                onInit: function onInit(e) {
                    var editor = $(e.editor);
                    editor.find('.custom-control-description').addClass('custom-control-label').parent().removeAttr('for');
                }
            }
        });
        // air mode on
        $('#summernote-airmode').summernote({
            airMode: true,
            callbacks: {
                // fix broken checkbox on link modal
                onInit: function onInit(e) {
                    var editor = $(e.editor);
                    editor.find('.custom-control-description').addClass('custom-control-label').parent().removeAttr('for');
                }
            }
        });

        // click to edit
        var edit = function edit() {
            $('#summernote-editmode').summernote({
                focus: true,
                callbacks: {
                    // fix broken checkbox on link modal
                    onInit: function onInit(e) {
                        var editor = $(e.editor);
                        editor.find('.custom-control-description').addClass('custom-control-label').parent().removeAttr('for');
                    }
                }
            });
        };
        var save = function save() {
            var makrup = $('#summernote-editmode').summernote('code');
            $('#summernote-editmode').summernote('destroy');
        };

        $('#summernote-edit').on('click', function () {
            edit();
            // toggle buttons
            $(this).hide();
            $('#summernote-save').show();
        });
        $('#summernote-save').on('click', function () {
            save();
            // toggle buttons
            $(this).hide();
            $('#summernote-edit').show();
        });

        // Hint
        $("#summernote-hint").summernote({
            height: 230,
            toolbar: false,
            placeholder: 'type with apple, orange, watermelon and lemon',
            hint: {
                words: ['apple', 'orange', 'watermelon', 'lemon'],
                match: /\b(\w{1,})$/,
                search: function (keyword, callback) {
                    callback($.grep(this.words, function (item) {
                        return item.indexOf(keyword) === 0;
                    }));
                }
            }
        });

        // Hint for emoji
        $.ajax({
            url: 'https://api.github.com/emojis',
            async: false
        }).then(function (data) {
            window.emojis = Object.keys(data);
            window.emojiUrls = data;
        });;

        $("#summernote-emoji").summernote({
            height: 180,
            toolbar: false,
            placeholder: 'type starting with : and any alphabet',
            hint: {
                match: /:([\-+\w]+)$/,
                search: function (keyword, callback) {
                    callback($.grep(emojis, function (item) {
                        return item.indexOf(keyword) === 0;
                    }));
                },
                template: function (item) {
                    var content = emojiUrls[item];
                    return '<img src="' + content + '" width="20" /> :' + item + ':';
                },
                content: function (item) {
                    var url = emojiUrls[item];
                    if (url) {
                        return $('<img />').attr('src', url).css('width', 20)[0];
                    }
                    return '';
                }
            }
        });

        // Hint for mentions
        $("#summernote-hint-mentions").summernote({
            height: 100,
            toolbar: false,
            hint: {
              mentions: ['jayden', 'sam', 'alvin', 'david'],
              match: /\B@(\w*)$/,
              search: function (keyword, callback) {
                callback($.grep(this.mentions, function (item) {
                  return item.indexOf(keyword) == 0;
                }));
              },
              content: function (item) {
                return '@' + item;
              }    
            }
        });
    },

        //init Summernote
        $.Summernote = new Summernote, $.Summernote.Constructor = Summernote

}(window.jQuery),

    //initializing Summernote
    function ($) {
        "use strict";
        $.Summernote.init()
    }(window.jQuery);