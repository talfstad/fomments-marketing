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

const { env } = Meteor.settings.public;

const logger = createLogger();
const middleware = [sources, subscriptions, thunk, sendFommentsExternalMessage];

if (env === 'development') middleware.push(logger);

const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export default store;
