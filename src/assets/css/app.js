

$(window).on('load', function () {

 // Vendor carousel
 $('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:4
        },
        768:{
            items:6
        },
        992:{
            items:8
        }
    }
});


    
    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    
 
  
  


    document.addEventListener("DOMContentLoaded", () => {
        const dropdowns = document.querySelectorAll(".dropdown-submenu > a");
    
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener("click", (e) => {
                e.preventDefault();
                const submenu = dropdown.nextElementSibling;
    
                if (submenu) {
                    const isVisible = submenu.style.display === "block";
                    submenu.style.display = isVisible ? "none" : "block";
                }
            });
        });
    
        // Close submenus on click outside
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".dropdown-menu")) {
                const submenus = document.querySelectorAll(".dropdown-menu .dropdown-menu");
                submenus.forEach((submenu) => (submenu.style.display = "none"));
            }
        });
    });
    
  

    
});


