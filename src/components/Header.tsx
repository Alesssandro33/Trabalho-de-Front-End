import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">CineMário</div>
      <nav>
        <Link to="/" className="nav-link">INÍCIO</Link>
        <Link to="/cadastro" className="nav-link btn-new">+ ADICIONAR</Link>
      </nav>
    </header>
  );
}

export default Header;