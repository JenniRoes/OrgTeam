import './Colaborador.css';
import { TiDelete } from 'react-icons/ti';

const Colaborador = (props) => {
    const { nombre, puesto, foto, id } = props.datos;
    const { color, eliminarColaborador } = props;

    return <div className='colaborador'>
        <TiDelete className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={{ backgroundColor: color }}>
            <img src={foto} alt='foto' />
        </div>
        <div className='informacion'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;