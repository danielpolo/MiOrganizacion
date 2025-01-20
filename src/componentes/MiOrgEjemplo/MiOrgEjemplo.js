
import './MiOrgEjemplo.css'
function MiOrgEjemplo(props) {
    return (
    <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiar}/>
    </section>
    )
}
export default MiOrgEjemplo