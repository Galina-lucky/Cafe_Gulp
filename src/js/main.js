;(function(){

  $(document).ready(function() {

    createSmoothScroll()
    madeFixedMenu();
    showActiveMenuItem()
    showMobileMenu();

    $(window).on('scroll', showActiveMenuItem());

//--------------------
/*
  let sectionOffsetTop = [
    $('#home').offset().top, 
    $('#about').offset().top,
    $('#services').offset().top,
    $('#gallery').offset().top,
    $('#blog').offset().top,
    $('#contact').offset().top
  ];

  let sectionMap = {
    "home": sectionOffsetTop[0],
    "about": sectionOffsetTop[1],
    "services": sectionOffsetTop[2],
    "gallery": sectionOffsetTop[3],
    "blog": sectionOffsetTop[4],
    "contact": sectionOffsetTop[5],
  };

  let windowScrollPosition;

  $(window).on('scroll', () => {
    $('.menu__link--active').removeClass('menu__link--active');
    
    windowScrollPosition = $(window).scrollTop();
    let m = 0;
    
    $.each(sectionMap, function(key, value) {
      if (windowScrollPosition > value) {
        m = value;
      }
    })

    $.each(sectionMap, function(key, value) {
      if(value == m) {
        $('[href ="#' + key+'"]').addClass('menu__link--active');
      }
    })
  });
*/
  
    // Функция для подсветки активного пункта меню при прокрутке
    function showActiveMenuItem(){
      let scrollTop = $(window).scrollTop();
      
      $('.menu__link').each(function(){
        let link = $(this).attr("href");
        let target = $(link);

      if ( (target.offset().top <= scrollTop) && (target.offset().top + target.outerHeight() > scrollTop) ) 
        { $('.menu__link').removeClass("menu__link--active");
          $(this).addClass("menu__link--active");
        } else {
          $(this).removeClass("menu__link--active");
        }
      });
    }      

    // Показывает или скрывает меню в мобильной версии
    function showMobileMenu(){
      let menu = $('.js-menu');
      let menuBtn = $('.js-btn-toggle-menu');
      let menuLink = $('.menu__link');
      let el = $('.js-btn-toggle-menu__item');

      menuBtn.on('click', function() {
        menu.toggleClass('menu--show');
      });

      menuLink.on('click', function() {
        menu.removeClass('menu--show');
      });

      $(document).click(function (e) {
        if ( !menuBtn.is(e.target)  && !el.is(e.target)  && !menu.is(e.target) && menu.hasClass('menu--show') ) {
          menu.removeClass('menu--show');
        };
      });

      $(window).resize(function() {
        if ( $(window).width() > 767 ) {
          $('.js-menu').removeClass('menu--show');
        }
      });
    }

    // Фиксирует верхнее меню
    function madeFixedMenu() {
      let nav = $('.js-nav');
      let navTop;
      getTopNav();

      function getTopNav() {
        ($(window).width() < 768)
        ? navTop = 15
        : navTop = 45;
      }

      $(window).on('resize', function(){
        getTopNav()
      });

      $(window).scroll(function () {
        ($(this).scrollTop() > navTop)
          ? nav.addClass('nav--fixed')
          : nav.removeClass('nav--fixed');
      });
    }

    //Плавный скролл
    function createSmoothScroll() {
      $(".menu__link").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);

        $(this).closest('.menu').find('.menu__link--active').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
        return false;
      });
    }   
  });
})();