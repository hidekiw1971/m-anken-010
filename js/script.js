jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".drawer-menu__inner").click(function () {
    $(".drawer-menu__inner").toggleClass("open");
    // $(".open").toggleClass("open");
    // $("html").toggleClass("is-fixed");
  });
});
