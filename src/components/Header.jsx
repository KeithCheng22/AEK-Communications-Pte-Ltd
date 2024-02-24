import React from 'react'
import aekLogo from '../assets/images/AEKLOGO.png'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const activeStyles = {
        textDecoration: 'underline',
        fontWeight:' bold'
    }

    function showSideBar() {
        document.querySelector('#sidebar').style.display = 'flex'
    }

    function hideSideBar() {
        document.querySelector('#sidebar').style.display = 'none'
    }

    return(
        <header>
            <img className='aek' src={aekLogo} alt='AEK Communications logo.'></img>
            <nav className='header--nav'>
                <NavLink end to='.' id='hideOnMobile' className='nav--li nav-link-ltr '>Home</NavLink>
                <NavLink end to='about' id='hideOnMobile' className='nav--li nav-link-ltr'>About</NavLink>
                <NavLink to='products' id='hideOnMobile' className='nav--li nav-link-ltr'>Products</NavLink>
                <NavLink to='promotions' id='hideOnMobile' className='nav--li nav-link-ltr'>Promotions</NavLink>
                <NavLink end to='gallery' id='hideOnMobile' className='nav--li nav-link-ltr'>Gallery</NavLink>
                <NavLink end to='contact_us' id='hideOnMobile' className='nav--li nav-link-ltr'>Contact Us</NavLink>
                <svg id='hamburger' onClick={() => showSideBar()} xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </nav>
            
            <nav id='sidebar' className='header--nav sidebar'>
            <svg style={{padding: '10px'}} onClick={() => hideSideBar()} xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                <NavLink onClick={() => hideSideBar()} end to='.' className='nav--li nav-link-ltr'>Home</NavLink>
                <NavLink onClick={() => hideSideBar()} end to='about' className='nav--li nav-link-ltr'>About</NavLink>
                <NavLink onClick={() => hideSideBar()} to='products' className='nav--li nav-link-ltr'>Products</NavLink>
                <NavLink onClick={() => hideSideBar()} to='promotions' className='nav--li nav-link-ltr'>Promotions</NavLink>
                <NavLink onClick={() => hideSideBar()} end to='gallery' className='nav--li nav-link-ltr'>Gallery</NavLink>
                <NavLink onClick={() => hideSideBar()} end to='contact_us' className='nav--li nav-link-ltr'>Contact Us</NavLink>
            </nav>
        </header>
    )
}
