import { Tracker } from 'meteor/tracker';
import { applyMiddleware, createStore, compose } from 'redux';
import createReactiveMiddlewares from 'meteor-redux-middlewares';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '/imports/reducers';

import sendFommentsExternalMessage from '/imports/middleware/send-fomments-external-message';

const {
  sources,
  subscriptions,
} = createReactiveMiddlewares(Tracker);

const logger = createLogger();

const store = createStore(rootReducer, compose(
  applyMiddleware(sources, subscriptions, thunk, logger, sendFommentsExternalMessage),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export default store;
