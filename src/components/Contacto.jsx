import React from "react";
import "./styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <form className="contact" action="juanrodriguez9502@gmail.com">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Motivo de contacto" />
        <input className="but" type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default Contacto;
