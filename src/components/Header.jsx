// src/components/Header.jsx

const Header = ({ alumno }) => {
  return (
    <header className="text-center py-3">
      <h1>Portafolio de {alumno}</h1>
    </header>
  );
};

export default Header;
