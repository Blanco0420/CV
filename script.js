// function focusThis(x) {
//     console.log(x);
//     const element = document.getElementById(x);
//     element.scrollIntoView();
//     element.focus();
// }
$(document).ready(function () {
	// fix line height for divs
	// const root = document.querySelector(':root');
	// const jobDivHeight = getComputedStyle(document.querySelector("div.job")).height;
	// root.style.setProperty('--jobDivHeight', jobDivHeight);

	$(".popup button").click(function () {
		if (!$(this).is("#ignore")) {
			$(this).parent().find("div").slideToggle(500);
			$(this).parent().find("button").toggleClass("active");
		}
	});
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
	});

	document.querySelectorAll(".nav-link").forEach((n) =>
		n.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
		})
	);
	$("#nav-menu li a").click(function () {
		var target = $(this).attr("href");

		$("html, body").animate(
			{
				scrollTop: $(target).offset().top - 120,
			},
			200
		);
	});

	let navbar = document.getElementById("navbar");
	let navPos = navbar.getBoundingClientRect().top;
	let navBarHeight = navbar.getBoundingClientRect().height;
	let contenttop =
		document.getElementById("content").getBoundingClientRect().top -
		navBarHeight;
	window.addEventListener("scroll", (e) => {
		let viewportHeight = window.innerHeight;
		let scrollPos = window.scrollY;
		if (scrollPos >= contenttop) {
			navbar.classList.add("sticky");
			content.style.paddingTop = navBarHeight + 70 + "px";
		} else {
			navbar.classList.remove("sticky");
			navMenu.classList.add("leftTransition");
			content.style.paddingTop = "70px";
		}
	});
});
function scrollToIndustry() {
	const container = $("html, body");
	var scrollTo = $("#industry");
	var position =
		scrollTo.offset().top - container.offset().top + container.scrollTop();
	container.animate(
		{
			scrollTop: position,
		},
		200
	);
	$(scrollTo).addClass("focusBorder");
}
