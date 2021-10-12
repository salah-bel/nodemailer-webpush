const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const sendMail = require('./mail')

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/send', async(req, res) => {
    const { email, subject, message } = await req.body;
    sendMail(email, subject, message);
    res.status(200).redirect("/")


})

app.listen(port, () => console.log(` app listening on port ${port}!`))