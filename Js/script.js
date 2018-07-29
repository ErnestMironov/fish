/*----------СКРИПТ ДЛЯ ПРОЛИСТЫВАНИЯ ЦЕЛОГО ЭКРАНА--------------*/
if(window.innerWidth > 769){
/*----------СКРИПТ ДЛЯ ПРОЛИСТЫВАНИЯ ЦЕЛОГО ЭКРАНА--------------*/	
function slidescreen() { h = $(window).height(); $(".screen").css('height', h); };

$(window).resize(slidescreen);
$(document).ready(slidescreen);

$(document).bind('mousewheel DOMMouseScroll', function(event) { scroll(event); });

var num = 1;
var scrolling = false;

function scroll(event) {
  event.preventDefault();
  if (!scrolling) {
    scrolling = true;
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      num--;
      num = num < 1 ? 1 : num;
    } else {
      num++;
      num = num > $(".screen").length ? $(".screen").length : num;
    }

    $('html, body').animate({
      scrollTop: $(".screen" + num).offset().top
    }, 500, "linear", function() {
      scrolling = false;
    });
  }
}
/*----------ИЗМЕНЕНИЕ СКРОЛЛБАРА-----------*/
$(".container_longList").niceScroll();

/*-----------ПОПАП НА ДЕСКТОПЕ-------*/
$(".header__menu").click(function(){
	$(".popup_desktop").slideDown();
})

$(".popup__close").click(function(){
	$(".popup_desktop").slideUp();
})
};


/*------------ПОПАП НА МОБИЛКЕ-------*/ 
if(window.innerWidth < 769){
	$(".header__menu").click(function(){
		$(".popup_mobile").slideDown();
	})
	 
	$(".popup__close").click(function(){
		$(".popup_mobile").slideUp();
	})
};
/*---------СЛАЙДЕР ДЛЯ ПЕРВОГО ЭКРАНА---------*/
if(window.innerWidth < 769){
$('.container_longList').slick({
	prevArrow: '<svg class="slick-arrow-prev" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3119 24.7414C13.5048 24.9138 13.746 25 14.0113 25C14.2765 25 14.5177 24.9138 14.7106 24.7414C15.0965 24.3966 15.0965 23.8362 14.7106 23.4914L2.41158 12.5L14.7106 1.50862C15.0965 1.16379 15.0965 0.603448 14.7106 0.258621C14.3248 -0.0862069 13.6977 -0.0862069 13.3119 0.258621L0.289389 11.875C-0.0964634 12.2198 -0.0964634 12.7802 0.289389 13.125L13.3119 24.7414Z" fill="#333333"/></svg>',
	nextArrow: '<svg class="slick-arrow-next" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3119 24.7414C13.5048 24.9138 13.746 25 14.0113 25C14.2765 25 14.5177 24.9138 14.7106 24.7414C15.0965 24.3966 15.0965 23.8362 14.7106 23.4914L2.41158 12.5L14.7106 1.50862C15.0965 1.16379 15.0965 0.603448 14.7106 0.258621C14.3248 -0.0862069 13.6977 -0.0862069 13.3119 0.258621L0.289389 11.875C-0.0964634 12.2198 -0.0964634 12.7802 0.289389 13.125L13.3119 24.7414Z" transform="translate(15 25) rotate(180)" fill="#333333"/></svg>'

});
};

/*---------СЛАЙДЕР НА 3-ЕМ ЭКРАНЕ-------------*/
$('.sliderFish').slick({
	prevArrow: '<svg class="slick-arrow-prev" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3119 24.7414C13.5048 24.9138 13.746 25 14.0113 25C14.2765 25 14.5177 24.9138 14.7106 24.7414C15.0965 24.3966 15.0965 23.8362 14.7106 23.4914L2.41158 12.5L14.7106 1.50862C15.0965 1.16379 15.0965 0.603448 14.7106 0.258621C14.3248 -0.0862069 13.6977 -0.0862069 13.3119 0.258621L0.289389 11.875C-0.0964634 12.2198 -0.0964634 12.7802 0.289389 13.125L13.3119 24.7414Z" fill="#333333"/></svg>',
	nextArrow: '<svg class="slick-arrow-next" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3119 24.7414C13.5048 24.9138 13.746 25 14.0113 25C14.2765 25 14.5177 24.9138 14.7106 24.7414C15.0965 24.3966 15.0965 23.8362 14.7106 23.4914L2.41158 12.5L14.7106 1.50862C15.0965 1.16379 15.0965 0.603448 14.7106 0.258621C14.3248 -0.0862069 13.6977 -0.0862069 13.3119 0.258621L0.289389 11.875C-0.0964634 12.2198 -0.0964634 12.7802 0.289389 13.125L13.3119 24.7414Z" transform="translate(15 25) rotate(180)" fill="#333333"/></svg>',
	responsive: [
    {
      breakpoint: 769,
      settings: {
        prevArrow: '<svg class="slick-arrow-prev" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3119 24.7414C13.5048 24.9138 13.746 25 14.0113 25C14.2765 25 14.5177 24.9138 14.7106 24.7414C15.0965 24.3966 15.0965 23.8362 14.7106 23.4914L2.41158 12.5L14.7106 1.50862C15.0965 1.16379 15.0965 0.603448 14.7106 0.258621C14.3248 -0.0862069 13.6977 -0.0862069 13.3119 0.258621L0.289389 11.875C-0.0964634 12.2198 -0.0964634 12.7802 0.289389 13.125L13.3119 24.7414Z" fill="#FFF"/></svg>',
		nextArrow: '<svg class="slick-arrow-next" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3119 24.7414C13.5048 24.9138 13.746 25 14.0113 25C14.2765 25 14.5177 24.9138 14.7106 24.7414C15.0965 24.3966 15.0965 23.8362 14.7106 23.4914L2.41158 12.5L14.7106 1.50862C15.0965 1.16379 15.0965 0.603448 14.7106 0.258621C14.3248 -0.0862069 13.6977 -0.0862069 13.3119 0.258621L0.289389 11.875C-0.0964634 12.2198 -0.0964634 12.7802 0.289389 13.125L13.3119 24.7414Z" transform="translate(15 25) rotate(180)" fill="#FFF"/></svg>'
      }
    }
  ]
});

 
