import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {

    const { fondo, destaque, titulo } = props.datos;
    const { colaboradores } = props;


    return <>
        {colaboradores.length > 0 &&
            <section className='equipo' style={{ backgroundColor: fondo }}>
                <h3 style={{ borderColor: destaque }}>{titulo}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} color = {destaque}/>)}
                </div>
            </section>
        }
    </>
}

export default Equipo;