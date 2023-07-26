import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="blog-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="wave-imag"
    />
    <h1 className="blog-title">Wave</h1>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/not found">
          Not Found
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
