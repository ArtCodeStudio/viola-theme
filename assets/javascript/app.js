$( document ).ready(function() {
    console.log("ready");
    new Vivus('jumplink_mediamor', {duration: 200}, function() {
        console.log("Vivus cb");
    });
});