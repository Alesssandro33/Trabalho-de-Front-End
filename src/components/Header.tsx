import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Cinema</div>
      <nav>
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/cadastro" className="nav-link btn-new">+ ADICIONAR</Link>
      </nav>
    </header>
  );
}

export default Header;