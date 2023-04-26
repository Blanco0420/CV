// function focusThis(x) {
//     console.log(x);
//     const element = document.getElementById(x);
//     element.scrollIntoView();
//     element.focus();
// }
$(document).ready(function() {
	$(".popup button").click(function() {
		$(this).parent().find("div").toggle();
	});
	// When the user scrolls the page, execute myFunction
	// window.onscroll = function() {addSticky()};

	// // Get the navbar
	// var navbar = document.getElementById("topnav");

	// // Get the offset position of the navbar
	// var sticky = navbar.offsetTop;

	// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	// function addSticky() {
	// 	if (window.pageYOffset >= sticky) {
	// 		navbar.classList.add("sticky")
	// 	} else {
	// 		navbar.classList.remove("sticky");
	// 	}
	// }
	const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.
        addEventListener('click', () =>{
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));


	let navbar = document.getElementById("navbar");
	let navPos = navbar.getBoundingClientRect().top;
	window.addEventListener("scroll", e => {
		let viewportHeight = window.innerHeight;
		let scrollPos = window.scrollY;
		if (scrollPos > navPos) {
			navbar.classList.add('sticky');
			content.classList.add('navbarOffsetMargin');
		} else {
		navbar.classList.remove('sticky');
		content.classList.remove('navbarOffsetMargin');
		}
	  });
});
function scrollToIndustry() {
	const container = $('html, body')
	var scrollTo = $("#industry");
	var position = scrollTo.offset().top 
    	- container.offset().top 
    	+ container.scrollTop();
	container.animate({
		scrollTop: position
	}, 200);
	$(scrollTo).addClass("focusBorder");
}
