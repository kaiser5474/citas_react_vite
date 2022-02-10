import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  //Hooks
  const [pacientes, setPacientes] = useState([])  
  const [paciente, setPaciente] = useState({})  

  //funciones
  const eliminarPaciente = (id) => {
    const eliminandoPaciente = pacientes.filter((paciente) => paciente.id !== id)
    setPacientes(eliminandoPaciente)
  }

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes"));
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])
  
  
  return (
    <div className="container mx-auto mt-16">
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          paciente = {paciente}
          setPacientes = {setPacientes}
          setPaciente = {setPaciente}
          />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
