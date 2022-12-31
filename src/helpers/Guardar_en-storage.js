//GUARGAR Y ACTUALIZAR LAS PELICULAS DE STORAGE///////////////////////////////
export const GuardarEnStorage = (grupo, elementoNuevo)=>{

  let elemento = JSON.parse(localStorage.getItem(grupo))

  //verificar si lo que traje del local storage,es es un array
  if (Array.isArray(elemento)) {
    //si es,añadir dentro de ese array el elemento nuevo que quiero guardar
    // elemento.push(elementoNuevo)

    elemento = [elementoNuevo, ...elemento]
  } else{
    //si no es, crear un nuevo array con el elemento nuevo dentro
    elemento = [elementoNuevo]
  }

  // finalmente, guardar el array actualizado en el local Storage
  localStorage.setItem(grupo, JSON.stringify(elemento))
}

