/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Gallery init js
*/

$(document).ready(function() {
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    $('.filter-menu .filter-menu-item').click(function() {
        $('.filter-menu .filter-menu-item').removeClass('active');
        $(this).addClass('active');
    });

    $(function () {
        var selectedClass = "";
        $(".filter-menu-item").click(function () {
            selectedClass = $(this).attr("data-rel");
            $(".filterable-content").fadeTo(100, 0);
            $(".filterable-content .filter-item").not("." + selectedClass).fadeOut().removeClass('');
            setTimeout(function () {
                $("." + selectedClass).fadeIn().addClass('');
                $(".filterable-content").fadeTo(300, 1);
            }, 300);
        });
    });
});