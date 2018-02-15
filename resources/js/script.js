
$(document).ready(function() {

  /*  Sticky Nav*/
  $('.js--about-us-section').waypoint(function(direction) {
    if(direction == "down"){

      $('nav').addClass('sticky');

    } else {

      $('nav').removeClass('sticky');
    }

});


//animations on scroll


$('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeInLeft');
  }, {
    offset: '100%'
  });

  $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInRight');
  }, {
    offset: '100%'
});
$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated pulse');
}, {
  offset: '50%'
});
$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
}, {
  offset: '40%'
});

$('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated slideInLeft');
}, {
  offset: '40%'
});
$('.js--wp-6').waypoint(function(direction) {
    $('.js--wp-6').addClass('animated slideInUp');
}, {
  offset: '40%'
});
$('.js--wp-7').waypoint(function(direction) {
    $('.js--wp-7').addClass('animated slideInRight');
}, {
  offset: '40%'
});

$('.js--wp-8').waypoint(function(direction) {
    $('.js--wp-8').addClass('animated fadeInLeft');
}, {
  offset: '50%'
});
$('.js--wp-9').waypoint(function(direction) {
    $('.js--wp-9').addClass('animated shake');
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


  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



// this is for the form

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

$('.js-nav-icon').click(function(){

    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-planet')){

      icon.addClass('ion-ios-close-outline');
      icon.removeClass('ion-planet');

    } else {

      icon.addClass('ion-planet');
      icon.removeClass('ion-ios-close-outline');

    }
});



});
