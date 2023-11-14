$(function () {
   
    $(".menu").on("click","a", function (e) { 
		e .preventDefault();

		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

     $('.slider-blog__inner').slick({
         dots: true,
         prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
         nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>'

     });

    $('.menu__btn').on('click',function(){
        $('.header__top-inner').toggleClass('header__top-inner--active '); 
    }); 

     var mixer = mixitup('.portfolio__content'); 

});  