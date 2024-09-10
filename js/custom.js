$(function(){
	$(document).ready(function() {
    const $counters = $(".scroll-on");
    const exposurePercentage = 100;
    const loop = true; 
    $(window).on('scroll', function() {
        $counters.each(function() {
            const $el = $(this);
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; 
            const contentHeight = rect.bottom - rect.top; 
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 100) {
      $('.header , .gototop , .scroll-on').addClass('active');
    }
    else {
      $('.header , .gototop , .scroll-on').removeClass('active');
    }
  })

  $('.main-menu > ul > li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  
  $('.gototop').click(function(){
    $('.main-menu > ul > li').removeClass('active');
  })

  $('input[name=tab2]').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('button.active').removeClass('active');
    
    var $outer = $this.closest('.outer');
    var $current = $outer.find(' > .tabs > .tab.active');
    var $post = $outer.find(' > .tabs > .tab').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
    
    $('.practice-item').slick('setPosition');
    });

    $('.practice-item').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      });
      
  /* Mobile Custom JS */
  $('.hamburger').click(function(){
    $('.main-menu').toggleClass('active');
    $(this).toggleClass('active');
  })
  $('.main-menu > ul > li').click(function(){
    $('.main-menu').removeClass('active');
    $('.hamburger').removeClass('active');
  })
  $('section').click(function() {
    $('.main-menu').removeClass('active');
    $('.hamburger').removeClass('active');
  })
})