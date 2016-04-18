/**
 * Create Leaflet map
 */

$('#navigation_link').attr("href", window.theme.locationLink)

var map = L.map('map', {
    zoomControl: false,
    attributionControl: true,
    scrollWheelZoom: false,
}).setView([window.theme.locationLongitude, window.theme.locationLatitude], window.theme.locationZoom);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: window.theme.locationMaxZoom,
    id: window.theme.locationMapboxId,
    accessToken: window.theme.locationMapboxAccessToken,
}).addTo(map);

var marker = L.marker([window.theme.locationLongitude, window.theme.locationLatitude]).addTo(map);

var changeNavbar = function () {
    var windowScrollTop = $(window).scrollTop();
    var viewportHeight = $( window ).height();
    var mainNavbarHeight = 54; //$('#main-navbar').height();
    var actionPosition = viewportHeight - mainNavbarHeight;
    if(windowScrollTop >= actionPosition ) {
        $('#main-navbar, #sidebar').removeClass('navbar-big');
        $('#main-navbar').addClass('bg-white');
    } else {
        $('#main-navbar, #sidebar').addClass('navbar-big');
        $('#main-navbar, #sidebar').removeClass('bg-white');
    }
}

/**
 * Navbar
 */
$(window).on('resize scroll', function() {
    changeNavbar();
});

changeNavbar();
