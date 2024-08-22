$(function(){
	$(document).ready(function() {
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(".scroll-on");
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function() {
            const $el = $(this);
    
            // 요소의 위치 정보를 가져옵니다.
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이
            
            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 100) {
      $('.header , .gototop').addClass('active');
    }
    else {
      $('.header , .gototop').removeClass('active');
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
    // 위의 코드는 탭메뉴 코드입니다.
    
    $('.practice-item').slick('setPosition');
    // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
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