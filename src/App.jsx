// src/App.jsx
import React, {useState} from 'react';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/Carousel.jsx';
import TypewriterComponent from './components/TypewriterComponent.jsx';
import Events from './components/Events.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FiltroEventos from './components/FiltrarEvento.jsx';

const App = () => {
    const [filtros, setFiltros] = useState({
        categoria: '',
        ubicacion: '',
        fechaInicio: '',
        fechaFin: ''
    });

    return (
        <>
            <Navbar/>

            {/* Carrusel de imágenes */}
            <Carousel/>

            {/* Texto animado */}
            <TypewriterComponent/>

            {/* Icono filtrar */}
            <FiltroEventos onFiltroChange={setFiltros}/>

            {/* Listado de eventos */}
            <Events filtros={filtros}/>

            {/* Toast notifications */}
            <ToastContainer position="top-right" autoClose={3000}/>
        </>
    );
};

export default App;
