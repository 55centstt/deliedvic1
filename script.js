const stripe = Stripe('pk_live_51RO7d5C7qLaxNJZOq5GpGkhVrZSsLUETmLR76VbQwGxTXv8L4WZkGIa6ofxBnHDxV9MZuj5bAJyflEtoxQ4Jwp7p00z5Dd774w');

function comprarCurso(priceId) {
  stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: window.location.origin + '/success.html',
    cancelUrl: window.location.origin + '/publicaciones.html',
  })
  .then(function (result) {
    if (result.error) {
      alert(result.error.message);
    }
  });
}
