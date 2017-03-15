import { UPDATE_COMMENT_CONTROLS } from '../actions/types';

const INITIAL_STATE = {
  verticals: {
    diet: {
      name: 'Diet',
      sections: {
        1: {
          languages: {
            english: 'diet-1-english',
            chinese: 'diet-1-chinese',
            french: 'diet-1-french',
            german: 'diet-1-german',
            portuguese: 'diet-1-portuguese',
            spanish: 'diet-1-spanish',
          },
        },
      },
    },
    muscle: {
      name: 'Muscle',
      sections: {
        1: {
          languages: {
            english: 'muscle-1-english',
            chinese: 'muscle-1-chinese',
            french: 'muscle-1-french',
            german: 'muscle-1-german',
            portuguese: 'muscle-1-portuguese',
            spanish: 'muscle-1-spanish',
          },
        },
        2: {
          languages: {
            english: 'muscle-2-english',
          },
        },
      },
    },
    giveaway: {
      name: 'Giveaway',
      sections: {
        1: {
          languages: {
            english: 'giveaway-1-english',
            chinese: 'giveaway-1-chinese',
            french: 'giveaway-1-french',
            german: 'giveaway-1-german',
            portuguese: 'giveaway-1-portuguese',
            spanish: 'giveaway-1-spanish',
          },
        },
      },
    },
    erectileDisfunction: {
      name: 'Erectile Disfunction',
      sections: {
        1: {
          languages: {
            english: 'erectile-disfunction-1-english',
            chinese: 'erectile-disfunction-1-chinese',
            french: 'erectile-disfunction-1-french',
            german: 'erectile-disfunction-1-german',
            portuguese: 'erectile-disfunction-1-portuguese',
            spanish: 'erectile-disfunction-1-spanish',
          },
        },
      },
    },
    skin: {
      name: 'Skin',
      sections: {
        1: {
          languages: {
            english: 'skin-1-english',
            chinese: 'skin-1-chinese',
            french: 'skin-1-french',
            german: 'skin-1-german',
            portuguese: 'skin-1-portuguese',
            spanish: 'skin-1-spanish',
          },
        },
      },
    },
    appDownload: {
      name: 'App Download',
      sections: {
        1: {
          languages: {
            english: 'app-download-1-english',
            chinese: 'app-download-1-chinese',
            french: 'app-download-1-french',
            german: 'app-download-1-german',
            portuguese: 'app-download-1-portuguese',
            spanish: 'app-download-1-spanish',
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
