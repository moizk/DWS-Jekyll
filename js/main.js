$(function() {
    var countdown = new Countdown({
        selector: '#timer',
        msgBefore: "The Final Countdown!",
        msgAfter: "Celebrating 150 Years of vibrancy",
        msgPattern: "{days} days, {hours} hours, {minutes} minutes and {seconds} seconds!",
        dateStart: new Date('2014/09/26 12:00'),
        dateEnd: new Date('Oct 15, 2015 12:00'),
        onStart: function() {
          console.log('Celebrating 150 Years!');
        }
    });
});
