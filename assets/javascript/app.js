/**
 * Enable tooltips everywhere
 * @see http://v4-alpha.getbootstrap.com/components/tooltips/#example-enable-tooltips-everywhere
 **/ 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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