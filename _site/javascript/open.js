$(document).ready( function() {

  function clearBlocks() {
    $( ".wrapper" ).find("div").removeClass('clicked show');
    $( ".wrapper" ).find("span").removeClass('clicked show');
    $( ".wrapper" ).find("li").removeClass('clicked show');
    $( ".tooltip").each( function() {
      $(this).css("top",30 + "px");
    });
  }
  function setPos(item) {
    $(item).css("top",20 + "px");
    var pos = $(item).height() + 50,
        max = $(window).height() - 50;
    $( ".clicked" ).each( function() {
      if ($(this).attr("id") != $(item).attr("id")) {
        $(this).css("top",pos + "px");
      }
      pos = pos + $(this).height() + 30;
      if (pos > max) {
        clearBlocks();
        pos = 20;
      }
    });
  }

  $(".wrapper").click( function() {
    clearBlocks();
  });

  $(".open").click( function() {
    var hidden = $(this).attr('id') + '-hid';
    $('#' + hidden).slideToggle('slow',function() {
      // Animation complete.
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

  /* Tooltips */

  /*$( ".tooled" ).hover( function() {
      var tipped = $(this).attr('id') + '-tip';
      setPos('#' + tipped);
      $('#' + tipped).addClass('show');
    }, function() {
      var tipped = $(this).attr('id') + '-tip';
      if ( $('#' + tipped).hasClass('clicked') ) {
        return;
      } else {
        setPos('');
        $('#' + tipped).removeClass('show');
      }
    }
  );*/

  $( ".tooled" ).click( function() {
      var tipped = $(this).attr('id') + '-tip';
      setPos('#' + tipped);
      $('#' + tipped).addClass('clicked show');

      return false;
    }
  );

  $( ".footnote" ).parent("sup").addClass( "tooled" );
  $( ".footnote" ).addClass( "note" );
  $(".footnotes" ).find( "li" ).addClass( "tooltip" );
  $(".footnotes" ).find( "li" ).addClass( "comment" );
  $(".footnotes" ).find( "li" ).attr('id', function() {
    return $(this).attr('id').substr(3);
  });

  /*$( ".footnote" ).parent( "sup" ).hover(
    function() {
      var noteid = $(this).attr('id').substr(6),
          notetip = '#' + 'fn:' + noteid;
      setPos('#' + noteid);
      $('#' + noteid).addClass('show');
    }, function() {
      var noteid = $(this).attr('id').substr(6),
          notetip = '#' + 'fn:' + noteid;
      if ( $('#' + noteid).hasClass('clicked') ) {
        return;
      } else {
        setPos('');
        $('#' + noteid).removeClass('show');
      }
    }
  );*/

  $( ".footnote" ).parent( "sup" ).click( function() {
    var noteid = $(this).attr('id').substr(6),
        notetip = '#' + 'fn:' + noteid;
    setPos('#' + noteid);
    $('#' + noteid).addClass('clicked show');

    return false;
  });

});
