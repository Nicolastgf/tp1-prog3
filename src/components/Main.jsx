import Yo from "../assets/yo.jpeg"
import "../css/Main.css"
const Main = ({ datos }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <img className="imagen" src={Yo} alt="Yo" />
          <h5 className="card-title">
            {datos.nombre} {datos.apellido}
          </h5>
          <p className="card-text">{datos.descripcion}</p>
          <p className="card-text">
            <strong>Mascotas:</strong> {datos.mascota}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
