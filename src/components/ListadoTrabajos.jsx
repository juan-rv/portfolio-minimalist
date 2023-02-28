import React from "react";
import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import "./styles/Portafolio.css";

const ListadoTrabajos = ({ limite }) => {
  return (
    <section className="works">
      {trabajos.slice(0, limite).map((trabajo) => (
        <article key={trabajo.id} className="work-item">
          <div className="mask">
            <img src={"/images/" + trabajo.id + ".png"} />
          </div>
          <span>{trabajo.categorias}</span>
          <h2>{trabajo.nombre}</h2>
          <h3>{trabajo.teconologias}</h3>
          <Link to={"/proyecto/" + trabajo.id}>Visita la pagina web</Link>
        </article>
      ))}
    </section>
  );
};

export default ListadoTrabajos;
