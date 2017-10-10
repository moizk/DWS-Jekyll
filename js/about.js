$(document).ready(function(){
  // $("#about-page-video").fitVids();
  //   $('#about-page-video').hide();
  //   var avfVideo = $('#about-video-iframe')
  //   var avfPlayer = new Vimeo.Player(avfVideo);
  //   $('#lord-almighty').on("click", function() {
  //     $('#thing-with-videos').hide();
  //     $('#about-page-video').show();
  //     avfPlayer.play();
  //     var avfOnEnded = function() {
  //       $('#about-page-video').hide();
  //       $('#thing-with-videos').show();
  //     };
  //     avfPlayer.on('ended', avfOnEnded);
  //   });

    // sweet water
    $("#sixth-video").fitVids();
    $('.sweet-water-area').hide();
    var swVideo = $('#sweet-water-video')
    var swPlayer = new Vimeo.Player(swVideo);
    $('#lord-farquaad').on("click", function () {
      $('.sweet-water-strip').hide();
      $('.sweet-water-area').show();
      swPlayer.play();
      var swOnEnded = function() {
        $('.sweet-water-area').hide();
        $('.sweet-water-strip').show();
      };
      swPlayer.on('ended', swOnEnded);
    });

  // window resize event
  $(window).resize(function() {
    if (window.innerWidth < 991) {
      $("div.index-strip").css("height", "auto");
      $("div.index-strip").removeClass("no-bg");
      $('div.index-strip > div').removeClass("seriesText");
    } else {
      heightOfVideo();
      $("div.index-strip").addClass("no-bg");
      $('div.index-strip > div').addClass("seriesText");
    }
  });

  if (window.innerWidth < 991) {
    $("div.index-strip").css("height", "auto");
    $("div.index-strip").removeClass("no-bg");
    $('div.index-strip > div').removeClass("seriesText");
  } else {
    heightOfVideo();
    $('div.index-strip > div').addClass("seriesText");
  }

  function heightOfVideo() {
      var videoHeight = $("#sweetWaterVid").height();
      $("div.index-strip").height(videoHeight);
  }
});
