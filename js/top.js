$(document).ready(function(){
    $(window).bind('load resize',function(){
        var screenH = $(window).height(),
            screenW = $(window).width(),
            vH = $('#header').outerHeight();
            value = screenW/screenH;
            if (screenW > 1120) {
                if (value < 1.4) {
                    $('#mainvisual.video').css('height', 720);
                } else {
                    $('#mainvisual.video').css('height', screenH - vH);
                }
                $('#video-bg').css('width', (screenH - vH) * 1.78);
            } else if (screenW > 640) {
                if (value < 1.6) {
                    $('#mainvisual.video').css('height', 655);
                    $('svg.intro').css('transform', '');
                } else {
                    $('#mainvisual.video').css('height', screenH - vH);
                    $('svg.intro').css('transform', 'scale(0.7)');
                }
            } else {
                if (value < 1.6) {
                    $('#mainvisual.video').css('height', '');
                    $('#video-bg').css('width', '');
                    $('svg.intro').css('transform', '');
                } else {
                    $('#mainvisual.video').css('height', screenH - vH);
                    $('#video-bg').css('width', (screenH - vH) * 1.78);
                    $('svg.intro').css('transform', 'translateY(-50%) scale(0.7)');
                    $('.contact-sp ul').hide();
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > 100) {
                            $('.contact-sp ul').fadeIn();
                        } else {
                            $('.contact-sp ul').fadeOut();
                        }
                    });
                }
            }
    });
});

// JavaScript Document
$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.box06Blog();
            this.box04ListItem();
            this.idxSlider();
            this.topJS();
        },
        topJS: function() {
            new WOW().init();
        },
        idxSlider: function() {
            $('.idx-slider').slick({
                autoplay: true,
                dots: false,
                arrows: true,
            });

         
            
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW < 750) {
                    if (!$('.b09-list').hasClass('slick-initialized')) {
                        $('.b09-list').slick({
                            autoplay: true,
                            dots: true,
                            arrows: false,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            autoplaySpeed: 3000,
                            centerMode: true,
                            variableWidth: true,
                        });
                    }
                } else {
                    if ($('.b09-list').hasClass('slick-initialized')) {
                        $('.b09-list').slick('unslick');
                    }
                }
            });
        },
        box06Blog: function() {
            $.ajax({
                'url': 'blog/_custom/?limit=15',
                'dataType': 'jsonp',
                'success': function(json) {
                    $.each(json.data, function(i, val) {
                        var tlt = val.title.length < 20 ? val.title : val.title.substr(0, 60) + '...';
                        var $li = $('<li><span>' + val.date + '</span><span>' + val.category_name + '</span><a href="blog/' + val.url + '">' + tlt + '</a></li>');
                        $li.appendTo('.b01-list');
                    });
                },


            });

        },
        box04ListItem: function() {
            $('.b04-list-item li a').hover(function() {
                $(this).find('.txt').stop().slideToggle('fast');
            });
        },
    };
    obj.init();
});

$(window).load(function() {
	$('.intro').attr("class", "intro go");
});