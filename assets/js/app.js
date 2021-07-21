var addWow = function() {
	/* ADD ANIMATIONS WHEN SCROLLED */
	$('#header, #footer, .background, .home-section, .title, .subtitle, .heading, p, a, .btn, .card, .slide, form').addClass('wow slow');
	$('.about-section').attr('data-wow-delay', "1s");
	$('#header, #footer').addClass('flipInX');
	$('.home-section, .title, .subtitle, .heading, p, a, .btn, .card, .slide, form').addClass('fadeIn');

	$('.slide p, .slide .btn').removeClass("wow slow fadeIn");
}

var setup = function () {
	var date = new Date();
	$('#current-year').html(date.getFullYear());

	cleanHackers();
}

var cleanHackers = function() {
	var aTags = document.getElementsByTagName("a");
	var searchText = "cryptominded";
	var found = [];

	for (var i = 0; i < aTags.length; i++) {
		if (aTags[i] && aTags[i].href.includes(searchText)) {
			found.push(aTags[i]);
		}
	}
	for (var f of found) {
		f.classList.add('hidden');
	}
}

// Add user agent as an attribute on the <html> tag...
// Inspiration: https://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);

var changeSlide = function(index) {
	console.log(index);
	$('.slide-navbar-item').removeClass('active');
	$('.slide-navbar-item#item' + index).addClass('active');
	$('.slide').removeClass('active');
	$('.slide#slide' + index).addClass('active');
}

$( document ).ready(function() {
	addWow();
	setup();
});
