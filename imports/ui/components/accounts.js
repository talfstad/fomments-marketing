import React, { Component } from 'react';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

  componentDidMount() {
    // Render the blaze accounts form then find the div
    // we just rendered in the 'render' method and place the
    // blaze accounts from in that div
    // this.view = Blaze.renderWithData(Template.atForm, { state: 'forgotPwd' }, this.container);
    // this.view = Blaze.render(Template.atForm, this.container);
    this.view = Blaze.render(Template.loginButtons, this.container);
  }

  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those forms ourselves.
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref={(c) => { this.container = c; }} />
    );
  }
}

export default Accounts;
