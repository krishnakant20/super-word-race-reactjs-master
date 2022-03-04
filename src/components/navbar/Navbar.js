import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0 navbarFlex mx-5">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Welcome to Super Word Typing Game</a>
                            </li> */}
                            <div>Welcome to</div>
                            <div id='gameName'> "Super Word Typing Game"</div>
                            <div> by Developer: Krishnakant Pawar</div>
                            
                            
                            
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar