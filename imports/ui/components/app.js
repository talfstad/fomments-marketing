import React, { PureComponent } from 'react';

import Header from '/imports/ui/components/header';
import AboveTheFold from '/imports/ui/components/above-the-fold';
import AtTheFold from '/imports/ui/components/at-the-fold';
import ChooseCommentSection from '/imports/ui/components/choose-comment-section';

// Intent: load all Schemas onto collectionsttaches schemas to all
import '/imports/api/meteor/collections';

import 'font-awesome/css/font-awesome.css';

import '/imports/ui/css/app.scss';

class App extends PureComponent {
  static scrollToCommentSection(e) {
    e.preventDefault();
    const el = $('#choose-comment-section');
    $('html, body').animate({
      scrollTop: $(el).position().top,
    }, 'slow');
  }

  render() {
    return (
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
    );
  }
}

export default App;
