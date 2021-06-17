$(window).on("load",function(){
    /*----------- Preloader ------------*/
    $(".preloader").fadeOut("slow")
});

$(document).ready(function() {
    /*----------- Navbar Shrink ------------*/
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")

        }
    });

    /*----------- Footer Instagram Button ------------*/
    $(".instagram-open-btn").on("click", function(){
        window.open('https://www.instagram.com/ash.storeid/')
    });

    /*----------- Footer Whatsapp Button ------------*/
    $(".whatsapp-open-btn").on("click", function(){
        window.open('https://api.whatsapp.com/send?phone=6285210002072&text=Haloo Kak, Saya mau pesan Ultimate Drink nya yaa 🙏🏻')
    });

    $(".facebook-open-btn").on("click", function(){
        window.open('https://www.facebook.com/ash.storeidjsr/')
    });

    /*----------- Tentang Carousel ------------*/
    $('.tentang-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    /*----------- Tentang Carousel ------------*/
    $('.testimoni-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    /*----------- Page Scrolling - ScrollIt ---------*/
    $.scrollIt({
        topOffset: -50
    });

    /*----------- Navbar Collapse ---------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide")
    });
});