const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('welcome to my hotel')
})

app.get('/chicken' , (req,res) =>{
    res.send('sure sir , i would love to serve chicken')
} )

app.get('/idli' , (req,res) =>{
    const customized_idli = {
        name: "rava idli",
        size: 10,
        is_sambhar: true,
        is_chatni: false
    }
    res.send(customized_idli)
} )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
