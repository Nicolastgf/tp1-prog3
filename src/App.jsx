import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const alumno = {
  nombre: "Nicolas",
  apellido: "Fernandez",
  descripcion: "Alumno carrera Programacion FRT-UTN",
  mascota: "Bruno y Lupita",
};

const App = () => {
  return (
    <>
      <Header alumno={`${alumno.nombre} ${alumno.apellido}`} />
      <Main datos={alumno} />
      <Footer />
    </>
  );
};

export default App;
