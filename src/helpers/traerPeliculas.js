// TRAER LAS PELICULAS DE STORAGE///////////////////
export const traerPeliculas = ()=>{
  let peliculas = JSON.parse(localStorage.getItem('peliculas'))

  console.log(peliculas)

  return peliculas
}
