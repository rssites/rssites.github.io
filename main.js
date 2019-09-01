$(document).ready(function () {

	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.2,
		filter: '',
		easing: 'swing',
		begin: function() {
		},
		end: function() {
		},
		scrollChange: function($currentListItem) {             
		}
	});
//$(window).on('beforeunload', function(){
//	$(window).scrollTop(0);
//})
$(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 97) {
			$(".navbar").addClass('nextnav');
		} else {
			$(".navbar").removeClass("nextnav");
		}
	});
});
$("form.form-callback").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.succes').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 6,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	el: '.swiper-pagination',
	clickable: true, 	
	},
});
$(document).ready(function() {
    setTimeout(function() {
      $('.preloader').fadeOut('slow', function() {});
    }, 500);
  });
});
$(document).ready(function(){
    $(".home-button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});