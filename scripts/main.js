const app = {}
app.hamburgerMenu = $('#hamburger').parent()

app.init = () => {

    // We want the hamburger hidden not just if the doc width is resized, but if the doc width loads at a certain width
    if ($(window).width() >= "768") {
        app.hamburgerMenu.hide(200)
    }

    // When the doc is resized, if it's width is <= our 768px breakpoint, display the hamburger menu
    $(window).on('resize', function () {
        const docWidth = $(this).width()
        if (docWidth <= "768") {
            app.hamburgerMenu.show(200)
            app.hamburgerMenu.parent().find('ul').hide(200)

        } else {
            app.hamburgerMenu.hide(200)
            app.hamburgerMenu.parent().find('ul').show(200)
        }
    });

    // toggle nav ul when hamburger clicked
    app.hamburgerMenu.on('change', function () {
        $(this).parent().find('ul').toggle(200)
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: true,
        pageDots: false,
        contain: true
    });
}

$(function(){
    app.init()
});

