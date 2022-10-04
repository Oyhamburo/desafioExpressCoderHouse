// instalamos 'npm i express'
const express = require('express')
// inicializo express
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
})
app.post('/', (req, res) => {
    res.send({ mensaje: 'hola mundo desde post' })
})
app.get('/saludo', (req, res) => {
    console.log("holasssssssssssssssssssssssssssssssssss",{req})
    res.send({ mensaje: 'saludo' })
})
app.get('/chau', (req, res) => {
    res.send({ mensaje: 'CHAU' })
})
//creo servidor en express
const server = app.listen(PORT, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

//indico que fallo
server.on('error', error => console.log(`Error con el Servidor :C ${error}`))
