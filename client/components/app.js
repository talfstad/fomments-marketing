import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import SendFommentsExternalMessage from '../middleware/send-fomments-external-message';
import reducers from '../reducers';

import Header from './header';
import AboveTheFold from './above-the-fold';
import AtTheFold from './at-the-fold';
import ChooseCommentSection from './choose-comment-section';

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  SendFommentsExternalMessage,
)(createStore);

export const store = createStoreWithMiddleware(reducers);

class App extends Component {
  static scrollToCommentSection(e) {
    e.preventDefault();
    const el = $('#choose-comment-section');
    $('html, body').animate({
      scrollTop: $(el).position().top,
    }, 'slow');
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <main>
            <AboveTheFold
              scrollToCommentSection={e => App.scrollToCommentSection(e)}
            />
            <AtTheFold />
            <ChooseCommentSection
              ref={(el) => { this.chooseCommentSection = el; }}
            />
            <footer id="github-section" className="stacked-container" />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
