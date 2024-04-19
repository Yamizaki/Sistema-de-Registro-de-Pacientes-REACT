
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  
  
  return (
    <div className="md:w-1/2 text-white lg:w-3/5 text-center  md:h-screen  overflow-y-scroll">
      
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-2xl font-bold">Listado pacientes</h2>
          <p>
            Visualiza tus{" "}
            <span className="text-indigo-400 italic text-lg ">Pacientes</span>{" "}
            aquí
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            eliminarPaciente={eliminarPaciente}
            key={paciente.pacienteID} 
            paciente={paciente}
            setPaciente={setPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">No hay pacientes agregados!</h2>
          <p>
            Registra tus{" "}
            <span className="text-indigo-400 italic text-lg ">Pacientes</span>{" "}
            para poder visualizarlos
          </p>
        </>
      )}

    </div>
  );
}

export default ListadoPacientes;
