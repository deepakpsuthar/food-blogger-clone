jQuery(document).ready(function($) {
    $(document).on('click','.ds07-hamburger',function(e){
        $(".header-left").addClass('show');
        // $(".header-left").animate({
        //     width: "toggle"
        // });
    });
    $(document).on('click','.close-btn,.mobile-navbar .nav-link',function(e){
        $(".header-left").removeClass('show');

    });


});









