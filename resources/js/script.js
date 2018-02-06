
$(document).ready(function() {

/*
animations on scroll
*/

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


});
