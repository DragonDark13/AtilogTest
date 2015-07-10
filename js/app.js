
$.fx.speeds._default = 1000;

$(document).ready(function() { 


<!-- Делает верхнее меню невидимым при прокрутке ------------------------------------------------------------->
	
	$(window).scroll(function(){
	
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop != 0)
		
		
			/*Делает навигацию полупрозрачной при прокрутке вниз, 
			в данном случае если прокрутка вниз больше 0*/
			$('.top').stop().addClass("top--transparent");
		
		else
		
			$('.top').stop().removeClass("top--transparent");
	
	});
	
	
	
	<!-- Адаптивное верхнее меню ---------------------------------------------------------------------->
	$(function() {
		$('.top_switch-meni').click(function() {
			
			
	/*		Меню выпадает при нажатии на кнопку*/
			if($('.top ul').is(':visible')) {
			$('.top ul').removeClass('top_show-meni'); 
		}
		else {
			
	/*		Или исчезает*/
			$('.top ul').addClass('top_show-meni'); 
		} 
		}); 
	});
	
	
	<!-- Плавная прокрутка ---------------------------------------------------------------------------------->
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		
		var target = this.hash,
		$target = $(target);
		
		$('html, body').stop().animate({
		'scrollTop': $target.offset().top
		}, 700, 'swing', function () {
		window.location.hash = target;
		});
	});
	
	
	<!-- Показ картинок - портфолио-->
	
	/*Скрывает контейнер с картинками*/
	$('.conteiner-img').hide();

		$('.portfolio-block').click(function(){
			
		/*	Показывает контейнер*/
		$('.conteiner-img ').show();
		
		/*Удаляет выделение с всех блоков портфолио*/
		$('.portfolio-block').removeClass('portfolio-block--click');
		
		/*Скрывает все картинки*/
		$('.conteiner-img img').removeClass("active");
		
		/*Выделяет активный*/
		$(this).addClass('portfolio-block--click');	
		
		/*Находим номер блока */
		var number = $(this).index() - 1;
		
		/*Показывает выбранную  */
		$('.conteiner-img img').eq(number).addClass("active");
	
	});


});