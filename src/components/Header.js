import React from 'react';
import logo from '../images/logo-l5.png'
import iconlinkedin from '../images/linkedin-svgrepo-com.svg'
import iconfacebook from '../images/facebook-svgrepo-com.svg'
import iconyoutube from '../images/youtube-svgrepo-com.svg'
import arrow_down_icon from '../images/arrow-204-64.png'
import './style.css'

function Header() {
    return (
        <header className="header">
            <div className="header-row">
                <span> <a href="#"> Fale com Vendas</a> </span>
                <span> <a href="#"> Atendimento a Clientes </a></span>
            </div>
            
            <nav className="navbar">
                <a href="#">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <ul className="navbar-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Clientes</a>
                    </li>
                    <li>
                        <a href="#" className="nav-a" >Produtos
                        </a>
                        <img className="icon-dropdown" src={arrow_down_icon} />
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Na Midia</a>
                    </li>
                    <li>
                        <a href="#">Parceiros</a>
                    </li>

                        <img className="icon" src={iconlinkedin} alt="icon-linkedin" />

                        <img className="icon" src={iconfacebook} alt="icon-facebook" />
            
                        <img className="icon" src={iconyoutube} alt="icon-youtube" />
        
                </ul>
            </nav>
            
            <div className="last-row"></div>

        </header>
    )
}

export default Header;