$(document).ready( function() {

  /* Set info image */

  $(".info").attr('src',"./images/info.svg");
  $("img.protect").attr('src',"./images/info.svg");

  /* Toggle proof lines */

  $( ".info" ).click( function() {

    $(this).next( ".hid" ).slideToggle( "slow" );

    $(this).toggleClass("gray");

  }); 

  /* Toggle protected items */

  $( '.protect' ).click( function() {

    var north = this.id;
  
    if ( north.indexOf('ex') > -1 ) {
      var bertrand = "baruch";
    } 
    else if ( north.indexOf('line') > -1 ) {
      var bertrand = "gottlieb";
    }

    var getin = prompt("Password required:","");

    if (getin == bertrand) {
      $( "#" + this.id + "hid" ).slideToggle( "slow" );

      $(this).toggleClass("gray");
    }
    else if (getin == null || getin == '') {
      return;
    } 
    else {
      location.href = 'nope.html';
    }
  });

});
