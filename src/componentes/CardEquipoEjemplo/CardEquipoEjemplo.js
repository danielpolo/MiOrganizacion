import './CardEquipoEjemplo.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
function CardEquipoEjemplo(props) {
    const {id,nombre,puesto,foto,equipo,fav}=props.registro;
    const {colorHeader,eliminarColaborador,estadoFavorito}=props;
    const colorFondo={backgroundColor:colorHeader};
    return (
        <article className="card">
            <div className="card__header" style={colorFondo}>
                <span onClick={()=>eliminarColaborador(id)}>x</span>
                <img src={foto} alt=""/>
            </div>
            <div className="card__body">
                <h4>{nombre}</h4>
                <p>{puesto} y equipo {equipo}</p>
                { fav ? <AiFillHeart color='red' onClick={()=>estadoFavorito(id)}/>: <AiOutlineHeart onClick={()=>estadoFavorito(id)}/>}
            </div>
        </article>
    )
}
export default CardEquipoEjemplo