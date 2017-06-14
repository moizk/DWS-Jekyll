$(document).ready(function(){
  var scrollTimer, lastScrollFireTime = 0;
  // Target your .container, .wrapper, .post, etc.
  // ballast point
  $("#first-video").fitVids();
  $('.ballast-point-area').hide();
  var bvideo = $('#ballast-point-video')
  var player = new Vimeo.Player(bvideo);
  $('#lord-jesus').on("click", function() {
    //pauseAllVids();
    $('.face-to-face-strip').hide();
    $('.ballast-point-area').show();
    player.play();
    var onEnded = function() {
      $('.ballast-point-area').hide();
      $('.face-to-face-strip').show();
    };
    player.on('ended', onEnded);
  });

  // chameleon
  $("#second-video").fitVids();
  $('.chameleon-video-area').hide();
  var cvideo = $('#chameleon-video')
  var cplayer = new Vimeo.Player(cvideo);
  $('#lord-moses').on("click", function() {
    //pauseAllVids();
    $('.face-to-face-chameleon-strip').hide();
    $('.chameleon-video-area').show();
    cplayer.play();
    var conEnded = function() {
      $('.chameleon-video-area').hide();
      $('.face-to-face-chameleon-strip').show();
    };
    cplayer.on('ended', conEnded);
  });

  // health-ade
  $("#third-video").fitVids();
  $('.health-ade-video-area').hide();
  var dvideo = $('#health-ade-video')
  var dplayer = new Vimeo.Player(dvideo);
  $('#lord-genghis').on("click", function() {
    //pauseAllVids();
    $('.health-ade-strip').hide();
    $('.health-ade-video-area').show();
    dplayer.play();
    var conEnded = function() {
      $('.health-ade-video-area').hide();
      $('.health-ade-strip').show();
    };
    dplayer.on('ended', conEnded);
  });

  // long trail brewing
  $("#fourth-video").fitVids();
  $('.long-trail-brewing-area').hide();
  var ltbvideo = $('#long-trail-brewing-video')
  var ltbplayer = new Vimeo.Player(ltbvideo);
  $('#lordy-lord').on("click", function () {
    //pauseAllVids();
    $('.long-trail-brewing-strip').hide();
    $('.long-trail-brewing-area').show();
    ltbplayer.play();
    var ltbOnEnded = function() {
      $('.long-trail-brewing-area').hide();
      $('.long-trail-brewing-strip').show();
    };
    ltbplayer.on('ended', ltbOnEnded);
  });

  // califia farms
  $("#fifth-video").fitVids();
  $('.califia-video-area').hide();
  var cfvideo = $('#califia-video')
  var cfplayer = new Vimeo.Player(cfvideo);
  $('#lord-vadar').on("click", function () {
    //pauseAllVids();
    $('.califia-farms-strip').hide();
    $('.califia-video-area').show();
    cfplayer.play();
    var cfOnEnded = function() {
      $('.califia-video-area').hide();
      $('.califia-farms-strip').show();
    };
    cfplayer.on('ended', cfOnEnded);
  });

//processScroll();
var lastScrollTop = 0;
var goToCalled = false;

function scrollEvent() {
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (!goToCalled) {
    	goToCalled = true;
      if (st > lastScrollTop) {
        // downscroll code
        getVisible("down");
      } else {
        // upscroll code
        getVisible("up");
      }
    } else {
      goToCalled = false;
    }
  });
}

function getVisible(direction) {
  var sectionsArr = [$("#ballastStrip"), $("#califiaStrip"), $("#chameleonStrip"), $("#healthAdeStrip"), $("#longTrailStrip")],
    vidArr = [$("#ballastVid"), $('#califiaVid'), $("#chameleonVid"), $("#healthAdeVid"), $("#longTrailVid")],
    scrollTop = $(this).scrollTop(),
    scrollBot = scrollTop + $(this).height(),
    elTop = 0,
    elBottom = 0,
    visibleTop = 0,
    visibleBottom = 0,
    mostInView = 0,
    //idInView = "section1",
    nextId,
    prevId,
    index;
  for (var i = 0, length = sectionsArr.length; i < length; i++) {
    elTop = sectionsArr[i].offset().top;
    elBottom = elTop + sectionsArr[i].outerHeight();
    visibleTop = elTop < scrollTop ? scrollTop : elTop;
    visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
    heightInView = visibleBottom - visibleTop;
    if (heightInView > mostInView) {
      //idInView = sectionsArr[i][0].id;
      index = i;
      nextId = (typeof sectionsArr[i + 1] !== "undefined") ? sectionsArr[i+1][0].id : "";
      prevId = (typeof sectionsArr[i - 1] !== "undefined") ? sectionsArr[i-1][0].id : "";
      mostInView = heightInView;
    }
  }
  //console.log(direction);
  if (direction === "up") {
    if (prevId !== "") {
      playVid(vidArr, vidArr[index - 1]);
      goToByScroll(prevId);
    }
  } else {
    if (nextId !== "") {
      playVid(vidArr, vidArr[index + 1]);
      goToByScroll(nextId);
    }
  }
}

function goToByScroll(id) {
  //goToCalled = true;
  $(window).off("scroll");
  //disable_scroll();
  // Remove "link" from the ID
  id = id.replace("link", "");
  // Scroll
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top - 110
    },
    'slow',
    function() {
      lastScrollTop = $(window).scrollTop();
      setTimeout(function() {
      	scrollEvent();
      },50);
      //enable_scroll();
    });
}

function playVid(arr, vid) {
  vid[0].play();
  for (var i = 0, length = arr.length; i < length; i++) {
    if (arr[i] !== vid) {
      arr[i][0].pause();                 // pause video not in view
    }
  }
}

function pauseAllVids() {
  $("#ballastVid")[0].pause();
  $("#califiaVid")[0].pause();
  $("#chameleonVid")[0].pause();
  $("#healthAdeVid")[0].pause();
  $("#longTrailVid")[0].pause();
}

//scrollEvent();
// vidArr = [$("#ballastVid"), $('#califiaVid'), $("#chameleonVid"), $("#healthAdeVid"), $("#longTrailVid")];
// for (var i = 0; i < vidArr.length; i++) {
//   setTimeout(function () {
//
//   }, 1000);
// }
// window resize event
$(window).resize(function() {
  if ($(window).width() < 991) {
    $("div.index-strip").removeClass("no-bg");
  } else {
    $("div.index-strip").addClass("no-bg");
  }
});

if ($(window).width() < 991) {
  $("div.index-strip").removeClass("no-bg");
} 

$("#ballastVid")[0].onloadedmetadata = function() {
    $("div.face-to-face-strip.index-strip").removeClass("bg-image");
};

$("#califiaVid")[0].onloadedmetadata = function() {
    $("div.califia-farms-strip.index-strip").removeClass("bg-image");
};

$("#chameleonVid")[0].onloadedmetadata = function() {
    $("div.face-to-face-chameleon-strip.index-strip").removeClass("bg-image");
};

$("#healthAdeVid")[0].onloadedmetadata = function() {
    $("div.health-ade-strip.index-strip").removeClass("bg-image");
};

$("#longTrailVid")[0].onloadedmetadata = function() {
    $("div.long-trail-brewing-strip.index-strip").removeClass("bg-image");
};
});