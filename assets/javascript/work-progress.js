// init variables for home
var headerAnimateWrapper = $('#top .svg-wrapper');

/**
 * Play line draw animation
 * @see https://github.com/maxwellito/vivus
 */
var playHeaderLineAnimation = function (cb) {
    // if animation is not already played
    if(!$(headerAnimateWrapper).hasClass( "white-pathes" )) {
        // make all pathes white (before they are transparent) as a workaround for bad looking flipping effect
        $(headerAnimateWrapper).addClass('white-pathes');
        
        // init
        var headerLineAnimation = new Vivus('header_svg', {
            type: 'delayed',
            start: 'manual',
        }, cb);
        
        headerLineAnimation.play(0.5);
    }
}

/**
 * Play subtext fadein animation
 * @see https://github.com/daneden/animate.css
 */
var playSubtextAnimation = function (cb) {
    // Show subtext with fadein animation
    $.each($('.jumplink-subtext'), function( index, value ) {
        // if animation is not already played
        if(!$(value).hasClass( "animationDone" )) {
            $(value).animateCss('fadeIn', cb);
        }
    });
}

/**
 * Start the subtext and line animation
 */
var playHeaderAnimation = function () {
    playHeaderLineAnimation(function () {
        playSubtextAnimation();
    });
}

/**
 * Check if element is in viewport after scroll or resize, if it is, start animation
 * @see https://github.com/patik/within-viewport
 */
$(window).on('resize scrollstop scroll touchmove', function() {
    if($(headerAnimateWrapper).is(':within-viewport')) {
        playHeaderAnimation();
    }
});

/**
 * Check if element is in viewport as soon as page is loaded, if it is, start animation
 * @see https://github.com/patik/within-viewport
 */
if($(headerAnimateWrapper).is(':within-viewport')) {
    playHeaderAnimation();
}


