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
	});
