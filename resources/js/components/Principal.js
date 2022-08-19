
import React from 'react';
import ReactDOM from 'react-dom';

import Slide1 from '../../images/Slide1.jpg';
import Slide2 from '../../images/Slide2.jpg';
import Slide3 from '../../images/Slide3.jpg';
import Concepto from '../../images/Concepto.png';
import Desarrollo from '../../images/Desarrollo.png';

export default function Principal() {
    return (
        <div className='container'>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={Slide1} className="d-block w-80" alt=""></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={Slide2} className="d-block w-80" alt="..."></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={Slide3} className="d-block w-80" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto"
                id="intro">
                <h1 className="p-3 fs-2 border-top border-3">Una pagina web para agilizar su medio de trabajo</h1>
                <p className="p-3  fs-4">
                    <span className="text-primary">Easy-Access</span> es la que usted necesita para gestionar, agilizar y administrar toda
                    su area de trabajo.
                </p>
            </section>
            <section className="w-100">
                <div className="row w-75 mx-auto" id="servicios-fila-1">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
                        <img src={Concepto} alt="..." width="140" height="120"></img>
                        <div>
                            <h3 className="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
                            <p className="px-4">Desarrollo de la base de datos para la gestion de personal.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
                        <img src={Desarrollo} alt="..." width="140" height="120"></img>
                        <div>
                            <h3 className="fs-5 mt-4 px-4 pb-1 icono-wrap">Plantillas</h3>
                            <p className="px-4">Diseño, Conceptualización e Implementación para sus areas de trabajo.</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

if (document.getElementById('bienvenida')) {
    ReactDOM.render(<Principal />, document.getElementById('bienvenida'));
}