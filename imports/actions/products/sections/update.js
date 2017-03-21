export const UPDATE_COMMENT_CONTROLS = 'updateCommentControls';

// updates is an object for activeState override. ex: { language: 'german' }
export const updateCommentControls = updates => ({
  type: UPDATE_COMMENT_CONTROLS,
  payload: updates,
});
