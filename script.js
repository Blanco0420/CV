// function focusThis(x) {
//     console.log(x);
//     const element = document.getElementById(x);
//     element.scrollIntoView();
//     element.focus();
// }
$(document).ready(function() {
	$('.popup') >//FIXME hide all but button.hide();
	$('.popup') > $('button').click(function(){
		$(this).next(".child").toggle();
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
  });
}
