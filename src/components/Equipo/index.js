import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {

    const {fondo, destaque, titulo} = props.datos;

    return <section className='equipo' style={{backgroundColor: fondo}}>
        <h3 style={{borderColor: destaque}}>{titulo}</h3>
        <div className='colaboradores'>
            <Colaborador />
        </div>
    </section>
}

export default Equipo;