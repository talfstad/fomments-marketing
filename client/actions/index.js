import { UPDATE_COMMENT_CONTROLS } from './types';

// updates is an object for activeState override. ex: { language: 'german' }
export const updateCommentControls = updates => ({
  type: UPDATE_COMMENT_CONTROLS,
  payload: updates,
});
