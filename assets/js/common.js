$(document).ready(function() {
	$("#header").load("./sample/header.html");
	$("#footer").load("./sample/footer.html");
});
$(window).scroll(function() {
	if($(this).scrollTop() > $('.navbar').height()) {
		$(".navbar").addClass("sticky")
	} else {
		$(".navbar").removeClass("sticky")
	}
});