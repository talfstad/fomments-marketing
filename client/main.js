Meteor.startup(() => {

  $(() => {

  // feature animation
  setTimeout(() => {
    $('.tablet-portrait > div > img').animate({
      'top': '-400px'
    }, 2500, () => {
      setTimeout(() => {
        $('.tablet-portrait > div > img').animate({
          'top': '0px'
        }, 3000);
      }, 2000);
    });
  }, 500);


    var clock = $('.counter').FlipClock(5000, {
  		clockFace: 'Counter'
  	});

  });
});
