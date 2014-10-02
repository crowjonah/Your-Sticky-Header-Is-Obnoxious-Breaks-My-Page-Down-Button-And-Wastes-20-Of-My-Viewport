$(document).on("scroll", function() {
    $('div, header, nav').filter(function() {
        if ($(this).css("position") === 'fixed') {
            if (parseInt($(this).offset().top, 10) == parseInt($(document).scrollTop(), 10)) {
                $(this).remove();
            }
        }
    });
});
