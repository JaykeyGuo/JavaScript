$(function () {
  createMarquee({
    duration: 15000,
    padding: 0
  })
})

function createMarquee(settings) {
  var defaults = {
    duration: 20000,
    padding: 10,
    marquee_class: '.marquee',
    container_class: './scroll-container',
    sibling_class: 0,
    hover: false
  }

  var config = $.extend({}, defaults, settings);

  if ($(config.marquee_class).width() == 0) {
  
  }
}