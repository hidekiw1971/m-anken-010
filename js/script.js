jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".drawer-menu__inner").click(function () {
    $(".drawer-menu__inner").toggleClass("open");
    $(".header__nav").toggleClass("open");
    $(".header__inner").toggleClass("open");
    $(".header__li").toggleClass("open");
    // $("html").toggleClass("is-fixed");
  });
});
