import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1gPJ0duyZEk1NZaoQ5slWNgs00AwD2Ld8w';

    const onToken = token => {
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name={`Arvey's Clothing`}
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;