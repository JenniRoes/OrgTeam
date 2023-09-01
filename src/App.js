import { useState } from 'react';
import './App.css';
import Header from './components/Encabezado';
import Formulario from './components/Formulario';
import AgregarOrg from './components/AgregarOrg';

function App() {
  //switch para mostrar/ocultar formulario
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Single Page Application
  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}
      <AgregarOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
