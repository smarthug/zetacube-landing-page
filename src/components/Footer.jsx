import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <strong>ZetaCube GPU</strong>
          <span className="text-muted">Distributed GPU compute for everyone</span>
        </div>
        <div className="footer-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-copyright">
        <span className="text-muted">© 2024 ZetaCube. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
