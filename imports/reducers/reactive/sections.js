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
    appDownload: {
      name: 'App Download',
      availableLanguages: [
        'english',
        'chinese',
        'french',
        'german',
        'portuguese',
        'spanish',
      ],
    },
    diet: {
      name: 'Diet',
      availableLanguages: [
        'english',
        'chinese',
        'french',
        'german',
        'portuguese',
        'spanish',
      ],
    },
    erectileDysfunction: {
      name: 'Erectile Dysfunction',
      availableLanguages: [
        'english',
        'chinese',
        'french',
        'german',
        'portuguese',
        'spanish',
      ],
    },
    giveaway: {
      name: 'Giveaway',
      availableLanguages: [
        'english',
        'chinese',
        'french',
        'german',
        'portuguese',
        'spanish',
      ],
    },
    muscle: {
      name: 'Muscle',
      availableLanguages: [
        'english',
        'chinese',
        'french',
        'german',
        'portuguese',
        'spanish',
      ],
    },
    skin: {
      name: 'Skin',
      availableLanguages: [
        'english',
        'chinese',
        'french',
        'german',
        'portuguese',
        'spanish',
      ],
    },
    cbd: {
      name: 'CBD Oil',
      availableLanguages: [
        'english',
      ],
    },
    casino: {
      name: 'Casino',
      availableLanguages: [
        'english',
      ],
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
};

export default (state = INITIAL_STATE, action) => {
  // Intent: integrate puchase and section to give the composed object outputs
  const getSectionListWithPurchasedSectionIdsFromPayload = () =>
    action.payload.map((section) => {
      if (section.purchase) {
        return {
          ...section,
          sectionId: section.purchase.dataSectionId,
        };
      }
      return section;
    });

  const getActiveSections = () => {
    let sections = state.sectionList;
    if (action.type === SECTIONS_SUBSCRIPTION_CHANGED) {
      sections = getSectionListWithPurchasedSectionIdsFromPayload();
    }

    const { activeState } = state;
    const {
      vertical = activeState.vertical,
      language = activeState.language,
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

    const activeSections = getActiveSections();
    const updatedActiveSection = activeSections.find(
      activeSection => activeSection._id === activeState.section._id);

    // Intent: Don't reset activeState.section on update unless
    // we have changed a select option that impacts it or it has been deleted.
    if (activeState.section.vertical !== vertical ||
      activeState.section.language !== language ||
      !updatedActiveSection) {
      return activeSections[0];
    }
    // Return the new version of the current section
    return updatedActiveSection;
  };

  switch (action.type) {
    case SECTIONS_SUBSCRIPTION_CHANGED: {
      return {
        ...state,
        sectionList: [...getSectionListWithPurchasedSectionIdsFromPayload()],
        activeState: {
          ...state.activeState,
          section: getActiveSection(),
        },
        activeSections: getActiveSections(),
      };
    }
    case UPDATE_COMMENT_CONTROLS: {
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
