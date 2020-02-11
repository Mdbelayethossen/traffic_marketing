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


})