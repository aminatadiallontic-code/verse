import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{ color: "white" }}>Mon Projet React 🌐</h1>
      <nav style={{ marginTop: "10px" }}>
        <Link to="/" style={linkStyle}>Accueil</Link>
        <Link to="/about" style={linkStyle}>À propos</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: "#282c34",
  padding: "20px",
  textAlign: "center",
};

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontSize: "18px",
};

export default Header;
