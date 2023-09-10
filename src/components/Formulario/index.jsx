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


    //Single Page Application
    const manejarEnvio = (evento) => {
        evento.preventDefault();

        //convertir los datos en objetos
        let datos = { nombre, puesto, foto, equipo };

        props.registrarColaborador(datos);
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();

        props.crearEquipo({ titulo, destaque: color });
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            {/*formulario para registrar colaboradores*/}
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} setValor={setNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={setPuesto} />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} setValor={setFoto} />
            <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
            <Boton texto="Crear" />
        </form>
        {/*formulario para registrar equipos*/}
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto titulo="Título" placeholder="Ingresar título" required valor={titulo} setValor={setTitulo} />
            <CampoTexto titulo="Color" placeholder="Ingresar color hexadecimal" required valor={color} setValor={setColor} type="color"/>
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario;