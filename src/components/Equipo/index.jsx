import hexToRgba from 'hex-to-rgba';
import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {

    const { destaque, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, /*like*/ } = props;


    return <>
        {colaboradores.length > 0 &&
            <section className='equipo' style={{ backgroundColor: hexToRgba(destaque, 0.2) }}>
                <input type='color' className='input-color' value={destaque} onChange={(evento)=> {actualizarColor(evento.target.value, id)}}/>
                <h3 style={{ borderColor: destaque }}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} color={destaque} eliminarColaborador={eliminarColaborador} /*like={like}*//>)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;