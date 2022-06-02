$(document).ready(function(){
    // Tap Menu mouse hover event
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(100);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(100);
    })

    // Image slide auto play function
    // $('imgslide  a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.imgslide');
    }, 3000)

    // parallex Image resize
    $(window).resize(function(){
        $('.parall').width($(window).width()).height($(window).height());
        $('.parallContent').each(function(){
            $(this).css('margin-left', ($(this).width()/2 * -1)+ 'px').css('margin-tip', ($(this).height()/2 * -1)+'px');
        })
    })

    // parallex Image script
    $('.bg-holder').parallaxScroll({
        friction: 0.2
    })


    // tubular
    var options ={
        videoID : 'RkC0l4iekYo',
        start: 0,
        mute: true
    };
    $('#wrapper').tubular(options);

    
    // modal function
    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    })

    $(".btn").click(function(){
        $("#modal").removeClass("active");
    })

})