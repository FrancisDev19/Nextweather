import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-transparent container">
            <a href="/" className="navbar-brand font-weight-bold">NextWeather</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="https://github.com/FrancisDev19">Github</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
