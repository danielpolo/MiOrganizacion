
import { useState } from 'react'
import {v4 as identificador} from 'uuid'
import './App.css';
import HeaderEjemplo from './componentes/HeaderEjemplo/HeaderEjemplo';
import FormularioEjemplo from './componentes/FormularioEjemplo/FormularioEjemplo';
import MiOrgEjemplo from './componentes/MiOrgEjemplo/MiOrgEjemplo';
import EquipoEjemplo from './componentes/EquipoEjemplo/EquipoEjemplo';
import FooterEjemplo from './componentes/FooterEjemplo/FooterEjemplo';
function App() {
  const [mostrarFormulario,actualizarMostrarFormulario]= useState(false);
  const [getColaboradores, setColaboradores]=useState([])
  const estadoFormulario=()=>{
    actualizarMostrarFormulario(!mostrarFormulario)
  }
  const guardarColaborador=(registro)=>{
    registro.id=identificador();
    setColaboradores([...getColaboradores,registro])
  }
  const eliminarColaborador=(id)=>{
    setColaboradores(getColaboradores.filter(colaborador=> colaborador.id !== id))
  }
  const estadoFavorito= (id)=>{
    const colaboradoresActualizados=getColaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav=!colaborador.fav;
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados);
  }
  const actualizarColor= (color, titulo)=>{
    const equiposActualizados= getEquipo.map((equipo)=>{
      if (equipo.titulo === titulo) {
        equipo.colorPrimario=color;
      }
      return equipo
    })
    setEquipo(equiposActualizados);
  }
  const [getEquipo,setEquipo]=useState([
    {
      id:identificador(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id:identificador(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id:identificador(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id:identificador(),
      titulo:"DevOps",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:identificador(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:identificador(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:identificador(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }]);
  return (
    <div>
      <HeaderEjemplo />
      { mostrarFormulario ? <FormularioEjemplo equipos={getEquipo.map((equipo)=> equipo.titulo)} enviar={guardarColaborador}/>:''}
      <MiOrgEjemplo cambiar={estadoFormulario} />
      {getEquipo.map((equipo,index)=><EquipoEjemplo datos={equipo} integrantes={getColaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} key={index} estadoFavorito={estadoFavorito}/>)}
      <FooterEjemplo />
    </div>
  );
}

export default App;
