import React from 'react'

export default function NavBar() {
    return (

        <div className = "container">
            <nav className = "navbar navbar-expand-lg main-nav px-0">
                <a className ="navbar-brand" href="/mojo">
                    <img src="http://rajeshdas.com/assets/images/logo.svg" alt="rajeshdas.com"></img>
                </a>

                <button className ="navbar-toggler" type = "button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded= "false" aria-label="Toggle navigation">
                    <span className="icon-bar icon-bar-1"></span>
                    <span className="icon-bar icon-bar-2"></span>
                    <span className="icon-bar icon-bar-3"></span>
                </button>
                <div className="collaspe navbar-collapse" id="mainMenu">
                    <ul>
                        <li>
                            <a href="#home" className="active active-first">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


    
    )
}
