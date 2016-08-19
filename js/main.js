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





