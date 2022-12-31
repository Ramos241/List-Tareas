// import {ArrayPredeterminado} from '../helpers/ArrayPredeterminado'

// TRAER LAS PELICULAS DE STORAGE///////////////////
export const traerPeliculas = ()=>{
  let peliculas = JSON.parse(localStorage.getItem('peliculas'))
  return peliculas
}


// export const traerPeliculas = ()=>{
//   let peliculas = JSON.parse(localStorage.getItem('peliculas'))

//   console.log(peliculas)

//   if (peliculas === null) {
//     let otraLista  = []
    
//     otraLista = ArrayPredeterminado()

//     console.log(otraLista);

//     return otraLista
//   } else{

//     return peliculas
//   }

// }