const express = require("express")
require('dotenv').config()
const app = express()
const db = require('./database/db')
const bodyParser = require('body-parser')


app.get('/api/users/',(req,res)=>{
db.
query('SELECT * FROM users')
.then(data => res.json(data.rows))
.catch(err => console.error(err))
})

app.get('/api/orders/',(req,res)=>{
    db.
    query('SELECT * FROM orders')
    .then(data => res.json(data.rows))
    .catch(err => console.error(err))
    })

app.get('/api/users/:id',(req,res)=>{

    const {id} = req.params
    
    db.
    query('SELECT * FROM users where id=$1' , [id])
    .then(data => res.json(data.rows))
    .catch(err => console.error(err))
    })

    app.get('/api/orders/:id',(req,res)=>{

        const {id} = req.params
        
        db.
        query('SELECT * FROM orders where id=$1' , [id])
        .then(data => res.json(data.rows))
        .catch(err => console.error(err))
        })

const port = process.env.PORT || 3000
app.listen(port,()=> {
    console.log('server is running')
})