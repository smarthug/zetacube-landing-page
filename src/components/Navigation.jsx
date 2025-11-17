import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">ZetaCube</Link>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/providers">Providers</Link>
          <Link to="/documentation">Documentation</Link>
          <Link to="/company">Company</Link>
        </div>
        <button className="btn-primary">Request Access</button>
      </div>
    </nav>
  )
}

export default Navigation
