import { UPDATE_COMMENT_CONTROLS } from '/imports/actions/products/sections/update';

const INITIAL_STATE = {
  verticals: {
    diet: {
      name: 'Diet',
      sections: {
        1: {
          languages: {
            english: {
              demoId: 'diet-1-english',
              sectionId: 'diet-1-english',
              role: 'diet1English',
              price: 0,
            },
            chinese: {
              demoId: 'diet-1-chinese',
              sectionId: 'diet-1-chinese',
              role: 'diet1Chinese',
              price: 100,
            },
            french: {
              demoId: 'diet-1-french',
              sectionId: 'diet-1-french',
              role: 'diet1French',
              price: 100,
            },
            german: {
              demoId: 'diet-1-german',
              sectionId: 'diet-1-german',
              role: 'diet1German',
              price: 100,
            },
            portuguese: {
              demoId: 'diet-1-portuguese',
              sectionId: 'diet-1-portuguese',
              role: 'diet1Portuguese',
              price: 100,
            },
            spanish: {
              demoId: 'diet-1-spanish',
              sectionId: 'diet-1-spanish',
              role: 'diet1Spanish',
              price: 100,
            },
          },
        },
      },
    },
    muscle: {
      name: 'Muscle',
      sections: {
        1: {
          languages: {
            english: {
              demoId: 'muscle-1-english',
              sectionId: 'muscle-1-english',
              role: 'muscle1English',
              price: 0,
            },
            chinese: {
              demoId: 'muscle-1-chinese',
              sectionId: 'muscle-1-chinese',
              role: 'muscle1Chinese',
              price: 100,
            },
            french: {
              demoId: 'muscle-1-french',
              sectionId: 'muscle-1-french',
              role: 'muscle1French',
              price: 100,
            },
            german: {
              demoId: 'muscle-1-german',
              sectionId: 'muscle-1-german',
              role: 'muscle1German',
              price: 100,
            },
            portuguese: {
              demoId: 'muscle-1-portuguese',
              sectionId: 'muscle-1-portuguese',
              role: 'muscle1Portuguese',
              price: 100,
            },
            spanish: {
              demoId: 'muscle-1-spanish',
              sectionId: 'muscle-1-spanish',
              role: 'muscle1Spanish',
              price: 100,
            },
          },
        },
      },
    },
    giveaway: {
      name: 'Giveaway',
      sections: {
        1: {
          languages: {
            english: {
              demoId: 'giveaway-1-english',
              sectionId: 'giveaway-1-english',
              role: 'giveaway1English',
              price: 0,
            },
            chinese: {
              demoId: 'giveaway-1-chinese',
              sectionId: 'giveaway-1-chinese',
              role: 'giveaway1Chinese',
              price: 100,
            },
            french: {
              demoId: 'giveaway-1-french',
              sectionId: 'giveaway-1-french',
              role: 'giveaway1French',
              price: 100,
            },
            german: {
              demoId: 'giveaway-1-german',
              sectionId: 'giveaway-1-german',
              role: 'giveaway1German',
              price: 100,
            },
            portuguese: {
              demoId: 'giveaway-1-portuguese',
              sectionId: 'giveaway-1-portuguese',
              role: 'giveaway1Portuguese',
              price: 100,
            },
            spanish: {
              demoId: 'giveaway-1-spanish',
              sectionId: 'giveaway-1-spanish',
              role: 'giveaway1Spanish',
              price: 100,
            },
          },
        },
      },
    },
    erectileDysfunction: {
      name: 'Erectile Dysfunction',
      sections: {
        1: {
          languages: {
            english: {
              demoId: 'erectile-dysfunction-1-english',
              sectionId: 'erectile-dysfunction-1-english',
              role: 'erectileDysfunction1English',
              price: 0,
            },
            chinese: {
              demoId: 'erectile-dysfunction-1-chinese',
              sectionId: 'erectile-dysfunction-1-chinese',
              role: 'erectileDysfunction1Chinese',
              price: 100,
            },
            french: {
              demoId: 'erectile-dysfunction-1-french',
              sectionId: 'erectile-dysfunction-1-french',
              role: 'erectileDysfunction1French',
              price: 100,
            },
            german: {
              demoId: 'erectile-dysfunction-1-german',
              sectionId: 'erectile-dysfunction-1-german',
              role: 'erectileDysfunction1German',
              price: 100,
            },
            portuguese: {
              demoId: 'erectile-dysfunction-1-portuguese',
              sectionId: 'erectile-dysfunction-1-portuguese',
              role: 'erectileDysfunction1Portuguese',
              price: 100,
            },
            spanish: {
              demoId: 'erectile-dysfunction-1-spanish',
              sectionId: 'erectile-dysfunction-1-spanish',
              role: 'erectileDysfunction1Spanish',
              price: 100,
            },
          },
        },
      },
    },
    skin: {
      name: 'Skin',
      sections: {
        1: {
          languages: {
            english: {
              demoId: 'skin-1-english',
              sectionId: 'skin-1-english',
              role: 'skin1English',
              price: 0,
            },
            chinese: {
              demoId: 'skin-1-chinese',
              sectionId: 'skin-1-chinese',
              role: 'skin1Chinese',
              price: 100,
            },
            french: {
              demoId: 'skin-1-french',
              sectionId: 'skin-1-french',
              role: 'skin1French',
              price: 100,
            },
            german: {
              demoId: 'skin-1-german',
              sectionId: 'skin-1-german',
              role: 'skin1German',
              price: 100,
            },
            portuguese: {
              demoId: 'skin-1-portuguese',
              sectionId: 'skin-1-portuguese',
              role: 'skin1Portuguese',
              price: 100,
            },
            spanish: {
              demoId: 'skin-1-spanish',
              sectionId: 'skin-1-spanish',
              role: 'skin1Spanish',
              price: 100,
            },
          },
        },
      },
    },
    appDownload: {
      name: 'App Download',
      sections: {
        1: {
          languages: {
            english: {
              demoId: 'app-download-1-english',
              sectionId: 'app-download-1-english',
              role: 'appDownload1English',
              price: 0,
            },
            chinese: {
              demoId: 'app-download-1-chinese',
              sectionId: 'app-download-1-chinese',
              role: 'appDownload1Chinese',
              price: 100,
            },
            french: {
              demoId: 'app-download-1-french',
              sectionId: 'app-download-1-french',
              role: 'appDownload1French',
              price: 100,
            },
            german: {
              demoId: 'app-download-1-german',
              sectionId: 'app-download-1-german',
              role: 'appDownload1German',
              price: 100,
            },
            portuguese: {
              demoId: 'app-download-1-portuguese',
              sectionId: 'app-download-1-portuguese',
              role: 'appDownload1Portuguese',
              price: 100,
            },
            spanish: {
              demoId: 'app-download-1-spanish',
              sectionId: 'app-download-1-spanish',
              role: 'appDownload1Spanish',
              price: 100,
            },
          },
        },
      },
    },
  },
  languages: {
    english: {
      name: 'English',
      flag: 'flag-icon-us',
    },
    chinese: {
      name: 'Chinese',
      flag: 'flag-icon-china',
    },
    french: {
      name: 'French',
      flag: 'flag-icon-france',
    },
    german: {
      name: 'German',
      flag: 'flag-icon-germany',
    },
    portuguese: {
      name: 'Portuguese',
      flag: 'flag-icon-portuguese',
    },
    spanish: {
      name: 'Spanish',
      flag: 'flag-icon-mexico',
    },
  },
  activeState: {
    vertical: 'muscle',
    language: 'english',
    section: 1,
    productName: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COMMENT_CONTROLS: {
      return {
        ...state,
        activeState: {
          ...state.activeState,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
