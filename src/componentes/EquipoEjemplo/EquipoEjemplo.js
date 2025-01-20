import './EquipoEjemplo.css'
import CardEquipoEjemplo from '../CardEquipoEjemplo/CardEquipoEjemplo'
import hexToRgba from 'hex-to-rgba'
function EquipoEjemplo(props) {
    const {titulo,colorPrimario}=props.datos;
    const {integrantes,eliminarColaborador, actualizarColor, estadoFavorito}=props
    const colorFondo={backgroundColor: hexToRgba(colorPrimario, 0.15)};
    const estiloTitulo={borderBottom:`0.4rem solid ${colorPrimario}`}
    const cambiarFondo=(colorInput)=>{
        const color=colorInput.target.value;
        actualizarColor(color,titulo);
    }
    return <>{ integrantes.length >0 &&
        <section className="equipo rojo" style={colorFondo}>
            <input className='equipo__color' type='color' value={colorPrimario} onChange={cambiarFondo}/>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className='cards'>
                {integrantes.map((colaborador,index)=> <CardEquipoEjemplo registro={colaborador} key={index} colorHeader={colorPrimario} eliminarColaborador={eliminarColaborador} estadoFavorito={estadoFavorito}/>)}
            </div>
        </section>
    }</>
}
export default EquipoEjemplo