  console.log('subs');
  Meteor.subscribe('userInfo', function (one, two, three) {
    console.log(this);
    console.log(one)
    console.log(two)
    console.log(three)
  });
