$(".header-menu-icon").click(function() {
	$(".header-menu-list").show(400);
});

$(".menu-list-close").click(function() {
	$(".header-menu-list").hide(400);
});


$(".project-menu-icon").click(function() {
	$(".pop-up-list").slideDown(400);
});

$(".close-icon").click(function() {
	$(".pop-up-list").slideUp(400);
});