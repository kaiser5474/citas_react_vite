import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

const {nombre, propietario, email, fecha, sintomas, id} = paciente

const handleDelete = () =>{
  const response = confirm("Deseas eliminar el paciente")
  if(response){
    eliminarPaciente(id)
  }
} 

  return (
    <div className="ml-3 mt-2 bg-white shadow-md px-5 py-5 rounded-md">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre: {''}
      <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Propietario: {''}
      <span className="font-normal normal-case">{propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email: {''}
      <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha Alta: {''}
      <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Síntomas: {''}
      <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="flex justify-between mt-5">
        <button 
            onClick={() => setPaciente(paciente)}
            className="py-2 px-10 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white font-bold uppercase"
            type="button"
        >
            Editar
        </button>
        <button 
            className="py-2 px-10 bg-red-600 rounded-md hover:bg-red-700 text-white font-bold uppercase"
            type="button"
            onClick={handleDelete}
        >
            Eliminar
        </button>
    </div>
  </div>
  )
}

export default Paciente