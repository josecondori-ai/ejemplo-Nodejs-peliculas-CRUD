import uniqid from 'uniqid'

let peliculas=[
{ id: uniqid(), titulo: 'Batma', rating: 10 },
{ id: uniqid(), titulo: 'superman', rating: 2 }]




function agregarPelicula(pelicula){
    pelicula.id=uniqid()
    peliculas.push(pelicula)
}

function mostrarPeliculas(){
    // for(let pelicula of peliculas){
    //     console.log(pelicula.titulo)
    // }
    return peliculas
}

function obtenerPelicula(peliculaid){
    console.log(peliculaid)
    console.log(typeof(peliculaid))

    let peli=peliculas.find((pelicula)=>pelicula.id === peliculaid)
    console.log(peli)
    return peli
    // console.log(peli)
    // if(peli !==undefined){
    //     return peli
    // }else{
    //     return' no se encontro la pelicula'
    // }
}


function eliminarPelicula(peliculaid){
    console.log('antes',typeof(peliculaid))
    Number(peliculaid)
    console.log('despues',typeof(peliculaid))

peliculas= peliculas.filter((pelicula)=>pelicula.id!== peliculaid)
console.log(peliculas)
}

//hacer modificarPelicula
//{ id: 1, titulo: 'Batma', rating: 10 }
////{ id: 1, titulo: 'Batman', }

function modificarPelicula(peliculaid,nuevaPelicula){
let index=peliculas.findIndex((pelicula)=>pelicula.id===peliculaid)
if(index!==-1){
 peliculas[index]=nuevaPelicula
}
}

export default {
    agregarPelicula,
    mostrarPeliculas,
    eliminarPelicula,
    obtenerPelicula,
    modificarPelicula
   
}