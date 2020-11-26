const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books-db', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection

db.on('error',(err) => {
    console.log(err)
})
db.once('open',() => {
    console.log('Database connection successfully')
})
const bookRoute = require('./api/routes/book')
const userRoute = require('./api/routes/user')

const app = express();
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const PORT = process.env.PORT || 8080

app.use('/api/books',bookRoute)
app.use('/api/users', userRoute)

app.get('/',(req, res) => {
    res.send("<h1>Hello World</h1>")
})


app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`)
})

const books = [
    {name: 'Mithun',email:'mitonshil48@gmail.com'},
    {name: 'Mithun',email:'mitonshil48@gmail.com'}
]