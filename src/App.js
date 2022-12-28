import { useState } from "react";
import { Agregar } from "./componentes/Agregar";
import { Buscador } from "./componentes/Buscador";
import { ContenedorDePeliculas } from "./componentes/ContenedorDePeliculas";

function App() {

  let [listaEstado, setListaEstado] = useState([])

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      <div className="contenedor-secciones">
        {/*Contenido principal*/}
        <section id='content' className='content'>
          <ContenedorDePeliculas listaEstado={listaEstado} setListaEstado={setListaEstado}/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
          <Buscador listaEstado={listaEstado} setListaEstado={setListaEstado} />
          <Agregar setListaEstado={setListaEstado}/>
        </aside>
      </div>

      {/*Pie de página*/}
      <footer className="footer">
        Developer by <a href="https://victorroblesweb.es">Jaen Figueroa</a> &copy; 2022
      </footer>
    </div>
  );
}

export default App;
