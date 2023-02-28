import React from "react";
import { Link } from "react-router-dom";
import ListadoTrabajos from "./ListadoTrabajos";
import "./styles/Inicio.css";

const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong> Juan Rodriguez</strong> soy Desarrollador Web en
        Bogotá Colombia, y ofrezco mis servicios de
        <strong> programacion </strong> y<strong> desarrollo</strong> en todo
        tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener mas visibilidad y
        relevancia en internet. <Link to="/contacto">Contactame!</Link>
      </h2>
      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  );
};

export default Inicio;
