import {useState} from 'react'
import {Agregar} from './Agregar'
import {Buscador} from './Buscador'
import { Caja } from './Caja'
import { Editar } from './Editar'

function Inicio() {
  let [listaEstado, setListaEstado] = useState([])
  let [peliEditar, setPeliEditar] = useState(-1)
  
  return (
    <>
      <Buscador
        listaEstado={listaEstado}
        setListaEstado={setListaEstado} />

      <Caja 
        listaEstado={listaEstado} 
        setListaEstado={setListaEstado}
        setPeliEditar={setPeliEditar} />

      <Agregar 
        setListaEstado={setListaEstado}
        peliEditar={peliEditar} />
      
      <Editar
        peliEditar={peliEditar}
        setPeliEditar={setPeliEditar}
        setListaEstado={setListaEstado}/>
    </>
  )
}

export default Inicio
