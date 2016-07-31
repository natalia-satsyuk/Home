$(".header-menu-icon").click(function() {
	if ($(document).width() > 768) {
		$(".header-menu-list").show(400);
	} else {
		$(".header-menu-list").slideDown(400);
	}
	
});

$(".menu-list-close").click(function() {
	if ($(document).width() > 768) {
		$(".header-menu-list").hide(400);
	} else {
		$(".header-menu-list").slideUp(400);
	}
	
});


$(".project-menu-icon").click(function() {
	$(this).siblings(".pop-up-list").slideDown(400);
});

$(".close-icon").click(function() {
	$(this).parent(".pop-up-list").slideUp(400);
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