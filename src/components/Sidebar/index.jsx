import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFolder, faBriefcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jackie Lin" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink to="/" onClick ={() => setShowNav(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/about" onClick ={() => setShowNav(false)} className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/work" onClick ={() => setShowNav(false)} className={({ isActive }) => (isActive ? 'active work-link' : 'work-link')}>
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/projects" onClick ={() => setShowNav(false)} className={({ isActive }) => (isActive ? 'active projects-link' : 'projects-link')}>
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/contact" onClick ={() => setShowNav(false)} className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          icon = {faClose}
          color = "#ffd700"
          size = "3x"
          className = "close-icon"
          onClick ={() => setShowNav(false)}
        />
      </nav>
      <ul>
        {/* <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jackielin159/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li> */}
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/jlin1599">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
        onClick={() => setShowNav(true)}
      />
    </div>
  )
}

export default Sidebar
