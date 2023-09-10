import './CampoTexto.css';

const CampoTexto = (props) => {

    const manejarCambio = (evento) => {
        props.setValor(evento.target.value);
    }

    const { type = "text" } = props;

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio} type={type} />
    </div>
}

export default CampoTexto;