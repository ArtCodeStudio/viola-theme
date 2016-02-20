var movingImageOnMousemove = function () {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#apps .svg_apps_col").mousemove(function(e){
        console.log(e);
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#apps .foreground_finger').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
};

$( document ).ready(function() {
    console.log("ready");
    // new Vivus('jumplink_mediamor', {duration: 200}, function() {
    //     console.log("Vivus cb");
    // });
    var svgElement = document.getElementById("screen");
    console.log("svg el", svgElement);
    // var appSvg = Snap(svgElement);
    // console.log("appSvg", appSvg);
    // var screen = appSvg.select('#screen');
    // console.log("screen", screen);
    // movingImageOnMousemove();

});