export default ({ userId }) => {
  const state = {
    sectionInfo: {
      id: `${userId}-muscle-1-french`,
      translateText: "Traduit de l'anglais",
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 5,
      defaultRepliesToLoadAtOnce: 10,
      generalProductName: '',
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
      musc3frepo002a: {
        id: 'musc3frepo002a',
        content: "Pompemania. Vous voulez pomper de la fonte ? Vous voulez plus d'endurance ? Vous voulez plus de force ? C'est tout bon.",
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
      musc3frepo005a: {
        id: 'musc3frepo005a',
        content: "OK, laissez-moi commencer en disant que les preps précédentes m'ont fait dire que je devrais arrêter d'en prendre car ça ne fonctionnait pas. Ce produit a été un virage à 180*. Non seulement j'ai remarqué que mes séances d'entraînement m'ont permis de soulever beaucoup plus lourd, mais visuellement mon corps est bien mieux. Merci pour un autre grand produit !",
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
      musc3frepo007b: {
        id: 'musc3frepo007b',
        content: "Je suis content qu'ils l'aient remis .... Rien à voir avec PRODUCT_NAME .....",
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
          musc3frepo007br1: {
            id: 'musc3frepo007br1',
            parentId: 'musc3frepo007b',
            content: "Pareil mec. J'étais fou quand ils l'ont retiré la première fois. J'espère qu'ils ne vont pas refaire la même.",
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
          musc3frepo007br2: {
            id: 'musc3frepo007br2',
            parentId: 'musc3frepo007b',
            content: 'Ils ont du stock ?',
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
          musc3frepo007br3: {
            id: 'musc3frepo007br3',
            parentId: 'musc3frepo007b',
            content: "Je suppose que ça dépend. J'ai hésité à commander la première fois et j'ai manqué le coche. Je vais pas faire l'erreur deux fois.",
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
      musc3frepo008a: {
        id: 'musc3frepo008a',
        content: "Super produit, super peps. J'ai dû me forcer à arrêter pour la journée. Tonne d'endurance, d'endurance et pas de crash ! Mon partenaire est parti en acheter après lol",
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
      musc3frepo011a: {
        id: 'musc3frepo011a',
        content: "J'ai 47 ans et je m'exerce pour rester en forme depuis mon adolescence. Je suis toujours à la recherche de suppléments valables qui m'aident à atteindre mes objectifs. J'ai découvert il y a longtemps que les boosters MUSCLE sont l'un des suppléments les plus importants que je pouvais prendre. J'ai été perplexe quand les prix sont devenus scandaleux dans mon magasin local. Je peux vous dire que PRODUCT_NAME marche très bien et le prix me convient pile-poil. À 47 ans je pompe aussi dur ou plus dur que les types de ma salle de 20 ou 30 ans. Vous ne me croyez pas ? Essayez quelque chose de nouveau cette semaine. Levez-vous du canapé et essayez ce booster pendant deux mois en conjonction avec un programme d'exercice d'au moins deux à trois séances par semaine. Vous verrez les résultats et votre endurance musculaire va augmenter. Bonne chance et que Dieu vous bénisse. Jean 3:16",
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
      musc3frenu002b: {
        id: 'musc3frenu002b',
        content: "Est ce que ça vaut le prix??? Ça dépend si vous être boosté ... D'après mon experience je recommandé fortement de boire de l'eau avant .. Pendant la séance d'entraînement et après ..... Si vous n'avez jamais pris ça alors je prendrais la dose complète avec vos 30 mins d'échauffement Avant votre séance d'entraînement .. Lorsque vous démarrez votre séance d'entraînement si vous ne ressentez rien ne vous inquiétez pas pendant une heure et puis toujours rien alors la prochaine séance d'entraînement prendre pleine dose 1 heure avant MAINTENANT JE DOIS PREVENIR VOUS NE FAITES PAS DE CARDIO DE TOUT quand j'ai utilisé La dose complète et juste marché pendant 30 minutes sur le tapis roulant j'ai senti la tête tourner et couer palpiter ... donc gaffe maintenant la deuxième fois à pleine dose sans cardio, je me sentais bien aucun problème avec le couer ou la tête légère dirigée .. Juste une énergie de ouf Et j'ai vu mes veines gonfler pour la première fois. J'ai utiliser beaucoup d'autres mais celui-ci c'est un 9 sur une échelle de 1 à 10 le prix est ce qui fait que je donne un 9 bon produit mais soyez prudent si c'est la première fois pour vous",
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
          musc3frenu002br1: {
            id: 'musc3frenu002br1',
            parentId: 'musc3frenu002b',
            content: "T'es sûr de prendre la bonne dose ? J'ai l'ai utilisé avant une séance d'entraînement cardio et j'ai été très bien.",
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
          musc3frenu002br2: {
            id: 'musc3frenu002br2',
            parentId: 'musc3frenu002b',
            content: "Ça dépend de la personne. Moi et mon pote on en prend tous les deux et je peux faire cardio avec mais pas lui. Il suffit de l'essayer et de voir vous-même",
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
      musc3frenu003a: {
        id: 'musc3frenu003a',
        content: "J'utilise PRODUCT_NAME depuis maintenant un peu plus de deux semaines et jusque là je suis content du produit. Contrairement aux suppléments d'échauffement qui contiennent des stimulants fous, il ne vous rend pas nerveux comme de la caféine. Mais il apporte une augmentation notable de la force en travaillant. J'ai commencé à sentir les effets à la deuxième semaine d'utilisation du produit. Mes presses et mes squats ont tous augmenté. J'ai aussi l'impression d'avoir un peu plus d'énergie en soulevant des poids. Les veines dans mes bras semblent plus prononcées tout en soulevant et la \"pompe\" est aussi augmentée. Les gélules sont très faciles à prendre et n'ont pas d'arrière goût. J'aimerai qu'il y ait un tableau de dosage sur la bouteille pour montrer s'il est sûr d'en prendre plus. Dans l'ensemble, je suis très content avec le produit et je le recommande.",
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
          musc3frenu003ar1: {
            id: 'musc3frenu003ar1',
            parentId: 'musc3frenu003a',
            content: "MISE À JOUR : je viens juste de terminer ma première bouteille et j'ai rapidement commandé ma seconde. J'ai l'impression que je suis devenu plus fort pendant les quatre semaines ou je l'ai pris et mon énergie dans la salle de gym est meilleure comme ça. Je suis très content avec ce produit et je recommanderais à n'importe qui cherchant à perdre du poids, et gagner une certaine force et du volume.",
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
      musc3frequ001a: {
        id: 'musc3frequ001a',
        content: "Quelqu'un a déjà essayé ? C'est bon ?",
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
          musc3frequ001ar1: {
            id: 'musc3frequ001ar1',
            parentId: 'musc3frequ001a',
            content: "J'adore PRODUCT_NAME. Habituellement je touche pas aux pilules mais celles-ci sont top. J'aime le feeling. Me rend prêt à enchaîner les répétitions ! À essayer pour tout ceux qui ne peuvent pas se passer des produits en poudre.",
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
          musc3frequ001ar2: {
            id: 'musc3frequ001ar2',
            parentId: 'musc3frequ001a',
            content: "J'arrête pas d'en commander !!!! J'avais l'habitude de prendre le produit original PRODUCT_NAME à la fac ! Oh, MAN ! Je serai client aussi longtemps que c'est disponible. MERCI BOOSTER DE MUSCLES ! J'en commande encore à l'instant.",
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
