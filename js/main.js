$(document).ready(function(){
    $('.modal-trigger').leanModal();

    var test = function(){
    	alert('asdf');
    }
  });

$(window).scroll(function() {
    if ($(this).scrollTop() > 425) { 
        $('.blink-img').css({
            'visibility': 'hidden'
        });
    }
    else {
    	$('.blink-img').css({
            'visibility': 'visible'
        });
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1800) { 
        $('.blink-img-2').css({
            'visibility': 'hidden'
        });
    }
    else {
    	$('.blink-img-2').css({
    		'visibility': 'visible'
    	})
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 3000) { 
        $('.blink-img-3').css({
            'visibility': 'hidden'
        });
    }
    else {
        $('.blink-img-3').css({
            'visibility': 'visible'
        })
    }
});

$(document).ready(function() {
    $('.blink-img').click(function(){
        $('html, body').animate({scrollTop:780}, 'slow');
        return false;
    });
    $('.blink-img-2').click(function(){
        $('html, body').animate({scrollTop:2150}, 'slow');
        return false;
    });
    $('.blink-img-3').click(function(){
        $('html, body').animate({scrollTop:3300}, 'slow');
        return false;
    });
});





