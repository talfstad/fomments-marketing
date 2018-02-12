import React from 'react';

import {
  CardElement,
  Elements,
  injectStripe,
} from 'react-stripe-elements';

class _CardForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => console.log(payload));
  };

  render() {
    const createOptions = () => ({
      className: 'f-input',
      style: {
        base: {
          fontFamily: 'Camphor, Open Sans, Segoe UI, sans-serif',
          fontWeight: 400,
          color: '#738a94',
          fontSize: '13px',
          '::placeholder': {
            transition: 'all .25s ease',
            color: '#999', // from bootstrap.css
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    });

    return (
      <CardElement
        {...createOptions()}
      />
    );
  }
}
const CardForm = injectStripe(_CardForm);

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <Elements>
          <CardForm />
        </Elements>
      </div>
    );
  }
}

export default Checkout;
