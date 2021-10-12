const express = require('express');
const app = require('express')();
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT: port, PUBLIC_VAPID_KEY: pbKey, PRIVATE_VAPID_KEY: pvKey } = require('./config');

// parse application/x-www-form-urlencoded
app.use(express.json());


app.use(express.static(path.join(__dirname, 'client')));
// web push setting 



webpush.setVapidDetails('mailto:belasalah@gmail.com', pbKey, pvKey);
// Subscribe Route
app.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
    console.log(subscription);

    // Send 201 - resource created
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title: "Push Test" });
    console.log(payload);

    // Pass object into sendNotification
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
});



app.listen(port, () => {
    console.log(`Server Listen on http://localhost:${port}`);
});