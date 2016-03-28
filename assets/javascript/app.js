/**
 * Enable tooltips everywhere
 * @see http://v4-alpha.getbootstrap.com/components/tooltips/#example-enable-tooltips-everywhere
 */ 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="tooltip"][data-show="always"]').tooltip('show')
})

/**
 * @see https://github.com/daneden/animate.css
 */
$.fn.extend({
    animateCss: function (animationName, cb) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            $(this).addClass('animationDone');
            if(typeof(cb) === 'function') {
                cb();
            }
            
        });
    }
});

/**
 * Special scroll events for jQuery
 * @see http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
 */
(function(){
 
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
 
    special.scrollstart = {
        setup: function() {
 
            var timer,
                handler =  function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.dispatch.apply(_self, _args);
                    }
 
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll touchmove', handler).data(uid1, handler);
 
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll touchmove', jQuery(this).data(uid1) );
        }
    };
 
    special.scrollstop = {
        latency: 10, // default is 300
        setup: function() {
 
            var timer,
                    handler = function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    }
 
                    timer = setTimeout( function(){
 
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.dispatch.apply(_self, _args);
 
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll touchmove', handler).data(uid2, handler);
 
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll touchmove', jQuery(this).data(uid2) );
        }
    };
})();

/**
 * Moving background-image on mousemove
 * @see http://codepen.io/chrisboon27/pen/rEDIC
 */
var movingImageOnMousemove = function (mouseSelector, backgroundSelector, xOffset, yOffset, centerX, centerY, movementStrength) {
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    
    var move = function (pageX, pageY) {
        pageX = pageX - ($(window).width() / 2);
        pageY = pageY - ($(window).height() / 2);
        var newvalueX = (width * pageX * -1) + xOffset;
        var newvalueY = (height * pageY * -1) + yOffset;
        if(centerX === true) {
            newvalueX += $(mouseSelector).width() / 2;
        }
        if(centerY === true) {
            newvalueY += $(mouseSelector).height() / 2;
        }
        $(backgroundSelector).css("background-position", newvalueX+"px "+newvalueY+"px");
    }
    // initial position
    move(0, 0);
    // reset position on windows resize
    $( window ).resize(function() {
        move(0, 0);
    });
    // move background on mousemove
    $(mouseSelector).mousemove(function(e) {
        move(e.pageX, e.pageY);
    });
};

/**
 * Performs a smooth page scroll to an anchor on the same page.y
 * @see https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/**
 * @see http://dcdeiv.github.io/simpler-sidebar/
 */
$('#sidebar').show();
$('#sidebar').simplerSidebar({
	opener: '.navbar-toggler',
	animation: {
		duration: 500,
		easing: 'easeOutQuint'
	},
	sidebar: {
		align: 'left',
		width: 320,
		closingLinks: 'a'
	},
	mask: {
		display: true
	}
});

/**
 * Leaflet initial stuff
 * @see http://leafletjs.com/
 */
L.Icon.Default.imagePath = '/themes/jumplink/assets/vendor/leaflet/dist/images/'


/**
 * Check if element is in viewport after scroll or resize, if it is, start animations
 * @see https://github.com/patik/within-viewport
 * @see https://github.com/daneden/animate.css
 */
$(function () {
    
    var fadeInLeftOnViewports = $('.fadeInLeftOnViewport');
    var fadeInRightOnViewports = $('.fadeInRightOnViewport');
    
    var checkAnimations = function () {
        
        $.each(fadeInLeftOnViewports, function( index, value ) {
            value = $(value);
            if(value.find('img, video').is(':within-viewport')) {
                if(!value.hasClass( "animationDone" )) {
                    value.animateCss('fadeInLeft', function(){});
                }
                
            }
        });
        
        $.each(fadeInRightOnViewports, function( index, value ) {
            value = $(value);
            if(value.find('img, video').is(':within-viewport')) {
                if(!value.hasClass( "animationDone" )) {
                    value.animateCss('fadeInRight', function(){});
                }
                
            }
        });
    }
    
    $(window).on('resize scrollstop scrollstart', function() {
        checkAnimations();
    });
    checkAnimations();
})