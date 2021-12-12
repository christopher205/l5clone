import React, { useState, useEffect } from "react";
import logo from '../images/logo-l5.png'
import iconlinkedin from '../images/linkedin-svgrepo-com.svg'
import iconfacebook from '../images/facebook-svgrepo-com.svg'
import iconyoutube from '../images/youtube-svgrepo-com.svg'
import arrow_down_icon from '../images/arrow-204-64.png'
import './style.css'
import { AddClass, RemoveClass } from "../utils/AddandRemoveClass";

function Header() {

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 15) {
                setScrolled(true)
                AddClass()

            } else {
                setScrolled(false)
                RemoveClass()

            }
        }
        window.addEventListener('scroll', handleScroll)
    }
    , [])

    return (
        <header className="header">
            <div className="header-row" value={scrolled} >
                <span> <a href="#"> Fale com Vendas</a> </span>
                <span> <a href="#"> Atendimento a Clientes </a></span>
            </div>
            
            <nav className="navbar">
                <a href="#">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <ul className="navbar-links">
                    <li>
                        <a href="#" className="link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="link" >Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="link" >Clientes</a>
                    </li>
                    <li>
                        <a href="#" className="link" >Produtos
                        </a>
                        <img className="icon-dropdown" src={arrow_down_icon} />
                    </li>
                    <li>
                        <a href="#" className="link" >Blog</a>
                    </li>
                    <li>
                        <a href="#" className="link" >Na Midia</a>
                    </li>
                    <li>
                        <a href="#" className="link" >Parceiros</a>
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