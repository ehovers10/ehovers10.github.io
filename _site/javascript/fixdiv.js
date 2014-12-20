function fixDiv() {
    var $div = $("#bibtitle");
    if ($(window).scrollTop() > $div.data("top")) { 
        $('#bibtitle').css({'position': 'fixed', 'top': '0', 'width': '100%'}); 
    }
    else {
        $('#bibtitle').css({'position': 'static', 'top': 'auto', 'width': '100%'});
    }
}

$("#bibtitle").data("top", $("#bibtitle").offset().top); // set original position on load
$(window).scroll(fixDiv);
