import React, { Component } from 'react';
import Header from './header';
import AboveTheFold from './above-the-fold';
import AtTheFold from './at-the-fold';
import ChooseCommentSection from './choose-comment-section';

class App extends Component {
  scrollToCommentSection(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.chooseCommentSection.el).position().top,
    }, 'slow');
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <AboveTheFold
            scrollToCommentSection={e => this.scrollToCommentSection(e)}
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
