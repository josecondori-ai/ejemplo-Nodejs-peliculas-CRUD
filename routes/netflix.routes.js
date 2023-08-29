import express from "express";
import funciones from '../ejercicio.js'
const router=express.Router()

router.get('/mostrar-peliculas',(req,res)=>{
   let arrayPeliculas=funciones.mostrarPeliculas() 
   res.json(arrayPeliculas)
})
//???localhost:3000/netflix/eliminarPeliculas
 router.post('/agregar-pelicula',(req,res)=>{
    let{titulo,rating,id}=req.body
    funciones.agregarPelicula({id,titulo,rating})
    res.json({mensaje:'pelicula agregada'})
 })

router.delete('/eliminar-pelicula/:id',(req,res)=>{
   const peliculaId= req.params.id
   funciones.eliminarPelicula(peliculaId)
   res.json({mensaje:'pelicula eliminada'})
})


router.get('/obtener-pelicula/:id',(req,res)=>{
   const peliculaId=req.params.id
   let pelicula=funciones.obtenerPelicula(peliculaId)
   console.log(pelicula)
   if (pelicula!==undefined){
      
      res.json(pelicula)
   }else{
      res.json({mensaje:'pelicula no encontrada'})
   }
})
// router.put()

export default router