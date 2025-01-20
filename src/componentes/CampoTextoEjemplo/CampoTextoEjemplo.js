import './CampoTextoEjemplo.css'
function CampoTextoEjemplo(propiedades) {
    const actualizarInput= (eventoInput)=>{
        propiedades.funcionInput(eventoInput.target.value);
    }
    return(
        <div className="campo-texto">
                    <label htmlFor={propiedades.titulo}>{propiedades.titulo}</label>
                    <input type="text" id={propiedades.titulo} placeholder={propiedades.placeholder} value={propiedades.valorInput} onChange={actualizarInput} required/>
        </div>
    )
}
export default CampoTextoEjemplo