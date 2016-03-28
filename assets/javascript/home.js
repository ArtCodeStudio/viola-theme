// init variables for home
var headerAnimateWrapper = $('#top .svg-wrapper');

// run move finger function to start running this feature
movingImageOnMousemove("#apps", '#apps .foreground_finger', 50, 200, true, false, 100);

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


/**
 * Create Leaflet map
 */
var map = L.map('map', {
    zoomControl: false,
    attributionControl: true
}).setView([53.87249480720694, 8.698151707649231], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jumplink.p9j2ob03',
    accessToken: 'pk.eyJ1IjoianVtcGxpbmsiLCJhIjoiY2lsODd0MGx0MDAyYXdzbHoxNWRzendxZyJ9.6HrdtEXX7n5DhJMNW8PEWA'
}).addTo(map);

var marker = L.marker([53.87249480720694, 8.698151707649231]).addTo(map);

