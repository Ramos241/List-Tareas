export const GuardarEnStorage = (grupo, elementoNuevo)=>{
  //obtener el array del localStorage
  let elemento = JSON.parse(localStorage.getItem(grupo))

  //verificar si el elemento obtenido es un array
  if (Array.isArray(elemento)) {
    //añadir dentro del array el elemento a guardar
    elemento.push(elementoNuevo)
  } else{
    //crear el array con el elemento nuevo
    elemento = [elementoNuevo]
  }

  // guardar el array actualizado en el local Storage
  localStorage.setItem(grupo, JSON.stringify(elemento))
}
