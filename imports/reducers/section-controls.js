import {
  UPDATE_COMMENT_CONTROLS,
} from '/imports/actions/products/sections/update';

import {
  SECTIONS_SUBSCRIPTION_CHANGED,
} from '/imports/actions/products/sections/load';

const INITIAL_STATE = {
  activeSections: [],
  activeState: {
    language: 'english',
    vertical: 'muscle',
    section: {},
    productName: '',
  },
  verticals: {
    appDownload: { name: 'App Download' },
    diet: { name: 'Diet' },
    erectileDysfunction: { name: 'Erectile Dysfunction' },
    giveaway: { name: 'Giveaway' },
    muscle: { name: 'Muscle' },
    skin: { name: 'Skin' },
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
};

export default (state = INITIAL_STATE, action) => {
  const getActiveSections = () => {
    // TODO: based on language & vertical, set active sections using payload
    return state.activeSections;
  };

  switch (action.type) {
    case SECTIONS_SUBSCRIPTION_CHANGED: {
      // TODO: based on language and vertical, set activeSections and set activeState section
      // sort them
      return state;
    }
    case UPDATE_COMMENT_CONTROLS: {
      // TODO: if payload has language or vertical recalc activeSections and set activeState section
      // sort them
      return {
        ...state,
        activeState: {
          ...state.activeState,
          ...action.payload,
        },
        activeSection: getActiveSections(),
      };
    }
    default:
      return state;
  }
};
