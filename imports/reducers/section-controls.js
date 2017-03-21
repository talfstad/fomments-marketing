import { UPDATE_COMMENT_CONTROLS } from '/imports/actions/products/sections/update';

const INITIAL_STATE = {
  activeState: {
    vertical: 'muscle',
    language: 'english',
    section: 1,
    productName: '',
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
