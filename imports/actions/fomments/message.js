export const LOAD_FOMMENT_SECTION = 'loadFommentSection';
export const SET_FOMMENT_SECTION_PRODUCT_NAME = 'setFommentSectionProductName';

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
