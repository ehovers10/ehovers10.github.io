$(document).ready( function() {

  /* Stop scroll */

  $('.popbox').bind('mousewheel DOMMouseScroll', function(e) {
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

  /* Scroll to top of the page */

  $(window).scroll(function(){

    var winTop = $(window).scrollTop(),
        winHeight = $(window).height();

    if (winTop > 75) {
      $("#etitle").css("display","block");
    }
    else {
      $("#etitle").css("display","none");
    }

    if (winTop > winHeight) {
      $("#to-top").css("display","block");
    }
    else {
      $("#to-top").css("display","none");
    }
  });

  $("#to-top").click(function() {

    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;

  });

});
