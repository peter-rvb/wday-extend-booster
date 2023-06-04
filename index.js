const express = require('express')
const app = express()

//const erlang = require('erlang-c-js')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

//// ROUTES

app.get('/', (req, res) => {
    res.send('Welcome to the WDAY Extend Booster')
})

// ELRANG 
const erlangRouter = require('./routes/erlang')
app.use('/erlang', erlangRouter)

app.listen(process.env.PORT || 3000, () => console.log("Relax, your server is running"))