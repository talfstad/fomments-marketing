import {
  SECTIONS_SUBSCRIPTION_CHANGED,
} from '/imports/actions/products/sections/load';

import {
  UPDATE_COMMENT_CONTROLS,
} from '/imports/actions/products/sections/update';

const INITIAL_STATE = {
  sectionList: [],
  activeSections: [],
  activeState: {
    language: 'english',
    vertical: 'skin',
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
    let sections = action.payload;
    if (action.type === UPDATE_COMMENT_CONTROLS) {
      sections = state.sectionList;
    }

    const {
      vertical = state.activeState.vertical,
      language = state.activeState.language,
    } = action.payload;
    return sections.filter(section =>
      (section.vertical === vertical && section.language === language));
  };

  const getActiveSection = () => {
    const { activeState } = state;
    const {
      vertical = activeState.vertical,
      language = activeState.language,
    } = action.payload;
    const { section } = action.payload;

    if (section) {
      // If updating section return the new one
      return section;
    }

    // Intent: Don't reset activeState.section on update unless
    // we have changed a select option that impacts it.
    const activeSections = getActiveSections();
    if (activeState.section.vertical !== vertical ||
      activeState.section.language !== language) {
      return activeSections[0];
    }
    // Return the new version of the current section
    return activeSections.find(activeSection => activeSection._id === activeState.section._id);
  };

  switch (action.type) {
    case SECTIONS_SUBSCRIPTION_CHANGED: {
      return {
        ...state,
        sectionList: [...action.payload],
        activeState: {
          ...state.activeState,
          section: getActiveSection(),
        },
        activeSections: getActiveSections(),
      };
    }
    case UPDATE_COMMENT_CONTROLS: {
      // TODO: if payload has language or vertical recalc activeSections and set activeState section
      // sort them
      return {
        ...state,
        activeState: {
          ...state.activeState,
          ...action.payload,
          section: getActiveSection(),
        },
        activeSections: getActiveSections(),
      };
    }
    default:
      return state;
  }
};
