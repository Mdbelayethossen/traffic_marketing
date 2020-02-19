$(document).ready(function () {
	//Owl init
	$(' .case .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    // Testimonial Owl
	$(' .testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    // Hero Area Owl
	$(' .hero_area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
// Custom button
    var owl = $('.slider');
    owl.owlCarousel();
    // Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    // Create a new instance of Slidebars
    var controller = new slidebars();


    // Initialize Slidebars
    controller.init();

    // Left Slidebar controls
    $( '.js-open-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-1' );
    } );

    $( '.js-close-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-1' );
    } );

    $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1' );
    } );


    // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );

})