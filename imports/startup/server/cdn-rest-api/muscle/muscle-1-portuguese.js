export default ({ userId }) => {
  const state = {
    sectionInfo: {
      id: `${userId}-muscle-1-portuguese`,
      translateText: 'Traduzido do inglês',
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 5,
      defaultRepliesToLoadAtOnce: 10,
      generalProductName: 'isto',
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
      musc3porpo002a: {
        id: 'musc3porpo002a',
        content: 'Pumpmania. Queres pumps? Queres resistência extra? Queres força extra? Aqui tens.',
        user: {
          id: 1005,
          name: 'Daniel Grant',
          url: 'https://www.facebook.com/profile.php?id=100010753321960',
          image: '/images/profilepics/daniel_grant.jpg',
          affiliation: {
            name: 'H&M',
            url: 'https://www.facebook.com/pages/HM/105835336124103?timeline_context_item_type=intro_card_work&timeline_context_item_source=100010753321960&pnref=lhc',
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
      musc3porpo005a: {
        id: 'musc3porpo005a',
        content: 'Ok, deixem-se começar por dizer que o meus aquecimentos anteriores me deixaram a dizer que eu deveria parar de tomá-los porque funcionavam. ESTE produto foi um completo 180*. Não só percebi que os meus exercícios me permitiram levantar muito mais pesos, mas visualmente deixou o meu corpo com melhor aspeto. Obrigado por outro ótimo produto!',
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
      musc3porpo007b: {
        id: 'musc3porpo007b',
        content: 'Fico feliz por os terem trazido de novo.... Nada se compara a PRODUCT_NAME.....',
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
          musc3porpo007br1: {
            id: 'musc3porpo007br1',
            parentId: 'musc3porpo007b',
            content: 'Pode crer meu. Fiquei aborrecido quando tiraram isto da primeira vez. Espero que não',
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
          musc3porpo007br2: {
            id: 'musc3porpo007br2',
            parentId: 'musc3porpo007b',
            content: 'eles têm isto em stock normalmente?',
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
          musc3porpo007br3: {
            id: 'musc3porpo007br3',
            parentId: 'musc3porpo007b',
            content: 'Acho que depende do stock deles. Eu estava hesitante para encomendar da primeira vez e perdi o barco. Não vou cometer o erro outra vez.',
            user: {
              id: 1005,
              name: 'Daniel Grant',
              url: 'https://www.facebook.com/profile.php?id=100010753321960',
              image: '/images/profilepics/daniel_grant.jpg',
              affiliation: {
                name: 'H&M',
                url: 'https://www.facebook.com/pages/HM/105835336124103?timeline_context_item_type=intro_card_work&timeline_context_item_source=100010753321960&pnref=lhc',
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
      musc3porpo008a: {
        id: 'musc3porpo008a',
        content: 'Grande produto, grande bomba. Eu tive que forçar-me a parar por um dia. Tonelada de resistência, vigor e nenhum acidente! O meu parceiro saiu para ir comprar alguns e depois lol',
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
      musc3porpo011a: {
        id: 'musc3porpo011a',
        content: 'Tenho 47 anos e eu tenho trabalhado para ficar em forma desde que eu estava na minha adolescência. Estou sempre à procura de suprimentos de custo eficaz que me ajudam a atingir os meus objetivos. Há muito tempo que achava que os impulsionadores MUSCULARES são um dos suplementos mais importantes que eu poderia tomar. Fiquei irritado quando os preços se tornaram ultrajantes na minha loja de vitaminas local. Posso dizer-lhes que PRODUCT_NAME funciona bem e o preço é exatamente o que eu queria que fosse. Aos 47 anos eu ando tão duro ou mais duro do que as pessoas na minha classe de spin no seus 20s e 30s. Não acreditas em mim? Tenta algo novo esta semana. Sai do sofá e experimenta este reforço durante dois meses em conjunto com um programa de exercícios de pelo menos duas de três sessões por semana. Vais ver os resultados e a tua resistência muscular vai durar mais tempo. Boa sorte e Deus abençoe. João 3:16',
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
      musc3pornu002b: {
        id: 'musc3pornu002b',
        content: 'Vale o preço??? Depende se quiseres ficar musculado ... No meu uso disto recomendo altamente que bebas água antes .. No teu treino e depois ..... Se nunca tomaste isto, então toma um dose completa com os teus 30 mins. de aquecimento antes do treino .. Quando começares o teu treino e não encher nada não te preocupes espera uma hora e depois se não te encher, então na próxima vez que fores treinar toma uma dose completa uma hora antes AGORA EU DEVO AVISAR QUE NÃO DEVES FAZER NENHUM CARDIO de qualquer tipo quando eu usei a dose completa e apenas caminhei 30 minutos na esteira senti tonturas e palpitações...agora cuidado da segunda vez com dose completa sem cardio eu senti-me bem sem nenhum problema com palpitações ou tonturas.. Apenas pumps loucos e vi as minhas veias inchar pela primeira vez. Tenho usado muitos outros produtos de pump, mas este é um 9.0 numa escala de 1 a 10 o preço é o faz um bom produto 9, mas tem cuidado vais começar a usar',
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
          musc3pornu002br1: {
            id: 'musc3pornu002br1',
            parentId: 'musc3pornu002b',
            content: 'Tens certeza de que tomoste a dose certa? Eu usei isto antes de um treino de cardio e estive bem.',
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
          musc3pornu002br2: {
            id: 'musc3pornu002br2',
            parentId: 'musc3pornu002b',
            content: 'Isso depende da pessoa. Tanto eu como o meu amigo tomamos isto e eu posso fazer cardio, mas ele não pode. Experimenta por ti mesmo',
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
      musc3pornu003a: {
        id: 'musc3pornu003a',
        content: 'Eu tenho usado PRODUCT_NAME desde há pouco mais de duas semanas agora e estou tão feliz com o produto. Ao contrário dos suplementos de aquecimento que contêm estimulantes malucos, isto não te dá qualquer tipo de nervosismo ou energia da cafeína. Mas dá-te um aumento notável na força ao treinar. Comecei a sentir os efeitos da segunda semana de uso do produto. Meu banco, o elevador morto, e agachamento aumentaram. Eu também sinto que tenho um pouco mais de energia ao levantar pesos. As veias nos meus braços parecem mais pronunciadas ao levantar e o "pump" também está aumentado. As cápsulas são muito fáceis de tomar e não têm sabor. Gostaria que houvesse uma tabela de dosagem na garrafa para mostrar se é mais seguro tomar mais. No geral, estou muito feliz com o produto e gostaria de recomendar.',
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
          musc3pornu003ar1: {
            id: 'musc3pornu003ar1',
            parentId: 'musc3pornu003a',
            content: 'NOVAS: Acabei de terminar a minha primeira garrafa e encomendei a minha segunda de imediato. Eu sinto que fiquei mais forte nas quatro semanas que eu tomei e a minha energia no ginásio é melhor também. Eu estou muito feliz com este produto e recomendaria a qualquer um que quer perder o peso, e ganhar alguma força e tamanho.',
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
      musc3porqu001a: {
        id: 'musc3porqu001a',
        content: 'Alguém já experimentou isto? É bom?',
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
          musc3porqu001ar1: {
            id: 'musc3porqu001ar1',
            parentId: 'musc3porqu001a',
            content: 'Adoro absolutamente PRODUCT_NAME. Eu costumo manter-me longe de pílulas, mas estas são espetaculares. Adoro o complexo sensorial. Põe-me pronto para rebentar alguns reps! Devia ser experimentado por todos que simplesmente não se querem afastar de produtos em pó.',
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
          musc3porqu001ar2: {
            id: 'musc3porqu001ar2',
            parentId: 'musc3porqu001a',
            content: 'EU ESTOU A REPETIR O PEDIDO!!!! Eu costumava tomar o PRODUCT_NAME original na escola! MEU! Vou ser cliente enquanto isto estiver nas prateleiras. OBRIGADO FAZEDOR DE MÚSCULOS! Estou a fazer outro pedido agora.',
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
