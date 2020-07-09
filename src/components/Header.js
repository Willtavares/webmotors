import React from 'react';
import logo from '../images/webmotors_logo_tiny.png'

import './header.css'

export default () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="Webmotors | Compra e venda de carros e motos novos e usados"/>
        </div>
    )
}