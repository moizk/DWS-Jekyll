$(function() {
    var countdown = new Countdown({
        selector: '#timer',
        msgBefore: "The Final Countdown!",
        msgAfter: "150 Years!",
        msgPattern: "{days} days, {hours} hours, {minutes} minutes and {seconds} seconds!",
        dateStart: new Date('2014/09/26 12:00'),
        dateEnd: new Date('Oct 15, 2015 12:00'),
        onStart: function() {
          console.log('Merry Christmas!');
        },
        onEnd: function() {
          console.log('Happy New Year!');
        }
    });
});