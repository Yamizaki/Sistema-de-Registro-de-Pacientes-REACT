
function Paciente({paciente, setPaciente, eliminarPaciente}) {
  
  const handlerEliminar = ()=>{
    const preEliminar = confirm("Seguro de eliminar?")
    if(preEliminar){
      eliminarPaciente(paciente.pacienteID)
    }
  }
  return (
    <div className="text-left bg-gray-500 rounded-lg py-5 px-8 m-5 text-black">
      
      <h1 className="font-bold text-lg">Nombre:</h1>
      <p className="ml-5 ">{paciente.nombre}</p>

      <h1 className="font-bold text-lg ">Nombre del propietario:</h1>
      <p className="ml-5 ">{paciente.nombrePropietario}</p>

      <h1 className="font-bold text-lg">Correo:</h1>
      <p className="ml-5">{paciente.email}</p>

      <h1 className="font-bold text-lg">Fecha de alta:</h1>
      <p className="ml-5">{paciente.fechaAlta}</p>

      <h1 className="font-bold text-lg">Observaciones:</h1>
      <p className="ml-5">{paciente.observaciones}</p>

      <div className="flex justify-center">
        <button type="button" className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-lg mx-3 mt-5"
        onClick={()=> setPaciente(paciente)}
        
        >Editar</button>

        <button type="button" className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg mt-5 mx-3"
        onClick={handlerEliminar}
        >Eliminar</button>
       

        
      </div>

     
    </div>
  )
}

export default Paciente
