/**
 * Enable tooltips everywhere
 * @see http://v4-alpha.getbootstrap.com/components/tooltips/#example-enable-tooltips-everywhere
 */ 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="tooltip"][data-show="always"]').tooltip('show')
});



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
        latency: 100, // default is 300
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
            jQuery(this).unbind('scroll touchmove', jQuery(this).data(uid2) );
        }
    };
})();

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
        return true;
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
