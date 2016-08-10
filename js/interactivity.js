jQuery("#credits").on("click", function() {
    var message = "Game created by the one and only, your boi Stern";
    jQuery("#credits").append(
        "<p>" + message + "</p>"
    );
});
