import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = () => {

    //la página no se recarga y se aplica el Single Page Application
    const singlePage = (evento) => {
        evento.preventDefault();
    }

    return <section className='formulario'>
        <form onSubmit={singlePage}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo= "Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo= "Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo= "Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario;