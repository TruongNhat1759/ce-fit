$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
            // this.resizeImg();
        },
        resizeImg : function () {
            $(window).on('load', function() {
                $('.ov-list .ov-img img').each(function(){
                    var hI = this.naturalHeight, wI = this.naturalWidth, sI = hI / wI;
                    if (sI < 1) {
                        $(this).css({
                            'height' : '250px',
                            'max-width' : '250px'
                        });
                    }
                    else {
                        $(this).css({
                            'width' : '250px',
                            'max-height' : '250px'
                        });
                    }
                });
                console.log('asdf');
                // var hI = 100, wI = 100;
            });
        },
        smoothScroll: function() {
            $('a[href^="#"]').not('#totop').click(function() {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 118
                        }, 600);
                    } else {
                        $('.menu-icon').removeClass('active');
                        $('#gnavi').stop().slideUp('fast');
                        $('.over').removeClass('active');
                        $('.submenu').fadeOut('fast');
                        $('html,body').animate({
                            scrollTop: p.top - 70
                        }, 600);
                    }
                }
                return false;
            });
            //Anchor scroll

            $(window).bind("load", function() {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 118
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 70
                        }, 600);
                    }
                }
            });

            //H1 hide on scroll sp    
            $(window).bind("load scroll", function() {
                var hW = $(window).width(),
                    sW = $(this).scrollTop();
                if (hW > 640) {
                    $('#header').removeClass('scrolled');
                } else {
                    if (sW > 10) {
                        $('#header').addClass('scrolled');
                    } else {
                        $('#header').removeClass('scrolled');
                    }
                }
            });

        },

        toTop: function() {
            $("#totop").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                } else {
                    $('#totop').fadeOut();
                }
            });
        },

        Gnavi: function() {
            $('.over').mouseenter(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideDown();
                }
            });
            $('.over').mouseleave(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideUp();
                }
            });
            $('.over01').mouseenter(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu01').stop().slideDown();
                }
            });
            $('.over01').mouseleave(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu01').stop().slideUp();
                }
            });

            $('.over').click(function() {
                if ($(this).hasClass('flag')) {
                    if ($(this).hasClass('active')) {
                        $('.submenu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('.over').removeClass('active');
                        $('.submenu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.submenu').stop().slideToggle();
                    }
                }
            });

            $('.menu-icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').stop().slideToggle();
                    $('.submenu').fadeOut('fast');
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle('fast');
                }
            });
            $('.close-menu').click(function() {
                $('.menu-icon').removeClass('active');
                $('#gnavi').stop().slideUp('fast');
                $('.over').removeClass('active');
                $('.submenu').fadeOut('fast');
            });

            //gnavi fixed on pc
            $(window).bind("load scroll", function() {
                var vW = $(window).width(),
                    wS = $(window).scrollTop(),
                    hG = $('#mainvisual').height(),
                    hH = $('#header').height();
                if (vW > 640) {
                    if (wS > hG) {
                        $('#header').addClass('fixed');
                        $('#mainvisual').css('margin-top', hH);
                    } else {
                        $('#header').removeClass('fixed');
                        $('#mainvisual').css('margin-top', '');
                    }
                }
            });

            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $('[class*="acc-btn"]').removeClass('flag').removeClass('active');
                    $('div[class*="acc-main"]').removeAttr('style');
                } else {
                    $('[class*="acc-btn"]').addClass('flag');
                }
            });
            $(window).bind("load", function() {
                if ($('.acc-btn').length > 0) {
                    $('.acc-btn').click(function() {
                        if ($(this).hasClass('flag')) {
                            $(this).parent().find('.acc-main').stop().slideToggle('');
                            $(this).toggleClass('active');
                        }
                    });
                }
                if ($('.acc-btn1').length > 0) {
                    $('.acc-btn1').click(function() {
                        if ($(this).hasClass('flag')) {
                            $('.acc-main1').stop().slideToggle();
                            $(this).toggleClass('active');
                        }
                    });
                }
                if ($('.acc-btn2').length > 0) {
                    $('.acc-btn2').click(function() {
                        if ($(this).hasClass('flag')) {
                            $('.acc-main2').stop().slideToggle();
                            $(this).toggleClass('active');
                        }
                    });
                }
                if ($('.acc-btn3').length > 0) {
                    $('.acc-btn3').click(function() {
                        if ($(this).hasClass('flag')) {
                            $('.acc-main3').stop().slideToggle();
                            $(this).toggleClass('active');
                        }
                    });
                }
                if ($('.acc-btn4').length > 0) {
                    $('.acc-btn4').click(function() {
                        if ($(this).hasClass('flag')) {
                            $('.acc-main4').stop().slideToggle();
                            $(this).toggleClass('active');
                        }
                    });
                }
                if ($('.acc-btn5').length > 0) {
                    $('.acc-btn5').click(function() {
                        if ($(this).hasClass('flag')) {
                            $('.acc-main5').stop().slideToggle();
                            $(this).toggleClass('active');
                        }
                    });
                }
                if ($('.acc-btn6').length > 0) {
                    $('.acc-btn6').click(function() {
                        if ($(this).hasClass('flag')) {
                            $('.acc-main6').stop().slideToggle();
                            $(this).toggleClass('active');
                        }
                    });
                }
            });

            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 1120) {
                    $('.menu-icon').removeClass('active');
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
                    $('#gnavi').removeAttr('style');
                    $('.h-tel').insertBefore('.h-right > ul');
                } else {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('.over').addClass('flag');
                    $('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
                    $('.h-tel').insertBefore('.menu-icon');
                }
            });


        },

    };

    obj.init();

});