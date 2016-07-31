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

$(window).on("load resize", function() {
	var heightOwners = $(".block-height-owner");

	heightOwners.each(setHeightFromContentBlock);

});

function setHeightFromContentBlock() {
	if ($(document).width() > 768) {
		$(this).find(".block-height-resize").removeAttr("style")
		var height = $(this).height();
		$(this).find(".block-height-resize").height(height);
	} else {
		$(this).find(".block-height-resize").removeAttr("style");
	}
	
}