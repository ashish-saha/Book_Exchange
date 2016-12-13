$('#user .card-title').text('John Green');
$('#user .card-text').text('I am an author (Looking for Alaska, The Fault in Our Stars, etc.), a YouTuber (vlogbrothers, crashcourse, etc.), and a person who does not cast movies.');


(function ($) {
  $.fn.readmore = function (settings) {
    var defaults = {
      abridged_height: '3em',
      ellipses: '<div class="readm-continue">&#8230;</div>',
      more_link: '<a class="readm-more">Read&nbsp;More</a>',
      inner_wrapper: '<div class="readm-inner" />',
      inner_clzz: 'readm-inner',
      more_clzz: 'readm-more',
      ellipse_clzz: 'readm-continue'
    };

    var opts = $.extend({}, defaults, settings);

    this.each(function() {
      var $this = $(this);
      $this
        .wrapInner(opts.inner_wrapper)
        .append(opts.ellipses)
        .append(opts.more_link);
      $this.find('.' + opts.inner_clzz)
        .css('overflow', 'hidden')
        .height(opts.abridged_height);
      
      $this.find('.' + opts.more_clzz).click(function() {
        slideDown($this.find('.' + opts.inner_clzz));
        $this.find('.' + opts.ellipse_clzz).hide();
        $this.find('.' + opts.more_clzz).hide();
      });
    });
      
    function slideDown(elem) {
      var old_height = elem.height();
      elem.height('auto');
      var new_height = elem.height();  
      elem.height(old_height);
      elem.animate({'height': new_height});
    }
    return this;
  };
})(jQuery);


$('.media-body p').readmore({abridged_height: '6em'});