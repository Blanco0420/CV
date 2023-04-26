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
	$("#nav-menu li a").click(function() {
		var target = $(this).attr('href');
		
		$('html, body').animate({
			scrollTop: $(target).offset().top - 120
		}, 200);
	});


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
