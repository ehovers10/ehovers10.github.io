$(document).ready(function() {
	$(window).scroll(function() {	
		if ($("#bibtitle").scrollTop() < 10) {
			$("#bibtitle").addClass("fixed");
		}
		else {
			$("#bibtitle").removeClass("fixed");
		}
	});
});

