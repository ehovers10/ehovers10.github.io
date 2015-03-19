$(document).ready(function(){
	   $(window).on('scroll', function() {
	   var blockHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > blockHeight) {
				 $("#bibtitle").addClass('fixed');
			 }
			 else {
				 $("#bibtitle").removeClass('fixed');
			 }
		});

$('.lightbox').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;

    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }

    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
  });

});
