export const UPDATE_COMMENT_CONTROLS = 'updateActiveState';

// updates is an object for activeState override. ex: { language: 'german' }
export const updateActiveState = updates => ({
  type: UPDATE_COMMENT_CONTROLS,
  payload: updates,
});
