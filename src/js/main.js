;(function(){

  $(document).ready(function() {
    let menu = $('.js-menu');
    let menuBtn = $('.js-btn-toggle-menu');
    let el = $('.js-btn-toggle-menu__item');

    menuBtn.on('click', function() {
      menu.toggleClass('menu--show');
      console.log('Сработал клик по гамбургеру');
    });

    $(document).click(function (e) {
      if ( !menuBtn.is(e.target)  && !el.is(e.target)  && !menu.is(e.target) && menu.hasClass('menu--show') ) {
        menu.removeClass('menu--show');
      };
    });
  });

  $(window).resize(function() {
      if ( $(window).width() > 767 ) {
        $('.js-menu').removeClass('menu--show');
      }
    });
})();