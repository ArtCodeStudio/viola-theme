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

