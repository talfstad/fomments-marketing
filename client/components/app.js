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
          <section id="join-vip-secondary" className="stacked-container">
            <a href="s#" className="">
              <span className="common-button">
              sign up for pro
            </span>
              <p>
              Ready for the next level? Get access to more comments and languages.
            </p>
            </a>
          </section>
          <section id="github-section" className="stacked-container">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com">
              <img alt="" src="/images/GitHub-Mark-120px-plus.png" />
              <img alt="" src="/images/GitHub_Logo.png" />
            </a>

            <div className="github-links">
              <a className="github-button" href="https://github.com/ntkme/github-buttons" data-icon="octicon-star" data-style="mega" data-count-href="/ntkme/github-buttons/stargazers" data-count-api="/repos/ntkme/github-buttons#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
              <a className="github-button" href="https://github.com/buildcave" data-style="mega" data-count-href="/buildcave/followers" data-count-api="/users/buildcave#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @buildcave on GitHub">Follow @buildcave</a>
              <a className="github-button" href="https://github.com/ntkme/github-buttons/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/ntkme/github-buttons/network" data-count-api="/repos/ntkme/github-buttons#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork ntkme/github-buttons on GitHub">Fork</a>
            </div>

          </section>
        </main>
        <script src="https://buttons.github.io/buttons.js" />
      </div>
    );
  }
}

export default App;
