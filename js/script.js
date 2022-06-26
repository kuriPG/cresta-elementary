$(function() {
  const windowHeight = $(window).height(); // ウインドウの高さを取得

  $(window).on('scroll', function () {
    // fv後追加
    if ($(this).scrollTop() > windowHeight) {
      $('.js-fix').addClass('after-fv');
    } else {
      $('.js-fix').removeClass('after-fv');
    }
  });

  $('.js-hg').on('click', function () {
    $('.hg-btn').toggleClass('show-hg');
    $('.header__nav').fadeToggle(300);
    $('body').toggleClass('js-noScroll');
  });
  // 幅768px以下の場合
  if($(window).width() < 768) {
    $('.nav-item>a').on('click', function () {
      $('.header__nav--list').fadeOut(300);
      $('.hg-btn').removeClass('show-bg');
      $('body').removeClass('noScroll');
    });
  };

  // fvスライドショー
  $('.fv__slide-list').slick( {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});
