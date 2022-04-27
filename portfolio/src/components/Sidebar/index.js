import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
     <Link className='logo' to='/'>
         <img src={LogoS} alt="logo" />
         <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
         </Link>

         <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
             </NavLink>
             <NavLink exact="true" activeclassname="active"
              className="about-Link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
             </NavLink>
             <NavLink exact="true" activeclassname="active"
             className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
             </NavLink>
         </nav>
         <ul>
             <li>
                 <a
                 target="_blank"
                 rel="noreferre"
                 href=""
                 >
                     <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>

                 </a>
             </li>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/shorts/STv9BqK8Jzs"
                >
                <FontAwesomeIcon icon={faYoutube} color="#4d4de" />
                </a>
            </li>
            
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/shorts/STv9BqK8Jzs"
                >
                <FontAwesomeIcon icon={faSkype} color="#4d4de" />
                </a>
            </li>
         </ul>
        </div>
  )
}

export default Sidebar