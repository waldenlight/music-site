// Navbar collapse
var showLinksButton = $("#show-links");
var navLinks = $("#nav-links");
var footerShowLinksButton = $("#footer-show-links");
var footerNavLinks = $("#footer-nav-links");

var toggleLinks = function () {
    if (!navLinks.is(':visible')) {
        navLinks.show();
    } else {
        navLinks.hide();
    }
}

var footerToggleLinks = function () {
    if (!footerNavLinks.is(':visible')) {
        footerNavLinks.show();
    } else {
        footerNavLinks.hide();
    }
}

showLinksButton.on("click", toggleLinks);
footerShowLinksButton.on("click", footerToggleLinks);