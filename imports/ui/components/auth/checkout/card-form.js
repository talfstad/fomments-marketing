import React from 'react';

import {
  CardElement,
  injectStripe,
} from 'react-stripe-elements';

const _CardForm = () => {
  const createOptions = () => ({
    className: 'f-input',
    style: {
      base: {
        fontFamily: 'Camphor, Open Sans, Segoe UI, sans-serif',
        fontWeight: 400,
        color: '#738a94',
        fontSize: '13px',
        '::placeholder': {
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
};

export default injectStripe(_CardForm);
