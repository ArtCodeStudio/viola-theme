movingImageOnMousemove("#apps", '#apps .foreground_finger', 50, 200, true, false, 100);

// navbar brand fading effekt on scroll position under header
// $(window).scroll(function() {
//   var height = $('#top').height();
//   var position = $(window).scrollTop();
//   if(position > height) {
//       $('.navbar-brand').css('opacity', 1);
//   } else {
//       $('.navbar-brand').css('opacity', 0);
//   }
// });

// top header animation
new Vivus('header_svg', 
    {
        duration: 300,
        type: 'delayed',
    }, function() {

    }
);
setTimeout(function(){
    // draw subtext with textillate
    $('.jumplink-subtext').textillate(
        {
            in: {
                effect: 'fadeIn',
                shuffle: true,
                delay: 100,
            }
        }
    );
}, 2000);


// leaflet

var map = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([53.87249480720694, 8.698151707649231], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jumplink.p9j2ob03',
    accessToken: 'pk.eyJ1IjoianVtcGxpbmsiLCJhIjoiY2lsODd0MGx0MDAyYXdzbHoxNWRzendxZyJ9.6HrdtEXX7n5DhJMNW8PEWA'
}).addTo(map);

var marker = L.marker([53.87249480720694, 8.698151707649231]).addTo(map);

// var control = new L.control.zoom({position: 'bottomright'});
// control.addTo(map);