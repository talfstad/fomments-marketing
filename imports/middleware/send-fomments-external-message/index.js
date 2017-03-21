import { sendActionToFomments } from './send-action-to-fomments';

export default () => next => (action) => {
  const { externalMessageToFomments } = action;

  // If no external message attr do nothing
  if (!externalMessageToFomments) return next(action);

  // We don't need to hold up the reducer so call next.
  next(action);

  // Send the message
  return sendActionToFomments(externalMessageToFomments);
};
