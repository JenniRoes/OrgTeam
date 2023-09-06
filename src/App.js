import { useState } from 'react';
import './App.css';
import Encabezado from './components/Encabezado';
import Formulario from './components/Formulario';
import AgregarOrg from './components/AgregarOrg';
import Equipo from './components/Equipo';

function App() {
  //switch para mostrar/ocultar formulario
  const [mostrarFormulario, setMostrar] = useState(false);

  const cambiarMostrar = () => {
    setMostrar(!mostrarFormulario);
  }

  //mostrar colaboradores y agregar al arreglo 
  const [colaboradores, setColaboradores] = useState([]);

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
    console.log (colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  //Single Page Application
  return (
    <div>
      <Encabezado />

      {
        mostrarFormulario === true ?
          <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}/> : <div></div>
      }

      <AgregarOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)}
    </div>
  );
}

export default App;
