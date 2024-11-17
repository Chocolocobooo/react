import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode')

        if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
        }

    }, [])

    const handleThemeToggle = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            localStorage.setItem('themeMode' , 'light')
            document.documentElement.classList.remove('dark')
        } else {
            setIsDarkMode(true)
            localStorage.setItem('themeMode' , 'dark')
            document.documentElement.classList.add('dark')
        }
    }

    return (
    <nav className="main-nav" aria-label="main navigation">
        <a href="#main" className="skip-link">Skip to main content</a>

        <div className="container">
            <a href="index.html"><img src="Resources/logo.svg" alt=""/></a>

            <div className="darkmode-toggle">
                <p>Dark mode</p>
                <label htmlFor="darkmode-switch" className="toggle">
                    <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle}/>
                    <span className="slider"></span>
                </label>
            </div>

            <button className="menu-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
                <i className="fa-solid fa-bars"></i>
            </button>
        
            <ul id="main-menu" className="main-menu hide">
                <li>
                    <a className="nav-link" href="features">Features</a>
                    <a className='nav-link' href='contact'>Contacts</a>
                </li>
                <li>
                    <a href="a" className="btn btn-primary">
                        <i className="fa-solid fa-user"></i>
                        <span>Sign in / up</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header