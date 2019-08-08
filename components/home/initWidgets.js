const initWidgets = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  const $ = window.jQuery || window.$;

  $(window).load(function() {
    $(window).trigger('scroll');
    $(window).trigger('resize');

    // Hash menu forwarding
    if (window.location.hash && $(window.location.hash).length) {
      const hash_offset = $(window.location.hash).offset().top;
      $('html, body').animate({
        scrollTop: hash_offset,
      });
    }
  });

  //
  $(window).resize(function() {
    js_height_init();
  });


  function js_height_init() {
    (function($) {
      $('.js-height-full').height($(window).height());
      $('.js-height-parent').each(function() {
        $(this).height(
          $(this)
            .parent()
            .first()
            .height()
        );
      });
    })(jQuery);
  }
};

export default initWidgets;
