/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../css/fullpage.css');

// js files
require('./fullpage.js');
const $ = require('jquery');

$(function() {

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage', 'fifthPage'],
        navigation: true,
        navigationPosition: 'right',
    });

    $('.fa-heart').on("click", function () {
        var count = 1;
        if (!trigger) {
            $('.counter').html(count++);
            trigger = true;
        } else {
            var c = $('.counter').html();
            $('.counter').html(c - 1);
            trigger = false;
        }
        if($('.counter').css('data') == 'none')
            $('.counter').css('data', 'block');
        else
            $('.portfolio').css('data', 'none');
        var trigger = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.modal').length == 0) {
                $('.counter').css('display', 'none');
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });

    });

    $('.fa-heart').on("mouseenter", function () {
        $('.counter').css('color', '#efeef3');
        $('.counter').css('text-shadow', '#efeef3 0 0 5px');
    });

    $('.fa-heart').on("mouseout", function () {
        $('.counter').css('color', '#0a0001');
        $('.counter').css('text-shadow', '#0a0001 0 0 5px');
    });


    $('.modal').on("click", function () {
        if($('.portfolio').css('display') == 'none')
            $('.portfolio').css('display', 'block');
        else
            $('.portfolio').css('display', 'none');
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.modal').length == 0) {
                $('.portfolio').css('display', 'none');
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    });

    $('.close-modal').on("click", function () {
        $('.portfolio').css('display', 'none');
    });

    $(".fourth a").click(function(e){
        e.preventDefault();
    });
});
