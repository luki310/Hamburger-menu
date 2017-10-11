(function($) {
    $(document).ready(function() {

        var button = $("img.menu-icon"),
            menu = $("#hamburger-menu");

        button.on('click', function(e){
            console.log(e.currentTarget);
            menu.toggleClass("visible");
        });
    });

    var  h1 = $(".content .container .row h1");
    h1.on("showContent", function() {
        $(this).addClass("visible");
    });
    $(window).on("load", function() {
        $(".content .container .row h1").trigger("showContent");
    });

})(jQuery);