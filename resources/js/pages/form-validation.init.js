/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form validation init js
*/

$(document).ready(function() {
    $('.parsley-examples').parsley();
});

$(function () {
    $('#demo-form').parsley().on('field:validated', function () {
        var ok = $('.parsley-error').length === 0;
        $('.alert-info').toggleClass('d-none', !ok);
        $('.alert-warning').toggleClass('d-none', ok);
    })
    .on('form:submit', function () {
        return false; // Don't submit form for this demo
    });
});