import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Form = () => {

    //la página no se recarga y se aplica el Single Page Application
    const singlePage = (evento) => {
        evento.preventDefault();
    }

    return <section className='formulario'>
        <form onSubmit={singlePage}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo= "Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo= "Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo= "Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Form;