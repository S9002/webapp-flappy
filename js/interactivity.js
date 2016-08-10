jQuery("#scoresbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<ul>" +
            "<li>" + "Me" + "</li>" +
            "<li>" + "Also me" + "</li>" +
            "<li>" + "Me again" + "</li>" +
        "</ul>"
    );
});

jQuery("#creditsbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<div>" + "Game created by Bob!" + "</div>"
    );
});

jQuery("#helpbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
"<ul>"
            + "<li>" + "Whatch Barren Day Simon plummet to his demise" + "</li>"
            + "<li>" + "You can struggle for your meaning-less life by pressing space" + "</li>"
            + "<li>" + "Have fun whatching Bazjobs endless spiral of depression and guilt, only on Bazjob.com" + "</li>"
        + "</ul>"
    );
});
