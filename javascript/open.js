$(document).ready( function() {

  /* Open hidden elements */
  $(".hid").css("display","none");
  $(".open").click( function() {
    var hidden = $(this).attr('id') + '-hid';
    $('#' + hidden).slideToggle('slow',function() {
      // Animation complete.
    });
    return false;
  });

  /* Close siblings */
  $( ".pagenav li.internal a" ).click( function() {
    var temp = $( this ).attr( "class" );
    $( this ).closest( "li" ).addClass("active");
    $( this ).closest( "li" ).siblings().removeClass("active");
    $( this ).closest( ".bunch" ).find( ".area" ).each( function() {
      if ( $( this ).hasClass( temp ) ) {
        $( this ).css( "display", "block" );
      } else {
        $( this ).css( "display", "none" );
      }
    });
    return false;
  });

  /* Toggle max size */

  $( ".reveal" ).click( function() {

    var mini = $(this).attr('id') + '-min';
    $('#' + mini).toggleClass( "maxsize",function() {
      // Animation complete.
    });

    $(this).toggleClass( "more" );
    $(this).toggleClass( "less" );

    return false;
  });

  /* Toggle popbox */

  $( ".pop" ).click( function() {
    var hidden = '#' + $(this).attr('id') + '-hid';
    $(hidden).slideDown();

    return false;
  });
  $( "#toc-pop-hid" ).click( function() {
    $(this).slideUp();

  });

  $( ".popclose" ).click( function() {
    $(this).parents(".lightbox").slideUp();

    return false;
  });

});
