import React from 'react';

import {
  Elements,
} from 'react-stripe-elements';

import CardForm from './card-form';

const Checkout = () => (
  <div className="Checkout mt8">
    <Elements>
      <CardForm />
    </Elements>
  </div>
);

export default Checkout;
