import React from "react";
import "./styles/Servicios.css";

const Servicios = () => {
  return (
    <div className="page">
      <h1 className="heading">Servicios</h1>
      <section className="services">
        <article className="service">
          <h2>Diseño web</h2>
          <p>Hago que tu página se vea bonita</p>
        </article>
        <article className="service">
          <h2>Desarrollo Web</h2>
          <p>Creo tu página web desde cero</p>
        </article>
        <article className="service">
          <h2>Posicionamiento web</h2>
          <p>Hago que tu web aparezca en google y la vea la gente</p>
        </article>
      </section>
    </div>
  );
};

export default Servicios;
