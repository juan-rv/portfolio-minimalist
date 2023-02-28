import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "../components/Contacto";
import Curriculum from "../components/Curriculum";
import Inicio from "../components/Inicio";
import Footer from "../components/layout/Footer";
import HeaderNav from "../components/layout/HeaderNav";
import Portafolio from "../components/Portafolio";
import Proyecto from "../components/Proyecto";
import Servicios from "../components/Servicios";

const Rutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />

      {/* Contenido Central  */}
      <section className="contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />

          <Route
            path="*"
            element={
              <div className="page">
                <h1 className="heading">Error 404</h1>
              </div>
            }
          />
        </Routes>
      </section>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
