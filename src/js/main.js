;(function(){

  $(document).ready(function() {

    scrollTo()
    menuFixed();
    menuShow();

    // Показывает или скрывает меню в мобильной версии
    function menuShow(){
      let menu = $('.js-menu');
      let menuBtn = $('.js-btn-toggle-menu');
      let menuLink = $('.menu__link');
      let el = $('.js-btn-toggle-menu__item');

      menuBtn.on('click', function() {
        menu.toggleClass('menu--show');
      });

      $(document).click(function (e) {
        if ( !menuBtn.is(e.target)  && !el.is(e.target)  && !menu.is(e.target) && menu.hasClass('menu--show') ) {
          menu.removeClass('menu--show');
        };
      });

      (menuLink.hasClass("menu--show"))
      ? menuLink.attr("tabindex", "1")
      //menuLink.removeAttr("tabindex")
      : menuLink.attr("tabindex", "-1");

      $(window).resize(function() {
        if ( $(window).width() > 767 ) {
          $('.js-menu').removeClass('menu--show');
        }
      });
    }

    // Фиксирует верхнее меню
    function menuFixed() {
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
    function scrollTo() {

      $("a.menu__link").click(function () {
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