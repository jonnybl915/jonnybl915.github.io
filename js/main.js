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
    if ($(this).scrollTop() > 1500) { 
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