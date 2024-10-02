(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});
        // Select all accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        // Loop through each accordion header and add a click event listener
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;

                // Toggle between adding/removing the "active" class
                this.classList.toggle('active');

                // If the content is already visible, hide it
                if (content.style.height) {
                    content.style.height = null;
                    this.querySelector('.icon').textContent = '+';
                } else {
                    // Set height dynamically for smooth animation
                    content.style.height = content.scrollHeight + 'px';
                    this.querySelector('.icon').textContent = '−';
                }
            });
        });
        
        $('.menu-tirgger').on('click',function(){
            $('.mobile-menu-wrapper').addClass('open');
            $('body').css('overflow','hidden');
        });
        
        $('.close-btn').on('click',function(){
            $('.mobile-menu-wrapper').removeClass('open');
            $('body').css('overflow','inherit');
        });
        

// WOW active
new WOW().init();


})(jQuery);