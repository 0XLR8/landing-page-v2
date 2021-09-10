//        Modal Example https://codepen.io/rppld/pen/vOvdyQ

// Slide to info panel script
$(document).ready(function(){
    $( "#info-btn" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});


// Modal Script

$('.modal-trigger').on('click', function(){
    const modal = $(".modal");
    const contentWrapper = $('.content-wrapper');
    const close = $('.modal .close');

    close.on('click', function(){
        modal.removeClass('open');
    });
    modal.on('click', function(){
        modal.removeClass('open');
    });
    contentWrapper.on('click', function(e){
        e.stopPropagation()
    });

    modal.toggleClass('open');
});

$(".modal-form").on("submit", function(e){
    e.preventDefault();
})


// Flickity Info Card Script
$('.info-cards').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    watchCSS: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false
  });