import './ListaOpcionesEjemplo.css'
function ListaOpcionesEjemplo(props) {
    const actualizarLista= (eventoInput)=>{
        props.funcionLista(eventoInput.target.value);
        /* en esta linea mapeamos el evento de cambio del input y por medio de target.value accedemos a su valor*/
    }
    return (
        <div className="lista-opciones">
            <label htmlFor="equipo">Equipo</label>
            <input id="equipo" list="lista__equipo" placeholder="Lista Equipo" value={props.valorLista} onChange={actualizarLista}/>
            <datalist id="lista__equipo">
                {props.equipos.map((equipo,index)=>{
                    return <option value={equipo} key={index}></option>
                })}
            </datalist>
        </div>
    )
}
export default ListaOpcionesEjemplo