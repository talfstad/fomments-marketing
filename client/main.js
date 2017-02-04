Meteor.startup(() => {

  $(() => {

    $('.tablet-portrait > div > img').animate({
      'top': '-340px'
    }, 2000);


    var clock = $('.counter').FlipClock(5000, {
  		clockFace: 'Counter'
  	});

  });
});
