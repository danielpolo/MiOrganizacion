import { useState } from 'react'
import './FormularioEjemplo.css'
import CampoTextoEjemplo from '../CampoTextoEjemplo/CampoTextoEjemplo'
import ListaOpcionesEjemplo from '../ListaOpcionesEjemplo/ListaOpcionesEjemplo'
import Boton from '../Boton/Boton'
function FormularioEjemplo(props) {
    const manejarEnvio=(evento)=>{
        evento.preventDefault();
        const registro={
            id:'',
            nombre:getNombre,
            puesto:getPuesto,
            foto:getFoto,
            equipo:getEquipo,
            fav: false
        };
        props.enviar(registro);
        resetCampos();
    }
    const resetCampos=()=>{
        setNombre('');
        setPuesto('');
        setFoto('');
        setEquipo('');
    }
    const [getNombre,setNombre]= useState("");
    const [getPuesto,setPuesto]= useState("");
    const [getFoto,setFoto]= useState("");
    const [getEquipo,setEquipo]= useState("");
    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTextoEjemplo titulo="nombre" placeholder="Digite su nombre" valorInput={getNombre} funcionInput={setNombre}/>
                <CampoTextoEjemplo titulo="Puesto" placeholder="Digite su puesto" valorInput={getPuesto} funcionInput={setPuesto}/>
                <CampoTextoEjemplo titulo="Foto" placeholder="Inserte el enlace de su foto" valorInput={getFoto} funcionInput={setFoto}/>
                <ListaOpcionesEjemplo valorLista={getEquipo} funcionLista={setEquipo} equipos={props.equipos}/>
                <Boton texto="crear"/>
            </form>
        </section>
    )
}
export default FormularioEjemplo