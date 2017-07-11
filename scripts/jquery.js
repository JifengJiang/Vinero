(function ( $ ) {
    $(document).ready(function(){
        // menu change color
        var scroll_start = 0;
        var startchange = $('.jumbotron');
        var offset = startchange.offset();
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > (offset.top + startchange.height()-300)) {
                $('.header-wrap').css('opacity', '.6');
                $('.header-wrap').css('background-color', '#000000');
            } else {
                $('.header-wrap').css('opacity', '1');
                $('.header-wrap').css('background-color', 'transparent');
            }
        });
    });





    $("#award-background").each(function() {
        $(this).data("standardWidth", $(this).width());
    });

    if($(window).width() > 767) {
        $("#award-experience").hover(function() {
            $("#award-background").stop().animate({
                width: "78%"
            }, 300 );
            $("#award-img1").stop().animate({
                opacity: "1"
            }, 300 );
            $("#award-text-experience").stop().show({}, 100 );
            $("#what-awards").stop().animate({
                top: "30%"
            }, 300 );
        }, function() {
            $(this).parent().parent().children().each(function() {
                $(this).stop().animate({
                    width: $(this).data("standardWidth")
                }, 120 );
                $("#award-img1").stop().animate({
                    opacity: "0"
                }, 120 );
                $("#award-text-experience").stop().hide({}, 100 );
                $("#what-awards").stop().animate({
                    top: "50%"
                }, 300 );
            });
        });

        $("#award-team").hover(function() {
            $("#award-background").stop().animate({
                width: "78%"
            }, 300 );
            $("#award-img2").stop().animate({
                opacity: "1"
            }, 300 );
            $("#award-text-team").stop().show({}, 100 );
            $("#what-awards").stop().animate({
                top: "30%"
            }, 300 );
        }, function() {
            $(this).parent().parent().children().each(function() {
                $(this).stop().animate({
                    width: $(this).data("standardWidth")
                }, 120 );
                $("#award-img2").stop().animate({
                    opacity: "0"
                }, 120 );
                $("#award-text-team").stop().hide({}, 100 );
                $("#what-awards").stop().animate({
                    top: "50%"
                }, 300 );
            });
        });

        $("#award-creation").hover(function() {
            $("#award-background").stop().animate({
                width: "78%"
            }, 300 );
            $("#award-img3").stop().animate({
                opacity: "1"
            }, 300 );
            $("#award-text-creation").stop().show({}, 100 );
            $("#what-awards").stop().animate({
                top: "30%"
            }, 300 );
        }, function() {
            $(this).parent().parent().children().each(function() {
                $(this).stop().animate({
                    width: $(this).data("standardWidth")
                }, 120 );
                $("#award-img3").stop().animate({
                    opacity: "0"
                }, 120 );
                $("#award-text-creation").stop().hide({}, 100 );
                $("#what-awards").stop().animate({
                    top: "50%"
                }, 300 );
            });
        });

        $("#award-award").hover(function() {
            $("#award-background").stop().animate({
                width: "78%"
            }, 300 );
            $("#award-img4").stop().animate({
                opacity: "1"
            }, 300 );
            $("#award-text-award").stop().show({}, 100 );
            $("#what-awards").stop().animate({
                top: "30%"
            }, 300 );
        }, function() {
            $(this).parent().parent().children().each(function() {
                $(this).stop().animate({
                    width: $(this).data("standardWidth")
                }, 120 );
                $("#award-img4").stop().animate({
                    opacity: "0"
                }, 120 );
                $("#award-text-award").stop().hide({}, 100 );
                $("#what-awards").stop().animate({
                    top: "50%"
                }, 300 );
            });
        });
    } else {
        $("#award-experience").click(function() {
            $(".award-titles").stop().hide({}, 100 );
            $("#award-text-experience").stop().show({}, 100 );
            $("#award-back-button").stop().show({}, 100 );
        });

        $("#award-team").click(function() {
            $(".award-titles").stop().hide({}, 100 );
            $("#award-text-team").stop().show({}, 100 );
            $("#award-back-button").stop().show({}, 100 );
        });

        $("#award-creation").click(function() {
            $(".award-titles").stop().hide({}, 100 );
            $("#award-text-creation").stop().show({}, 100 );
            $("#award-back-button").stop().show({}, 100 );
        });

        $("#award-award").click(function() {
            $(".award-titles").stop().hide({}, 100 );
            $("#award-text-award").stop().show({}, 100 );
            $("#award-back-button").stop().show({}, 100 );
        });

        $("#award-back-button").click(function() {
            $(".award-titles").stop().show({}, 100 );
            $("#award-text-experience").stop().hide({}, 100 );
            $("#award-text-team").stop().hide({}, 100 );
            $("#award-text-creation").stop().hide({}, 100 );
            $("#award-text-award").stop().hide({}, 100 );
            $("#award-back-button").stop().hide({}, 100 );
        });
    }







    $(".media-distribution").hover(function() {
        $(".media-distribution-background").stop().animate({
            width: "62%"
        }, 300 );
    }, function() {
        $(".media-distribution-background").stop().animate({
            width: "100%"
        }, 300 );
    });




}( jQuery ));