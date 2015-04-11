$(document).ready( function() {

  /* Toggle truth table columns */
  $( ".open" ).click( function() {
      var cols = $(this).parent().find("td").length;

      /* Reveal each column */
      for (var i = 1; i <= cols; i++) {
        if ( $(this).hasClass("col" + i.toString()) ) {
          $(this).parent().nextAll().find(".col" + i.toString()).slideToggle( "slow" );
        }
      }
      
      /* Change color of head */
      $(this).toggleClass("gray");

      /* Animate adjacent columns
      if ( $(this).hasClass("neg") ) {
      } 
      else {
        $(this).prev().animate({ opacity: 0.25 }, 500, function() {
          $(this).css("opacity","1");
          $(this).next().next().animate({ opacity: 0.25 }, 500, function() {
            $(this).css("opacity","1");
          });
        });
      }*/

    });

  /* Space truth tables */
  $(".tt").each( function() {
      var cols = $(this).find(".thead").find("td").length,
          negs = $(this).find(".thead").find(".neg").length,
          rows = $(this).find("tr").length,  
          k = 0;

      /* Set table width based on number of columns */
      $(this).css("width",2+cols+"em");

      for (var i = 1; i <= cols; i++) {
        /* Set each column position */
        $(this).find(".col" + i.toString()).css("left",i-1+k+"em");

        /* Add sentence borders */
        if ( $(this).find(".col" + i.toString()).hasClass("sent") ) {
          $(this).find(".col" + i.toString()).addClass("sent");
        }

        /* Add extra width for negated sentences */
        if ( $(this).find(".col" + i.toString()).hasClass("neg") ) {
          k = k + 0.5;
          $(this).find(".col" + i.toString()).css("width","1.5em");
        }
	else {
          $(this).find(".col" + i.toString()).css("width","1em");
        }

      }

      /* Set each row position */
      for (var j = 1; j <= cols; j++) {
        $(".row" + j.toString()).find("td").addClass("hid");
        $(".row" + j.toString()).css("top",j+2+"em");
        $(this).parent().css("height",j+4+"em");
      } 

      

  });

});
