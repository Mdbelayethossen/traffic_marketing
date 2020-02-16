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
        autoplay: false,
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



})