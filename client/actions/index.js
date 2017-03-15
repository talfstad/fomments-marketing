import {
  UPDATE_COMMENT_CONTROLS,
  LOAD_FOMMENT_SECTION,
  SET_FOMMENT_SECTION_PRODUCT_NAME,
} from './types';

// updates is an object for activeState override. ex: { language: 'german' }
export const updateCommentControls = updates => ({
  type: UPDATE_COMMENT_CONTROLS,
  payload: updates,
});

export const loadFommentSection = (sectionId, productName) => ({
  type: LOAD_FOMMENT_SECTION,
  externalMessageToFomments: {
    type: LOAD_FOMMENT_SECTION,
    sectionId,
    productName,
  },
});

export const changeFommentSectionProductName = productName => ({
  type: SET_FOMMENT_SECTION_PRODUCT_NAME,
  externalMessageToFomments: {
    type: SET_FOMMENT_SECTION_PRODUCT_NAME,
    productName,
  },
});
