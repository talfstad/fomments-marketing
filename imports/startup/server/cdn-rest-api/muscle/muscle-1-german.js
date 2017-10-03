export default ({ userId }) => {
  const state = {
    sectionInfo: {
      id: `${userId}-muscle-1-german`,
      translateText: 'Übersetzt aus dem Englischen',
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 5,
      defaultRepliesToLoadAtOnce: 10,
      generalProductName: 'das',
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
      musc3gerpo002a: {
        id: 'musc3gerpo002a',
        content: 'Pumpmania. Du willst den Pump-Effekt? Du willst extra Ausdauer? Du willst extra Stärke? Die hast du gefunden.',
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
      musc3gerpo005a: {
        id: 'musc3gerpo005a',
        content: 'Okay, lasst mich zu Anfang sagen, dass ich früher nach Pre-Workouts dachte, dass ich wohl damit aufhören sollte, da sie nicht funktioniert haben. Mit DIESEM Produkt hat sich das komplett gedreht. Ich hab nicht nur bemerkt, dass ich beim Training viel mehr heben konnte, mein Körper sah auch optisch besser aus. Danke für ein weiteres tolles Produkt!',
        user: {
          id: 32,
          name: 'Erwin Aguirre',
          url: 'https://www.facebook.com/erwin.aguirre.543',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/14906818_170857943375856_2215210283168533046_n.jpg?oh=6ada9ee81f627bfc14a5d67318dbb782&oe=5A30E88A',
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
      musc3gerpo007b: {
        id: 'musc3gerpo007b',
        content: 'Ich bin froh, dass sie es zurückgebracht haben.... Nichts ist mit PRODUCT_NAME vergleichbar.....',
        user: {
          id: 33,
          name: 'Ryan Shaw',
          url: 'https://www.facebook.com/profile.php?id=100011024079581',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/13962548_280954205615380_7119314089275863482_n.jpg?oh=ce30b2a76c56260c4378ea1a2cb43cfb&oe=5A204D04',
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
          musc3gerpo007br1: {
            id: 'musc3gerpo007br1',
            parentId: 'musc3gerpo007b',
            content: 'Finde ich auch, Bro. Ich war echt depri, als sie es das Mal rausgenommen haben. Ich hoffe, das machen sie nicht',
            user: {
              id: 34,
              name: 'Andrew Metz',
              url: 'https://www.facebook.com/profile.php?id=100010922196040',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/12376691_108190379555035_6647796803245931892_n.jpg?oh=e1355fc5687e5f8926ea694d60a98497&oe=5A1FAD04',
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
          musc3gerpo007br2: {
            id: 'musc3gerpo007br2',
            parentId: 'musc3gerpo007b',
            content: 'haben sie das normalerweise auf Lager?',
            user: {
              id: 35,
              name: 'Arthur Sanchez',
              url: 'https://www.facebook.com/profile.php?id=100011021021734',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/13775830_266706540373378_701284331387696349_n.jpg?oh=5f87e3b191ee5dbb3021bceb4f980d51&oe=5A379E31',
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
          musc3gerpo007br3: {
            id: 'musc3gerpo007br3',
            parentId: 'musc3gerpo007b',
            content: 'Ich denke mal, das hängt von deren Lagerbestand ab. Ich hab beim ersten Mal mit der Bestellung gezögert und die Gelegenheit verpasst. den Fehler mache ich nicht nochmal.',
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
      musc3gerpo008a: {
        id: 'musc3gerpo008a',
        content: 'Tolles Produkt, toller Pump. Ich musste mich zwingen, für den Rest des Tages aufzuhören. Massenhaft Ausdauer, Kondition und kein Crash! Mein Partner ist es danach kaufen gegangen lol',
        user: {
          id: 36,
          name: 'Thomas Gould',
          url: 'https://www.facebook.com/profile.php?id=100012123661834',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/13087761_100605053686950_3124049041644943436_n.jpg?oh=4363e22cd94faaaa6fe728137ff36999&oe=59EB2D4F',
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
      musc3gerpo011a: {
        id: 'musc3gerpo011a',
        content: 'Ich bin 47 und habe seit meiner Teenager-Zeit trainiert und auf meine Fitness geachtet. Ich bin immer auf der Suche nach kostengünstigen Nahrungsergänzungsmitteln, die mir helfen, meine Ziele zu erreichen. Ich habe schon vor langer Zeit bemerkt, dass MUSKEL-Booster eine der wichtigsten Ergänzungen sind, die ich nehmen kann. Ich war irritiert darüber, wie unverschämt die Preise in meinem örtlichen Vitamin-Shop wurden. Ich kann Ihnen sagen, dass PRODUCT_NAME hervorragend funktioniert und vom Preis her ist es für mich genau richtig. In meinem Spin-Kurs fahre ich mit 47 genauso schnell oder schneller als Leute in den 20ern und 30ern. Sie glauben mir nicht? Dann versuchen Sie diese Woche etwas Neues. Stehen Sie vom Sofa auf und probieren Sie dieses Aufbaumittel zusammen mit einem Trainingsprogramm von mindestens zwei oder drei Einheiten pro Woche für zwei Monate aus. Sie werden Resultate erkennen und Ihre Muskelausdauer wird sich verbessern. Viel Glück und behüt euch Gott. John 3:16',
        user: {
          id: 37,
          name: 'William Smith',
          url: 'https://www.facebook.com/profile.php?id=100013487350302',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15319118_203169946809249_3270410878857022282_n.jpg?oh=97bd38946a52c4be9d9ca14a35cc4ce3&oe=59EEC17D',
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
      musc3gernu002b: {
        id: 'musc3gernu002b',
        content: "Ist es den Preis wert ??? Das hängt davon ab, ob ihr pumpen wollt... Ich empfehle immer, vor der Benutzung Wasser zu trinken.. Während eures Trainings und danach..... Solltet ihr es noch nie genommen haben, dann würde ich die volle Dosis 30 Min. vor eurer Trainingseinheit nehmen.. Wenn ihr mit dem Training anfangt, merkt ihr noch nichts, keine Sorge, wartet eine Stunde und wenn ihr es dann nicht merkt, nehmt das nächste Mal die komplette Dosis ne Stunde vorher. ICH MUSS EUCH WARNEN, MACHT KEINERLEI KARDIO ich war nach der vollen Dosis nur 30 Min. auf dem Laufband laufen und mir war schwindlig und ich hatte Herzflattern ...seid also vorsichtig. Das zweite Mal hatte ich bei der kompletten Dosis ohne Kardio keine Probleme mit Schwindel oder Herzflattern.. Nur Wahnsinns-Pumps und ich hab meine Venen zum ersten Mal anschwellen sehen. Ich hab schon viele der anderen Pump-Produkte da draußen probiert aber das hier ist eine 9,0 auf einer Skala von 1 bis 10. Der Preis macht es zu einer 9 gutes Produkt, aber seid vorsichtig, wenn ihr's noch nicht kennt.",
        user: {
          id: 38,
          name: 'Anthony Kerr',
          url: 'https://www.facebook.com/profile.php?id=100010932758383',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/14063993_298696993838057_1565088349232347568_n.jpg?oh=85f2d541852afe325074a5088b31d57b&oe=5A22D293',
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
          musc3gernu002br1: {
            id: 'musc3gernu002br1',
            parentId: 'musc3gernu002b',
            content: "Bist du sicher, dass du die richtige Dosis genommen hast? Ich hab das mal vor dem Kardiotraining benutzt und mir ging's gut.",
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15241989_214513569000578_3420332291771427357_n.jpg?oh=1a61efc88b36ad8d9ee4d5bf0fa48ee8&oe=59EBEAB7',
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
          musc3gernu002br2: {
            id: 'musc3gernu002br2',
            parentId: 'musc3gernu002b',
            content: 'Das hängt von der Person ab. ich und mein Kumpel nehmen es beide und ich kann damit Kardio machen, er aber nicht. probiers einfach selber aus',
            user: {
              id: 40,
              name: 'Greg Mathis',
              url: 'https://www.facebook.com/profile.php?id=100011254382732',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/13700079_253917538326724_7073315529828015213_n.jpg?oh=2452b4e233a9792657a7a6bf19eb57eb&oe=5A38AED0',
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
      musc3gernu003a: {
        id: 'musc3gernu003a',
        content: 'Ich benutze PRODUCT_NAME seit etwas über zwei Wochen und bin bisher mit dem Produkt zufrieden. Anders als bei Ergänzungmitteln, die voller Aufputschmittel sind, wird man hiervon nicht zittrig oder bekommt Energie vom Koffein. Es verleiht einem allerdings einen merklichen Kraftschub während des Trainings. Ich habe die Effekte in der zweiten Woche gespürt, in der ich das Produkt verwendet habe. Mein Bankdrücken, meine Deadlifts und meine Kniebeugen haben sich alle verbessert. Ich habe auch das Gefühl, beim Gewichtheben mehr Energie zu haben. Die Venen in meinen Armen scheinen stärker hervorgehoben zu sein und der „Pump“ hat sich auch intensiviert.  Die Kapseln sind sehr einfach einzunehmen und haben auch keinen Nachgeschmack. Ich wünschte, es gäbe eine Dosiertabelle auf der Flasche, die zeigt, ob es sicher ist, mehr zu nehmen. Insgesamt bin ich mit dem Produkt sehr zufrieden und kann es weiterempfehlen.',
        user: {
          id: 39,
          name: 'Donald Bourn',
          url: 'https://www.facebook.com/donald.bourn.1',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15241989_214513569000578_3420332291771427357_n.jpg?oh=1a61efc88b36ad8d9ee4d5bf0fa48ee8&oe=59EBEAB7',
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
          musc3gernu003ar1: {
            id: 'musc3gernu003ar1',
            parentId: 'musc3gernu003a',
            content: 'UPDATE: Ich haben meine erste Flasche aufgebraucht und sofort meine zweite bestellt. Ich habe das Gefühl, in den vier Wochen, in denen ich es genommen habe, stärker geworden zu sein und meine Energie im Fitnessstudio hat sich auch verbessert. Ich bin sehr zufrieden mit dem Produkt und kann es jedem empfehlen, der Gewicht verlieren und etwas Stärke und Muskelmasse zulegen möchte.',
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15241989_214513569000578_3420332291771427357_n.jpg?oh=1a61efc88b36ad8d9ee4d5bf0fa48ee8&oe=59EBEAB7',
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
      musc3gerqu001a: {
        id: 'musc3gerqu001a',
        content: 'Hat das schon jemand ausprobiert? Taugt es was?',
        user: {
          id: 41,
          name: 'Howard Reynolds',
          url: 'https://www.facebook.com/profile.php?id=100012007329355',
          image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/13100822_104751579935086_659758065158108282_n.jpg?oh=4d2cb5b8af5a800ea4def9704f03431a&oe=5A1B0E44',
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
          musc3gerqu001ar1: {
            id: 'musc3gerqu001ar1',
            parentId: 'musc3gerqu001a',
            content: 'Absolut begeistert von PRODUCT_NAME. Ich nehme normalerweise keine Pillen, aber die hier sind klasse. Ich liebe den sensorischen Komplex. Damit bin ich bereit für ein paar Wiederholungen! Ein Muss für jeden, der einfach nicht von Pulverprodukten loszukommen scheint.',
            user: {
              id: 42,
              name: 'Kyle Stokes',
              url: 'https://www.facebook.com/profile.php?id=100010847341053',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/12279225_101298560241722_632505774365292155_n.jpg?oh=3023d2b8facd2b660b4c818963a64d0d&oe=5A22D280',
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
          musc3gerqu001ar2: {
            id: 'musc3gerqu001ar2',
            parentId: 'musc3gerqu001a',
            content: 'ICH HAB SCHON NACHBESTELLT!!!! Ich hab damals in der Schule das originale PRODUCT_NAME genommen!! Oh MANN! Solange das in den Regalen steht, bleibe ich Kunde. DANKE, MUSCLE MAKER! Ich bestelle jetzt gleich nochmal.',
            user: {
              id: 33,
              name: 'Ryan Shaw',
              url: 'https://www.facebook.com/profile.php?id=100011024079581',
              image: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/p160x160/13962548_280954205615380_7119314089275863482_n.jpg?oh=ce30b2a76c56260c4378ea1a2cb43cfb&oe=5A204D04',
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
