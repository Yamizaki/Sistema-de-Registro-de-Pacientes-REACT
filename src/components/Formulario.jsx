// rfce
import { useState, useEffect } from "react";
import Errores from "./Errores";
function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [error, setError] = useState(false);

  useEffect (()=>{
    if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre)
        setNombrePropietario(paciente.nombrePropietario)
        setEmail(paciente.email)
        setFechaAlta(paciente.fechaAlta)
        setObservaciones(paciente.observaciones)
        
    }
  }, [paciente])

  
  const generarID = ()=>{
    const fecha = Date.now()
    const number = Math.random()
    return fecha + number;
  }


  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      [nombre, nombrePropietario, email, fechaAlta, observaciones].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      nombrePropietario,
      email,
      fechaAlta,
      observaciones
      
    };

    if(paciente.pacienteID){
      objetoPaciente.pacienteID = paciente.pacienteID
      const pacienteActualizado =  pacientes.map(pacienteState => pacienteState.pacienteID=== paciente.pacienteID? objetoPaciente : pacienteState)

      setPacientes(pacienteActualizado)
      setPaciente({})
    }else{
      objetoPaciente.pacienteID = generarID()
      setPacientes([...pacientes, objetoPaciente]);
    }



    // reseteo de los input
    setNombre('')
    setNombrePropietario('')
    setEmail('')
    setFechaAlta('')
    setObservaciones('')
  };



  return (
    <div className="md:w-1/2 text-center">
      <h2 className="text-2xl font-bold">Formulario</h2>
      <p>
        Añade <span className="text-indigo-400 italic text-lg ">Pacientes</span>{" "}
        y adminístralos
      </p>

      <form
        action=""
        className="text-left bg-gray-500 rounded-lg py-5 px-8 m-5 text-black"
        onSubmit={handlerSubmit}
      >
        <label htmlFor="nombre" className="block uppercase text-lg font-bold ">
          Nombre Mascota{" "}
        </label>
        <input
          name="nombre"
          id="nombre"
          type="text"
          className="rounded-md  0 px-2 mt-2 py-2 w-full"
          placeholder="Ingresa el nombre de la mascota..."
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label
          htmlFor="nombrePropietario"
          className="mt-3 block uppercase text-lg font-bold"
        >
          Nombre del propietario{" "}
        </label>
        <input
          name="nombrePropietario"
          id="nombrePropietario"
          type="text"
          className="rounded-md   px-2 mt-2 py-2 w-full"
          placeholder="Ingresa el nombre del propietario..."
          value={nombrePropietario}
          onChange={(e) => setNombrePropietario(e.target.value)}
        />

        <label
          htmlFor="email"
          className="mt-3 block uppercase text-lg font-bold"
        >
          Correo{" "}
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="rounded-md   px-2 mt-2 py-2 w-full"
          placeholder="Ingresa el correo electrónico..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          htmlFor="fechaAlta"
          className="mt-3 block uppercase text-lg font-bold"
        >
          Alta{" "}
        </label>
        <input
          name="fechaAlta"
          id="fechaAlta"
          type="date"
          className="rounded-md  px-2 mt-2 py-2 w-full"
          value={fechaAlta}
          onChange={(e) => setFechaAlta(e.target.value)}
        />

        <label
          htmlFor="observaciones"
          className="mt-3 block uppercase text-lg font-bold"
        >
          Observaciones{" "}
        </label>
        <textarea
          name="observaciones"
          id="observaciones"
          type="text"
          className="rounded-md  px-2 mt-2 py-2 w-full"
          placeholder="Inserta las observaciones"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />

        {error && <Errores mensaje = 'Todos los campos son obligatorios'/>}

        <input
          type="submit"
          value="Agregar"
          className=" hover:text-black hover:bg-indigo-300 text-white uppercase font-bold text-2lg w-full mt-5 bg-black px-20 py-3 rounded-md"
        />
      </form>
    </div>
  );
}

export default Formulario;
