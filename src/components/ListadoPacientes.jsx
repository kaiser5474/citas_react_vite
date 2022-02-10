import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {

  // const cantidadPacientes = () => {
  //   let textListado = ""
  //   if(pacientes.length > 0){
  //     textListado = "Listado de pacientes" //console.log()
  //   }else{
  //     textListado = "No hay pacientes" //console.log("No hay pacientes")
  //   }
  //   return textListado
  // }

  return (
    <div className="md:w-1/2 lg:w-3/5 mb-10 md:h-screen md:overflow-y-scroll">
      {pacientes.length > 0 ? 
        (
          <>
            <h2 className="font-black text-3xl text-center">
            Listado de pacientes
            </h2>
            <p className="text-center mt-3 mb-4">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">
                Pacientes y citas
              </span>
            </p>
          </>
        )
        : 
        (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes   
            </h2>
            <p className="text-center mt-3 mb-4">
              Comienza agregando pacientes {''}
                <span className="text-indigo-600 font-bold">
                  y aparecerán en este lugar
                </span>
            </p>
          </>
        )
      }
      
      {
        pacientes.map((paciente) => {
          return(
          <Paciente 
            paciente={paciente} 
            key = {paciente.id}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />)}
        )
      }
    </div>
  )
}

export default ListadoPacientes