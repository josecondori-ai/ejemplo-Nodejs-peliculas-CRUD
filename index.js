
import express from 'express'
const app=express()

import funciones from './ejercicio.js'
import morgan from 'morgan'
import netflixRutas from './routes/netflix.routes.js'

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))



//peticiones
app.use('/netflix',netflixRutas)

app.get('/',(req,res)=>{
       
    res.send('<h1>hola mundo</h1>')
})

app.get('/*',(req,res)=>{
    res.send('<h1>no esta la pagina</h1>')
})


app.listen(4500,()=>{
    console.log('el servidor se esta ejecutando')
})