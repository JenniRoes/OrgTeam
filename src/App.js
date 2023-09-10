import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Encabezado from './components/Encabezado';
import Formulario from './components/Formulario';
import AgregarOrg from './components/AgregarOrg';
import Equipo from './components/Equipo';
import PiePagina from './components/PiePagina';

function App() {
  //switch para mostrar/ocultar formulario
  const [mostrarFormulario, setMostrar] = useState(false);

  const cambiarMostrar = () => {
    setMostrar(!mostrarFormulario);
  }

  //mostrar colaboradores y agregar al arreglo 
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]);

  //Lista equipos para el componente Equipo
  const equipos = [
    {
      titulo: "Programación",
      fondo: "#D9F7E9",
      destaque: "#57C278"
    },
    {
      titulo: "Front End",
      fondo: "#E8F8FF",
      destaque: "#82CFFA"
    },
    {
      titulo: "Data Science",
      fondo: "#F0F8E2",
      destaque: "#A6D157"
    },
    {
      titulo: "Devops",
      fondo: "#FDE7E8",
      destaque: "#E06B69"
    },
    {
      titulo: "UX y Diseño",
      fondo: "#FAE9F5",
      destaque: "#DB6EBF"
    },
    {
      titulo: "Móvil",
      fondo: "#FFF5D9",
      destaque: "#FFBA05"
    },
    {
      titulo: "Innovación y Gestión",
      fondo: "#FFEEDF",
      destaque: "#FF8A29"
    }
  ]

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = () => {
      
  }

  //Single Page Application
  return (
    <div>
      <Encabezado />

      {
        mostrarFormulario === true ?
          <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador} /> : <div></div>
      }

      <AgregarOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} />)
      }

      <PiePagina />
    </div>
  );
}

export default App;
