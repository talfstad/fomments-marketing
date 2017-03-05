// Rest API serves states to fomments libraries via AJAX

// Enable cross origin requests for all endpoints
JsonRoutes.setResponseHeaders({
  'Cache-Control': 'no-store',
  Pragma: 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
});

JsonRoutes.add('get', '/sections/:sectionId', (req, res) => {
  const sectionId = req.params.sectionId;

  const state = {
    sectionInfo: {
      id: sectionId,
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 3,
      defaultRepliesToLoadAtOnce: 10,
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
      skin3enspo007a: {
        id: 'skin3enspo007a',
        content: "I've looked high and low for a facial product my sensitive skin could tolerate, and PRODUCT_NAME us it! I live in a very dry climate and this night cream provides excellent moisturizing while working on improving skin tone and fighting fine lines. This product is now part of my daily regimen.",
        user: {
          id: 8987,
          name: 'Amy Rundt',
          url: 'https://www.facebook.com/profile.php?id=100011832856163',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13083214_115980738806354_4982907304538696246_n.jpg?oh=6f71a8bb7e1b5d6eb5b163c0919828c3&oe=59254BE1',
          affiliation: {
            name: 'UC Berkeley',
            url: 'https://www.facebook.com/UCBerkeley/?pnref=lhc',
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
        likes: 6,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      skin3enspo008a: {
        id: 'skin3enspo008a',
        content: "I asked for PRODUCT_NAME as a gift, as it was not something I would have considered purchasing on my own due to price. After using this product only one time, I saw a noticeable difference in my skin. My skin felt hydrated, nourished and seemed to have a new radiance. I'm in my mid-thirties and have a few fine lines around my mouth and on my forehead due to dry skin. The appearance of these lines seemed to improve overnight with one use. I absolutely hate most moisturizers because they never seem to soak into my skin. As stated in previous reviews, this product soaks into the skin almost immediately. This is the reason I wanted to give it a try. I will be purchasing this product once I'm out and have no problem paying $$$ for it. Well worth the price!",
        user: {
          id: 8987,
          name: 'Sheila Halloway',
          url: 'https://www.facebook.com/profile.php?id=100011886491967',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13077055_108820012857548_122161349102974062_n.jpg?oh=060e28fb7fecb50de6f288db3b178ecd&oe=5969CFDF',
          affiliation: {
            name: 'UCLA',
            url: 'https://www.facebook.com/uclabruins/?pnref=lhc',
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
        likes: 21,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      skin3enspo001a: {
        id: 'skin3enspo001a',
        content: "As I get older, I am dealing with adult acne, signs of aging, and general combination skin issues (real oily over here, flaky over there...you know the drill). So, I decided I'd go hunting for some proven skin care products that could clear up my acne and help with signs of aging (NOTE..for night use only...you need a sunblock during the day when you get sun exposure). After a lot of research, I decided to try this product line. Their products seem to use some pretty rad new technology that enhances the level or effectiveness of their key active ingredient, OTC products (obviously, nothing is going to be as good as Rx...). After a month of pretty much nightly use, I would say I am definitely a fan of this line. I am using the PRODUCT_NAME followed by the night cream version. Like any new skin product, you do need time to adjust. You WILL experience dryness of the skin at first. I recommend (as do most dermatologists) trying this every other night or every two nights for a week or two and then switching to every night once you have developed a tolerance for the active ingredient. If you stop using it (like I did for several days while traveling), you may experience a few dry patches when you start back up again. However, the overall results have been great. The lines on my forehead are minimized, the terrible clogged pore bumps that I developed after an allergic reaction to a soap have finally cleared up, and I would say my acne is reduced (fingers crossed...). I am finding myself wearing WAY less makeup and getting compliments on my skin from total strangers, which is awesome and has never happened before in my whole life. Also, these products smell AH-MAZ-ING. Seriously, I LOVE putting them on at night because the scent is so incredible and totally unlike anything I've ever smelled in a beauty product before. Maybe it's fig and vetiver? I have no idea, but I love it. Overall, I think these products are worth the money, and a little seems to go a long way. ",
        user: {
          id: 8987,
          name: 'Olivia Welder',
          url: 'https://www.facebook.com/profile.php?id=100011769988244',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/l/t1.0-1/p160x160/13095920_145451232523875_2584695763402003509_n.jpg?oh=fd6f882dffe6ed6bfe03dc93e386ba40&oe=596D4CF7',
          affiliation: {
            name: 'Muskego, Wisconsin',
            url: 'https://www.facebook.com/places/Things-to-do-in-Muskego-Wisconsin/109455729080860/',
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
        likes: 3,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      skin3ensnu001a: {
        id: 'skin3ensnu001a',
        content: "This is the first skin product I can handle, my skin is very sensitive. There are days when I wish it moisturized better—my skin can't handle the usual skin care combinations.",
        user: {
          id: 8987,
          name: 'Bobbie Marsh',
          url: 'https://www.facebook.com/profile.php?id=100011953211991',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13082731_106892633052510_4388890863487426587_n.jpg?oh=6a64aeaf9d68a67abcbdb4ff6f6698ff&oe=592906E2',
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
        likes: 0,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      skin3enspo003b: {
        id: 'skin3enspo003b',
        content: "I just recently started noticing deep wrinkles forming on my forehead. So far (39 years), I've done good as far as wrinkles go, but I do have sensitive skin. Don't want to look like a \"old lady\" anytime soon, so I needed to \"amp\" up my night cream, in comes this dream cream. In the few weeks that I have begun using PRODUCT_NAME, the deep wrinkles that were starting to form, seem less apparent. I know that I may not be able to look young forever, but I'm gonna try!!!!!!!",
        user: {
          id: 8987,
          name: 'Paige Payne',
          url: 'https://www.facebook.com/profile.php?id=100011902093978',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13095826_110173682722701_1341484227958984727_n.jpg?oh=c3901255bee899757ab2277cca2c1acd&oe=593B7028',
          affiliation: {
            name: 'Columbus, Ohio',
            url: 'https://www.facebook.com/places/Things-to-do-in-Columbus-Ohio/108450559178997/',
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
        likes: 0,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      skin3ensqu002a: {
        id: 'skin3ensqu002a',
        content: 'Is PRODUCT_NAME greasy at all? I have really sensitive skin... will I break out?',
        user: {
          id: 8987,
          name: 'Dianne Sims',
          url: 'https://www.facebook.com/profile.php?id=100012226446821',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/1936218_109506162800265_8496987438568521002_n.jpg?oh=16d35a1b0696831af43588a91231bbad&oe=5938BA81',
          affiliation: {
            name: 'Birmingham, Alabama',
            url: 'https://www.facebook.com/places/Things-to-do-in-Birmingham-Alabama/109434842408576/',
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
        likes: 39,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          skin3ensqu002ar1: {
            id: 'skin3ensqu002ar1',
            parentId: 'skin3ensqu002a',
            content: 'I have sensitive skin too and have never had a problem.',
            user: {
              id: 10,
              name: 'Carla Ramos',
              url: 'https://www.facebook.com/profile.php?id=100012182859842',
              image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13239072_114916385591123_4171036202608140005_n.jpg?oh=e42df0fb1937bac3f17b9747209fdd0d&oe=59388ED8',
              affiliation: {
                name: 'Ohio Christian University',
                url: 'https://www.facebook.com/OhioChristian/?pnref=lhc',
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
            likes: 47,
            date: 1318981876406,
            report: false,
            spam: false,
            edited: false,
          },
          skin3ensqu002ar2: {
            id: 'skin3ensqu002ar2',
            parentId: 'skin3ensqu002a',
            content: 'Nope! Not greasy for me! And I already have kinda greasy skin to begin with. This seems to help the issue.',
            user: {
              id: 10,
              name: 'Misty Knight',
              url: 'https://www.facebook.com/profile.php?id=100012252965093',
              image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13230086_106621353089630_6955145635332582138_n.jpg?oh=5686e02da3ae60c6656438955be8b7f6&oe=593DB3E9',
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
            date: 1318981876406,
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      skin3ensun001a: {
        id: 'skin3ensun001a',
        content: "Want to look like Trump? Then DON'T use this product LOL",
        user: {
          id: 8987,
          name: 'April Hodges',
          url: 'https://www.facebook.com/profile.php?id=100010807747029',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13103532_222724561431134_3127145287819813412_n.jpg?oh=4df9403a92e38ec6632eb01b64b7ab73&oe=5967483E',
          affiliation: {
            name: 'CSU San Marcos',
            url: 'https://www.facebook.com/csusm/?pnref=lhc',
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
        likes: 0,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      skin3enspo011a: {
        id: 'skin3enspo011a',
        content: "I've become a bit of an addict when it comes to this skin cream. My skin keeps getting better and better to the point that other people are commenting. The problem is, the better my skin gets, the more I want to use! I apply the night cream every night before bed, along with their eye serum and sometimes the face serum. I even use the Night Cream on my neck and décolletage. I love the texture, I love the packaging, I love the scent, but most of all, I love the results.",
        user: {
          id: 8987,
          name: 'Ashley Houston',
          url: 'https://www.facebook.com/profile.php?id=100010731075519',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13010846_224697677897933_3685544167206442586_n.jpg?oh=d4aa067d13ec8d00eaa3e9c170823c25&oe=596FB4A5',
          affiliation: {
            name: 'San Diego Miramar College',
            url: 'https://www.facebook.com/SanDiegoMiramarCollege/?pnref=lhc',
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
        likes: 586,
        date: 1318781776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
    },
  };


  JsonRoutes.sendResult(res, { data: state });
});
