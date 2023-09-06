import './Colaborador.css';

const Colaborador = (props) => {
    const {nombre, puesto, foto} = props.datos;
    const {color} = props;

    return <div className='colaborador'>
        <div className='encabezado' style={{backgroundColor: color}}>
            <img src={foto} alt='foto'/>
        </div>
        <div className='informacion'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;