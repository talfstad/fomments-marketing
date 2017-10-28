export default ({ userId }) => {
  const state = {
    sectionInfo: {
      id: `${userId}-muscle-1-spanish`,
      translateText: 'Traducido del inglés',
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 5,
      defaultRepliesToLoadAtOnce: 10,
      generalProductName: 'esto',
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
      musc3spapo002a: {
        id: 'musc3spapo002a',
        content: 'Bombamanía ¿Quieres bombas de energía? ¿Quieres más resistencia? ¿Quieres más fuerza? Lo tienes.',
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
      musc3spapo005a: {
        id: 'musc3spapo005a',
        content: 'De acuerdo, permíteme comenzar diciendo que los anteriores pre entrenamientos tuve que dejarlos porque no funcionaban. Este producto era un completo 180*. No solo me di cuenta de que mis entrenamientos me permitían levantar mucho más peso sino que además mi cuerpo lucía mucho mejor. ¡Gracias por otro gran producto!',
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
      musc3spapo007b: {
        id: 'musc3spapo007b',
        content: 'Me alegro de que volvieran a sacarlo... No hay nada que se le compare PRODUCT_NAME.....',
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
          musc3spapo007br1: {
            id: 'musc3spapo007br1',
            parentId: 'musc3spapo007b',
            content: 'Yo igual. Estaba en plan vago hasta que lo retiraron por primera vez. Espero que no vuelvan a hacerlo',
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
          musc3spapo007br2: {
            id: 'musc3spapo007br2',
            parentId: 'musc3spapo007b',
            content: '¿suelen tener esto en stock?',
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
          musc3spapo007br3: {
            id: 'musc3spapo007br3',
            parentId: 'musc3spapo007b',
            content: 'Supongo que depende. Estuve a punto de pedirlo la primera vez y al final perdí la oportunidad. No volveré a cometer ese error.',
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
      musc3spapo008a: {
        id: 'musc3spapo008a',
        content: 'Gran producto, gran bomba. Tuve que obligarme a parar. Porque no paraba de aumentar la resistencia y aumentar la resistencia ¡y no me cansaba! Mi pareja tuvo que ir a comprar algunas después lol',
        user: {
          id: 36,
          name: 'Thomas Gould',
          url: 'https://www.facebook.com/profile.php?id=100012123661834',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13087761_100605053686950_3124049041644943436_n.jpg?oh=3db1896c8093d19ac2eb1affee117a28&oe=5A61D44F',
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
      musc3spapo011a: {
        id: 'musc3spapo011a',
        content: 'Tengo 47 años y he estado haciendo ejercicio y manteniéndome en forma desde mi adolescencia. Siempre estoy buscando suplementos rentables que me ayuden a alcanzar mis metas. Encontré hace mucho tiempo que los reforzadores MUSCULARES son uno de los suplementos más importantes que podía tomar. Me quedé perplejo al ver los exorbitantes precios en la tienda de vitaminas de mi ciudad. Puedo decirte que PRODUCT_NAME funciona genial y el precio es un punto a su favor. A los 47 años ando tan duro o más que gente de 20 y 30. ¿No me crees? Pruebe algo nuevo esta semana. Sal del sofá y prueba este refuerzo durante dos meses junto con un programa de ejercicios de al menos dos de tres sesiones a la semana. Verás los resultados y tu resistencia muscular aumentará. Buena suerte y que Dios te bendiga. John 3:16',
        user: {
          id: 37,
          name: 'William Smith',
          url: 'https://www.facebook.com/profile.php?id=100013487350302',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/15319118_203169946809249_3270410878857022282_n.jpg?oh=f92b3a03ab8f7ea5c202ddb2131e7262&oe=5A65687D',
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
      musc3spanu002b: {
        id: 'musc3spanu002b',
        content: '¿¿¿Merece la pena su precio??? Depende de si quieres conseguir muscularte... Según yo lo uso, altamente recomiendo beber agua antes.. Durante el entrenamiento y después..... Si nunca has tomado esto, entonces recomiendo tomar la dosis completa durante el pre entrenamiento, 30 minutos antes del entrenamiento.. Cuando comiences tu entrenamiento si no llenas nada no te preocupes durante una hora, si después tampoco lo consigues, la próxima vez que entrenes tómate la dosis completa una hora antes del entrenamiento, PERO  DEBO ADVERTIRTE QUE NO HAGAS NINGÚN TIPO DE CARDIO, cuando me tomé la dosis completa, apenas caminé durante 30 minutos en la cinta de correr y aún así mi corazón se aceleró... así que ten cuidado, la segunda vez que me tomé la dosis completa y no hice nada de cardio, me sentí bien sin ningún tipo de problemas... Vi mis venas hincharse por primera vez. He usado muchos otros productos, pero a este le doy un un 9 en una escala del 1 a 10, el precio es lo que le hace merecer un 9, pero ten cuidado si eres nuevo en esto',
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
          musc3spanu002br1: {
            id: 'musc3spanu002br1',
            parentId: 'musc3spanu002b',
            content: '¿Seguro que tomaste la dosis correcta? He usado esto antes de un entrenamiento cardio y he estado bien.',
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/15241989_214513569000578_3420332291771427357_n.jpg?oh=492699ddd6ebb228690495e732372a06&oe=5A6291B7',
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
          musc3spanu002br2: {
            id: 'musc3spanu002br2',
            parentId: 'musc3spanu002b',
            content: 'Depende de la persona. Tanto mi amigo como yo tomamos estos y yo puedo hacer cardio después, pero él no. Solo inténtalo y compruébalo por ti mismo',
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
      musc3spanu003a: {
        id: 'musc3spanu003a',
        content: 'He estado usando PRODUCT_NAME durante un poco más de dos semanas y ahora estoy muy contento con el producto. A diferencia de los suplementos pre-entrenamiento que contienen estimulantes sin sentido, esto no te da ningún tipo de nervios ni la energía de la cafeína. Pero te proporciona un aumento notable en la fuerza mientras entrenas. Comencé a sentir los efectos la segunda semana de uso del producto. Mi banco, levantamiento muerto y sentadillas han aumentado. También siento que tengo un poco más de energía al levantar pesas. Las venas en mis brazos parecen más pronunciadas mientras levanto peso y la "bomba" también se incrementa. Las cápsulas son muy fáciles de tomar y no dejan ningún sabor. Ojalá hubiera una tabla de dosificación en la botella para mostrar si es más seguro tomar más. En general, estoy muy contento con el producto y lo recomendaría.',
        user: {
          id: 39,
          name: 'Donald Bourn',
          url: 'https://www.facebook.com/donald.bourn.1',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/15241989_214513569000578_3420332291771427357_n.jpg?oh=492699ddd6ebb228690495e732372a06&oe=5A6291B7',
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
          musc3spanu003ar1: {
            id: 'musc3spanu003ar1',
            parentId: 'musc3spanu003a',
            content: 'ACTUALIZACIÓN: Acabo de terminar mi primera botella y rápidamente pedí la segunda. Siento que me he hecho más fuerte en las cuatro semanas que lo he estado tomando y mi energía en el gimnasio también ha aumentado. Estoy muy contento con este producto y lo recomendaría a cualquiera que quiera perder peso y ganar algo de fuerza y tamaño.',
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/15241989_214513569000578_3420332291771427357_n.jpg?oh=492699ddd6ebb228690495e732372a06&oe=5A6291B7',
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
      musc3spaqu001a: {
        id: 'musc3spaqu001a',
        content: '¿Alguien ha probado esto ya? ¿Tiene algo de bueno?',
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
          musc3spaqu001ar1: {
            id: 'musc3spaqu001ar1',
            parentId: 'musc3spaqu001a',
            content: 'A mí realmente me encanta PRODUCT_NAME. Por lo general, suelo mantenerme alejado de pastillas, pero estas son geniales. Me encanta el complejo sensorial. ¡Me hace sentirme listo para hacer algunas repeticiones más! Tienen que probarlo todos aquellos que no pueden alejarse de los productos en polvo.',
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
          musc3spaqu001ar2: {
            id: 'musc3spaqu001ar2',
            parentId: 'musc3spaqu001a',
            content: '¡¡¡¡YA VOY POR EL SEGUNDO PEDIDO!!!! ¡¡Solía llevarme el PRODUCT_NAME al instituto!! ¡Madre mía! Seguiré siendo cliente siempre y cuando sigan teniendo esto. ¡GRACIAS AL FABRICANTE DEL MÚSCULO! Estoy haciendo otro pedido ahora mismo.',
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
