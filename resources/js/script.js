
$(document).ready(function() {

/*
animations on scroll


$('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  $('.js--wp-btn').waypoint(function(direction) {
      $('.js--wp-btn').addClass('animated bounce');
  }, {
    offset: '100%'
});

*/

$(function() {

	var $bars = $( ".skillbar-bar" ),
		total = $bars.length,
		index = -1,
		timer = null,
		select = function( i ) {
			var $bar = $bars.eq( i );
			$bar.css( "width", $bar.parent().data( "percent" ) );
			$bar.parent().addClass( "complete" );
		},
		action = function() {
			index++;
			if( index == total - 1 ) {
				clearTimeout( timer );
			}
			select( index );
			setTimeout( action, 500 );

		};


	timer = setTimeout( action, 500 );

});



$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});
});
