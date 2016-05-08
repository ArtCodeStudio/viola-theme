var changeNavbar = function () {
    var windowScrollTop = $(window).scrollTop();
    var viewportHeight = $( window ).height();
    var mainNavbarHeight = 54; //$('#main-navbar').height();
    var actionPosition = viewportHeight - mainNavbarHeight;
    if(windowScrollTop >= actionPosition ) {
        $('#main-navbar, #sidebar').removeClass('navbar-big');
        $('#main-navbar').removeClass('bg-white-transparent');
        $('#main-navbar').addClass('bg-white');
        
    } else {
        $('#main-navbar, #sidebar').addClass('navbar-big');
        $('#main-navbar').addClass('bg-white-transparent');
        $('#main-navbar, #sidebar').removeClass('bg-white');
    }
}

/**
 * Navbar
 */
$(window).on('resize scrollstop', function() {
    changeNavbar();
});

changeNavbar();
