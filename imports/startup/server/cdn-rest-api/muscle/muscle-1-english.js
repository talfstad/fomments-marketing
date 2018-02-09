export default ({ userId }) => {
  const state = {
    sectionInfo: {
      id: `${userId}-muscle-1-english`,
      translateText: 'Translated from',
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 5,
      defaultRepliesToLoadAtOnce: 10,
      generalProductName: 'this',
    },
    user: {
      id: 134,
      name: 'Customer Comment',
      url: '',
      image: '/images/noprofilepic.jpg',
      affiliation: {
        name: '',
        url: '',
      },
    },
    sortBy: {
      top: true,
      newest: false,
      oldest: false,
    },
    list: {
      musc3enspo002a: {
        id: 'musc3enspo002a',
        content: 'Pumpmania. You want pumps? You want extra endurance? You want extra strength? You got it.',
        user: {
          id: 31,
          name: 'Steve Wilburn',
          url: 'https://www.facebook.com/steve.wilburn.7547',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/18222154_423982387971204_6847227343208469749_n.jpg?oh=2078362788374e682a44b0c0412f00e2&oe=5A25ED7B',
          affiliation: {
            name: 'San Marcos, Texas',
            url: 'https://www.facebook.com/places/Things-to-do-in-San-Marcos-Texas/108013242560899/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 1,
        relativeDate: [0, 5, 10],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3enspo005a: {
        id: 'musc3enspo005a',
        content: "Okay, let me start by saying that previous pre workouts left me saying that I should stop taking them as they didn't work. THIS product was a complete 180*. Not only did I notice that my workouts allowed me to lift much heavier but visually left my body looking better. Thanks for another great product!",
        user: {
          id: 32,
          name: 'Erwin Aguirre',
          url: 'https://www.facebook.com/erwin.aguirre.543',
          image: '/images/profilepics/erwin_aguirre.jpg',
          affiliation: {
            name: 'Danville, Virginia',
            url: 'https://www.facebook.com/places/Things-to-do-in-Danville-Virginia/111958528817427/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 2,
        relativeDate: [1, 2, 42],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3enspo007b: {
        id: 'musc3enspo007b',
        content: "I'm glad they brought it back.... Nothing compares to PRODUCT_NAME.....",
        user: {
          id: 33,
          name: 'Ryan Shaw',
          url: 'https://www.facebook.com/profile.php?id=100011024079581',
          image: '/images/profilepics/ryan_shaw.jpg',
          affiliation: {
            name: '',
            url: '',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 8,
        relativeDate: [5, 4, 29],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3enspo007br1: {
            id: 'musc3enspo007br1',
            parentId: 'musc3enspo007b',
            content: "Bro same. I was mad bummed when they took this away the first time. I hope they don't",
            user: {
              id: 34,
              name: 'Andrew Metz',
              url: 'https://www.facebook.com/profile.php?id=100010922196040',
              image: '/images/profilepics/andrew_metz.jpg',
              affiliation: {
                name: 'San Diego State University',
                url: 'https://www.facebook.com/SanDiegoState/?pnref=lhc&rf=105454902822165',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 3,
            relativeDate: [3, 4, 12],
            report: false,
            spam: false,
            edited: false,
          },
          musc3enspo007br2: {
            id: 'musc3enspo007br2',
            parentId: 'musc3enspo007b',
            content: 'do they normally have this in stock?',
            user: {
              id: 35,
              name: 'Arthur Sanchez',
              url: 'https://www.facebook.com/profile.php?id=100011021021734',
              image: '/images/profilepics/arthur_sanchez.jpg',
              affiliation: {
                name: '',
                url: '',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 0,
            relativeDate: [3, 3, 24],
            report: false,
            spam: false,
            edited: false,
          },
          musc3enspo007br3: {
            id: 'musc3enspo007br3',
            parentId: 'musc3enspo007b',
            content: 'I guess it depends on there stock. I was hesitent to order the first time and missed the boat. wont make that mistake again.',
            user: {
              id: 31,
              name: 'Steve Wilburn',
              url: 'https://www.facebook.com/steve.wilburn.7547',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/18222154_423982387971204_6847227343208469749_n.jpg?oh=2078362788374e682a44b0c0412f00e2&oe=5A25ED7B',
              affiliation: {
                name: 'San Marcos, Texas',
                url: 'https://www.facebook.com/places/Things-to-do-in-San-Marcos-Texas/108013242560899/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 1,
            relativeDate: [0, 6, 18],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      musc3enspo008a: {
        id: 'musc3enspo008a',
        content: 'Great product, great pump. I had to force myself to quit for the day. Ton of endurance, stamina, and no crash! My partner left to go buy some afterwards lol',
        user: {
          id: 36,
          name: 'Thomas Gould',
          url: 'https://www.facebook.com/profile.php?id=100012123661834',
          image: '/images/profilepics/thomas_gould.jpg',
          affiliation: {
            name: 'Los Angeles, California',
            url: 'https://www.facebook.com/places/Things-to-do-in-Los-Angeles-California/110970792260960/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 7,
        relativeDate: [5, 1, 18],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3enspo011a: {
        id: 'musc3enspo011a',
        content: "I'm 47 and I've been working out and staying fit since I was in my teens. I am always looking for cost effective suppliments that help me reach my goals. I found long ago that MUSCLE boosters are one of the single most important suppliments that I could take. I was puzzled that the prices became outrageous in my local vitamin store. I can tell you that PRODUCT_NAME works great and the price point is right where I want it to be. At 47 I ride as hard or harder than people in my spin class in their 20s and 30s. Don't believe me? Try something new this week. Get off the couch and try this booster for two months in conjunction with an exercise program of at least two of three sessions per week. You will see results and your muscle stamina will last longer. Good luck and God Bless. John 3:16",
        user: {
          id: 37,
          name: 'William Smith',
          url: 'https://www.facebook.com/profile.php?id=100013487350302',
          image: '/images/profilepics/william_smith.jpg',
          affiliation: {
            name: 'Oceanside, California',
            url: 'https://www.facebook.com/places/Things-to-do-in-Oceanside-California/108109819210122/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 7,
        relativeDate: [7, 5, 18],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3ensnu002b: {
        id: 'musc3ensnu002b',
        content: 'Is it worth the price??? It depends if you want to get pumped...  In my use of this i highly recommended you drink water before.. In your workout and afterwards..... If you never took this then i would take full dose with your pre-workout 30mints before your workout.. When you start your workout if you dont fill nothing dont worry wight an hour and then if dont fill it then next time you workout take full dose hour before NOW I MUST WARN YOU DO NO CARDIO OF ANY KIND when i use the full dose and just walk for 30 mints on the treadmill i felt light headed and my hart flutter...so becareful now the second time in full dose with no cardio i felt fine no issue with hart or light headed.. Just insane pumps and i saw my veins swell up for the first time . I have use many other pump products our there but this one is a 9.0 on a scale of 1 to 10 the price is what making a 9 good product but be careful if you are new to it',
        user: {
          id: 38,
          name: 'Anthony Kerr',
          url: 'https://www.facebook.com/profile.php?id=100010932758383',
          image: '/images/profilepics/anthony_kerr.jpg',
          affiliation: {
            name: 'Miami, Florida',
            url: 'https://www.facebook.com/places/Things-to-do-in-Miami-Florida/110148382341970/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 18,
        relativeDate: [14, 8, 16],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3ensnu002br1: {
            id: 'musc3ensnu002br1',
            parentId: 'musc3ensnu002b',
            content: "Are you sure you took the right dose? I've used this before a cardio workout and I've been fine.",
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: '/images/profilepics/donald_bourn.jpg',
              affiliation: {
                name: 'Tyler, Texas',
                url: 'https://www.facebook.com/places/Things-to-do-in-Tyler-Texas/112917412056610/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 7,
            relativeDate: [14, 4, 16],
            report: false,
            spam: false,
            edited: false,
          },
          musc3ensnu002br2: {
            id: 'musc3ensnu002br2',
            parentId: 'musc3ensnu002b',
            content: 'It depends on the person. me and my buddy both take this and I can do cardio on it but he cant. just try it out see for urself',
            user: {
              id: 40,
              name: 'Greg Mathis',
              url: 'https://www.facebook.com/profile.php?id=100011254382732',
              image: '/images/profilepics/greg_mathis.jpg',
              affiliation: {
                name: 'San Diego, California',
                url: 'https://www.facebook.com/places/Things-to-do-in-San-Diego-California/110714572282163/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 0,
            relativeDate: [7, 9, 12],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      musc3ensnu003a: {
        id: 'musc3ensnu003a',
        content: 'I have been using PRODUCT_NAME for a little over two weeks now and am so far happy with the product. Unlike pre-workout supplements that contain crazy stimulants, this does not give you any kind of jitters or energy from caffeine. But it does give you a noticeable increase in strength while working out. I began to feel the effects the second week of using the product. My bench, dead lift, and squats have all increased. I also feel like I have a bit more energy while lifting weights. The veins in my arms seem more pronounced while lifting and the "pump" is also increased. The capsules are very easy to take and have no after taste. I wish there was a dosage chart on the bottle to show if it is safer to take more. Overall, I am very happy with the product and would recommend it.',
        user: {
          id: 39,
          name: 'Donald Bourn',
          url: 'https://www.facebook.com/donald.bourn.1',
          image: '/images/profilepics/donald_bourn.jpg',
          affiliation: {
            name: 'Tyler, Texas',
            url: 'https://www.facebook.com/places/Things-to-do-in-Tyler-Texas/112917412056610/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 184,
        relativeDate: [21, 4, 8],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3ensnu003ar1: {
            id: 'musc3ensnu003ar1',
            parentId: 'musc3ensnu003a',
            content: "UPDATE: I just finished my first bottle and promptly ordered my second. I feel like I've gotten stronger in the four weeks I have taken it and my energy in the gym is better as well. I'm very happy with this product and would recommend to anyone looking to lose weight, and gain some strength and size.",
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: '/images/profilepics/donald_bourn.jpg',
              affiliation: {
                name: 'Tyler, Texas',
                url: 'https://www.facebook.com/places/Things-to-do-in-Tyler-Texas/112917412056610/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 21,
            relativeDate: [14, 1, 6],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      musc3ensqu001a: {
        id: 'musc3ensqu001a',
        content: 'Has anyone tried this yet? Is it any good?',
        user: {
          id: 41,
          name: 'Howard Reynolds',
          url: 'https://www.facebook.com/profile.php?id=100012007329355',
          image: '/images/profilepics/howard_reynolds.jpg',
          affiliation: {
            name: 'Ohio Christian University',
            url: 'https://www.facebook.com/OhioChristian/?pnref=lhc',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 24,
        relativeDate: [21, 6, 10],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3ensqu001ar1: {
            id: 'musc3ensqu001ar1',
            parentId: 'musc3ensqu001a',
            content: "Absolutely love PRODUCT_NAME. I usually keep away from pills but these are great. I love the sensory complex. Makes me ready to bust out some reps! Must try for everyone who just can't seem to stray away from powder products.",
            user: {
              id: 42,
              name: 'Kyle Stokes',
              url: 'https://www.facebook.com/profile.php?id=100010847341053',
              image: '/images/profilepics/kyle_stokes.jpg',
              affiliation: {
                name: 'Corona, California',
                url: 'https://www.facebook.com/places/Things-to-do-in-Corona-California/107633995923829/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 2,
            relativeDate: [14, 19, 10],
            report: false,
            spam: false,
            edited: false,
          },
          musc3ensqu001ar2: {
            id: 'musc3ensqu001ar2',
            parentId: 'musc3ensqu001a',
            content: "I'M ON REPEAT ORDER!!!! I used to take the original PRODUCT_NAME back in high school!! Oh MAN! I will be a customer as long as this is on the shelve. THANK YOU MUSCLE MAKER! I'm putting in another order now.",
            user: {
              id: 33,
              name: 'Ryan Shaw',
              url: 'https://www.facebook.com/profile.php?id=100011024079581',
              image: '/images/profilepics/ryan_shaw.jpg',
              affiliation: {
                name: '',
                url: '',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 1,
            relativeDate: [14, 1, 10],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
    },
  };

  return state;
};
