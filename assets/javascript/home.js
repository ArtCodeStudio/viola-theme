/**
 * Create Leaflet map
 */
var map = L.map('map', {
    zoomControl: false,
    attributionControl: true
}).setView([53.88373, 8.67392], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jumplink.p9j2ob03',
    accessToken: 'pk.eyJ1IjoianVtcGxpbmsiLCJhIjoiY2lsODd0MGx0MDAyYXdzbHoxNWRzendxZyJ9.6HrdtEXX7n5DhJMNW8PEWA'
}).addTo(map);

var marker = L.marker([53.88373, 8.67392]).addTo(map);

var changeNavbar = function () {
    var windowScrollTop = $(window).scrollTop();
    var viewportHeight = $( window ).height();
    var mainNavbarHeight = 54; //$('#main-navbar').height();
    var actionPosition = viewportHeight - mainNavbarHeight;
    if(windowScrollTop >= actionPosition ) {
        $('#main-navbar').removeClass('navbar-big');
        $('#main-navbar').addClass('bg-white');
    } else {
        $('#main-navbar').addClass('navbar-big');
        $('#main-navbar').removeClass('bg-white');
    }
}

$(window).on('resize scroll', function() {
    changeNavbar();
});

changeNavbar();