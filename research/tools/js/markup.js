$(document).ready( function() {

  /* Toggle max size */
  
  $( ".reveal" ).click( function() {

    $(this).prev( ".max" ).toggleClass( "maxsize" );

    $(this).toggleClass( "more" );
    $(this).toggleClass( "less" );

  }); 

  /* Scroll to top of the page */

  $(window).scroll(function() { 
 
    var winTop = $(window).scrollTop(),
        winHeight = $(window).height(); 

    if (winTop > winHeight) {
      $(".totop").css("display","block");
    }
    else {
      $(".totop").css("display","none");
    }
  });

  $(".totop").click(function() {

    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;

  });

});
