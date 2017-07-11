$(document).ready(function(){
  $("#first-video").fitVids();
  $('.beauty-video-area').hide();
  var bvideo = $('#beauty-video')
  var player = new Vimeo.Player(bvideo);
  $('#lord-jesus').on("click", function() {
    $('.introducing-beauty-strip').hide();
    $('.beauty-video-area').show();
    player.play();
    var onEnded = function() {
      $('.beauty-video-area').hide();
      $('.introducing-beauty-strip').show();
    };
    player.on('ended', onEnded);
  });

  // window resize event
  $(window).resize(function() {
    if ($(window).width() < 991) {
      $("div.index-strip").css("height", "auto");
      $("div.index-strip").removeClass("no-bg");
      $('div.index-strip > div').removeClass("seriesText");
    } else {
      heightOfVideo();
      $("div.index-strip").addClass("no-bg");
      $('div.index-strip > div').addClass("seriesText");
    }
  });

  if ($(window).width() < 991) {
    $("div.index-strip").css("height", "auto");
    $("div.index-strip").removeClass("no-bg");
    $('div.index-strip > div').removeClass("seriesText");
  } else {
    heightOfVideo();
    $('div.index-strip > div').addClass("seriesText");
  }

  function heightOfVideo() {
      var videoHeight = $("#introducingBeautyVid").height();
      $("div.index-strip").height(videoHeight);
  }
});
