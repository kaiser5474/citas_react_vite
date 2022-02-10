import React, { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  //Hooks
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")  
  const [fecha, setFecha] = useState("")  
  const [sintomas, setSintomas] = useState("")
  const [boton, setBoton] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    // console.log(paciente)
    // console.log(Object.keys(paciente).length)
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setBoton(false)
    }    
  }, [paciente])

  //funciones
  const handleSubmit = (e) =>{
    e.preventDefault();
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }
    if(e.target[5].value === "Agregar Paciente"){
      // Creando el registro
      if([nombre, propietario, email, fecha, sintomas].includes("")){ 
          setError(true);
        }else{
          setError(false);
          objetoPaciente.id = paraId()
          setPacientes([...pacientes, objetoPaciente])
          setBoton(true)
        }    
    }else{
      //editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map((pacienteState) => {
        if(pacienteState.id === paciente.id){
          return objetoPaciente
        }else {
          return pacienteState
        }
      })
      setPacientes(pacientesActualizados)   
      setPaciente({})   
      setBoton(true)
    }
    //limpiando los campos del formulario
    limpiarCampos()
  } 

  //funcion para crear el id del registro
  const paraId = () => {
    const paraId = Date.now().toString() + Math.random(36).toString().substring(2);
    return paraId;
  }

  //funcion que deja vacios los campos del formulario
  const limpiarCampos = () => {
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-center mt-3 mb-4">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">
          Administralos
        </span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-5 px-4 mt-2"
        id="formularioPaciente"
      >
        {error && 
          <Error 
            msg = "Todos los campos son obligatorios"
          ></Error>
        }
        <div className="mb-2">
          <label htmlFor="mascota" className="block font-bold uppercase text-gray-700">
            Nombre Mascota
          </label>
          <input 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="propietario" className="block font-bold uppercase text-gray-700">
            Nombre Propietario
          </label>
          <input 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario" 
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block font-bold uppercase text-gray-700">
            Email
          </label>
          <input 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            id="email"
            type="email"
            placeholder="Email contacto propietario" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="alta" className="block font-bold uppercase text-gray-700">
            Alta
          </label>
          <input 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700">
            Síntomas
          </label>
          <textarea 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            id="sintomas"
            type="date"
            placeholder="Describe los síntomas" 
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />          
        </div>
        {
          boton 
          ? (
            <input 
            value="Agregar Paciente"
            id="agregar"
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 transition-all"
          />
          ) 
          :( <input 
            value="Editar Paciente"
            id="editar"
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 transition-all"
          />)
        }
      </form>
    </div>
  )
}

export default Formulario