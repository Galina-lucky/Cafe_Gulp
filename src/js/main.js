;(function() {

  "usestrict";

  let navTop;

  $(document).ready( function() {
    let menu = $('.js-menu');
    let menuBtn = $('.js-btn-toggle-menu');
    let menuLink = $('.menu__link');

    getNavTopSize();
    smoothScroll();
    setMenuStiky();
    hideMobileMenu();
    
    menuBtn.on('click', function() {
      menu.toggleClass('menu--show');
    });

    menuLink.on('click', function() {
      menu.removeClass('menu--show');
    });
  });

  $(window).on('scroll', function() {
    showActiveMenuItem();
    setMenuStiky()
  });

  $(window).on('resize', function(){
    getNavTopSize();

    if ( $(window).width() > 767 ) {
      $('.js-menu').removeClass('menu--show');
    }
  });

  function setMenuStiky() {
    let nav = $('.js-nav');
      ($(this).scrollTop() > navTop)
        ? nav.addClass('nav--stiky')
        : nav.removeClass('nav--stiky');
  }


  // Функция для подсветки активного пункта меню при прокрутке
  function showActiveMenuItem() {
    let scrollTop = $(window).scrollTop();
    
    $('.menu__link').each( function() {
      let link = $(this).attr("href");
      let target = $(link);

      if ( (target.offset().top <= scrollTop)
        && (target.offset().top + target.outerHeight() > scrollTop) ) {
        $('.menu__link').removeClass("menu__link--active");
        $(this).addClass("menu__link--active");
      } else {
        $(this).removeClass("menu__link--active");
      }
    });
  }      

  // Cкрываем меню в мобильной версии
  function hideMobileMenu() {
    let menu = $('.js-menu');
    let menuBtn = $('.js-btn-toggle-menu');
    let el = $('.js-btn-toggle-menu__item');    

    $(document).click(function (e) {
      if ( !menuBtn.is(e.target)  && !el.is(e.target)  && !menu.is(e.target) && menu.hasClass('menu--show') ) {
        menu.removeClass('menu--show');
      };
    });
  }

  function getNavTopSize() {
    let nav = $('.js-nav');
    navTop = ($(window).width() < 768) ? 15 : 45;
  }

  //Плавный скролл
  function smoothScroll() {
    $('.menu__link').on('click', function (event) {
      event.preventDefault();
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top+1;
      
      $('html, body').animate({
        scrollTop: destination
      }, 600);
    });
  }
})();