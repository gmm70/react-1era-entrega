import React from 'react';

const NavBar =() =>{
    return(
        <div className='bg-warning'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='logoNav' src='./GM.png'/>
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link active" href="#">Catalogo</a>
                        <a className="nav-link active" href="#">¿Quienes Somos?</a>
                    </div>
                    <div> 
                        <a className="nav-link active carritoLink  ">
                            <img className='carrito ' src='./CartWidget.svg'/>
                        </a>
                    </div>   
                </div>
                </div>
            </nav> 
        </div>
    )
}

export default NavBar