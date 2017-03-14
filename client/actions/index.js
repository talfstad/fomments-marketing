import {
  UPDATE_COMMENT_CONTROLS,
  LOAD_FOMMENT_SECTION,
} from './types';

// updates is an object for activeState override. ex: { language: 'german' }
export const updateCommentControls = updates => ({
  type: UPDATE_COMMENT_CONTROLS,
  payload: updates,
});

export const loadFommentSection = sectionId => ({
  type: LOAD_FOMMENT_SECTION,
  externalMessageToFomments: {
    type: LOAD_FOMMENT_SECTION,
    sectionId,
  },
});
