// Below data will hold all of the friends.
// ===============================================================================
//this is the only friends that is persistent data
var friendsArray = [
    {
      friendName: "Rico",
      friendImg: "https://media.giphy.com/media/3og0ItJYGVoVNEeDlu/giphy.gif",
      scores: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
      ]
    },
    {
      friendName: "Kenny",
      friendImg: "https://cdn.fstoppers.com/wp-content/uploads/2013/06/1.jpg",
      scores: [
          3,
          1,
          5,
          1,
          2,
          5,
          4,
          1,
          3,
          1
      ]
    },
    {
        friendName: "Harris",
      friendImg: "https://www.steadfastliving.com/wp-content/uploads/sites/488/2016/06/glamour-shots.jpg",
      scores: [
          5,
          5,
          5,
          5,
          4,
          4,
          4,
          4,
          1,
          1
      ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;