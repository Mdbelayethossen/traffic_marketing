(function ($) {
    "use strict"; 
    
    
     // mailchimp start
        if ($('.mailchimp').length > 0) {
            /*  MAILCHIMP  */
            $('.mailchimp').ajaxChimp({
                language: 'es',
                callback: mailchimpCallback,
                url: "https://gmail.us4.list-manage.com/subscribe/post?u=90f17da8d000ce6d21cadeede&amp;id=9b8eabe660" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
            });
        }
    
        function mailchimpCallback(resp) {
            if (resp.result === 'success') {
                $('.subscription-success').html('<i class="fas fa-check"></i><br/>' + resp.msg).fadeIn(1000);
                $('.subscription-error').fadeOut(500);
    
            } else if (resp.result === 'error') {
                $('.subscription-error').html('<i class="fas fa-times"></i><br/>' + resp.msg).fadeIn(1000);
            }
        }
        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: 'We have sent you a confirmation email',
            1: 'Please enter a value',
            2: 'An email address must contain a single @',
            3: 'The domain portion of the email address is invalid (the portion after the @: )',
            4: 'The username portion of the email address is invalid (the portion before the @: )',
            5: 'This email address looks fake or invalid. Please enter a real email address'
        };
    
        
    })(jQuery);