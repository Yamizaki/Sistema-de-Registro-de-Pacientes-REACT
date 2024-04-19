import { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
//npm i -D tailwindcss postcss autoprefixer
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (pacienteID) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.pacienteID !== pacienteID
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mt-20 text-gray-100 mx-auto">
      <Header />

      <div className="mt-12 md:flex ">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />

        <ListadoPacientes
          eliminarPaciente={eliminarPaciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}
export default App;
