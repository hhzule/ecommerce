const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HeigzG83i8vZF9C6q9JdMLK7XHIWBkW4VBeV30LJ0uIpNyvljCLWDoGADB2xVz7INCc0drip7msdVRWtWoyZ2OV00HO5LqXO9')

// API

// API config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello'))

app.post('./payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('payment received', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)