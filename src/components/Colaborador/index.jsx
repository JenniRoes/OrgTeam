import './Colaborador.css';
import { TiDelete } from 'react-icons/ti';
/*import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';*/

const Colaborador = (props) => {
    const { nombre, puesto, foto, id, /*fav*/ } = props.datos;
    const { color, eliminarColaborador, /*like*/ } = props;

    return <div className='colaborador'>
        <TiDelete className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={{ backgroundColor: color }}>
            <img src={foto} alt='foto' />
        </div>
        <div className='informacion'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/*{fav ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}*/}
            
        </div>
    </div>
}

export default Colaborador;