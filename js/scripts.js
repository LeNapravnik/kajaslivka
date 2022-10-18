
$( document ).ready(function() {
    
	$(".price-butt").click(function() {
        let buttId = $(this).attr("id");
        $("." + buttId).css("display", "block");
	});

    $(".felling").click(function() {
        if($(this).is(":visible")){
            $(this).css("display", "none");
        }
	});

    $(".firewood").click(function() {
        if($(this).is(":visible")){
            $(this).css("display", "none");
        }
	});

    $(".saw").click(function() {
        if($(this).is(":visible")){
            $(this).css("display", "none");
        }
	});

    $(".menu-dropdown select").selectOrDie();

});