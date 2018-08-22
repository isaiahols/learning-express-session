require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const sc = require('./session_controller')
const authController = require('./auth_controller')

const app = express();
const { SERVER_PORT, SESSION_SECRET } = process.env
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

app.get('/api/testSession', (req, res) => {
    res.status(200).send(req.session);
})

app.post(`/api/purchase`, sc.storePurchase);
app.post(`/api/register`, authController.register);
app.post(`/api/login`, authController.login);





// 
// 
// 
app.listen(SERVER_PORT, () => {
    console.log(`we are on ${SERVER_PORT}`)
})