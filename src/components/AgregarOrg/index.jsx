import './AgregarOrg.css';

const AgregarOrg = (props) => {

    return <section className='seccionOrg'>
        <h3 className='titulo'>Mi organización</h3>
        <img src='./img/add.png' alt='agregar' onClick={props.cambiarMostrar} />
    </section>
}

export default AgregarOrg;