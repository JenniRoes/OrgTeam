import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props) => {

    //control de inputs
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");


    //control formulario equipo
    const [mostrarFormularioEquipo, setMostrarForm] = useState(false);


    const cambiarMostrarForm = (evento) => {
        console.log("Mostrar Formulario");
        setMostrarForm(!mostrarFormularioEquipo);
    }

    return (
        <section className='formulario'>
          <form
            onSubmit={(evento) => {
              evento.preventDefault();
              if (!mostrarFormularioEquipo) {
                // Manejar el envío del formulario de registro de colaboradores
                let datos = { nombre, puesto, foto, equipo };
                props.registrarColaborador(datos);
              } else {
                // Manejar el envío del formulario de registro de equipos
                let datosEquipo = { titulo, destaque: color };
                props.crearEquipo(datosEquipo);
                // Cambiar el estado para mostrar el formulario de colaboradores
                cambiarMostrarForm();
              }
            }}
          >
            {mostrarFormularioEquipo && (
              <div>
                {/* formulario para registrar equipos */}
                <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto titulo="Título" placeholder="Ingresar título" required valor={titulo} setValor={setTitulo} />
                <CampoTexto titulo="Color" placeholder="Ingresar color hexadecimal" required valor={color} setValor={setColor} type="color" />
                <div className='formulario-boton'>
                  <Boton texto="Crear" />
                </div>
              </div>
            )}
            {!mostrarFormularioEquipo && (
              <div>
                {/* formulario para registrar colaboradores */}
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} setValor={setNombre} />
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={setPuesto} />
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} setValor={setFoto} />
                <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
                <div className='formulario-boton'>
                  <Boton texto="Crear" />
                  <Boton texto="Registrar equipo" onClick={cambiarMostrarForm} />
                </div>
              </div>
            )}
          </form>
        </section>
      );    
}


export default Formulario;