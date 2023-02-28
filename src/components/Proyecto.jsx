import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import "./styles/Proyecto.css";

const Proyecto = () => {
  const params = useParams();
  const [proyecto, setProyecto] = useState({});

  useEffect(() => {
    let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id); //filtrame unicamente a los trabajos el cual el id sea igual al que se pasa por url
    setProyecto(proyecto[0]);
  }, []);

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".png"} />
      </div>
      <h1 className="heading"> Proyecto: {proyecto.nombre}</h1>
      <p>{proyecto.teconologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={"https://" + proyecto.url} target="_blank">
        Ir al proyecto
      </a>
    </div>
  );
};

export default Proyecto;
