import React, { useState } from "react";
import peticion from './helpers/helper';
import "./registro.css";



export default function Registro() {
  let [nombre, setName]  = useState(null);
  let [apellido, setApellido] = useState(null);
  let [dni, setDni] = useState(null);
  let [telefono, setTelefono] = useState(null);
  let [email, setEmail] = useState(null);
  let [domicilio, setDomicilio] = useState(null);

  function confirmRegistro(){
    let respuesta = peticion("users/register",{
        nombre,
        apellido,
        dni,
        telefono,
        email,
        domicilio,
        categoria: 'User'
    }).then((respuesta)=>{
        if(respuesta.data.status){

        }
    });
  }

  function clickRegistro() {
    console.log('registro')
  }


  return (
    <div className="registerForm">
      <div className="register">
        <h1>Registrate!</h1>
        <p>Complete los siguientes datos para su registro</p>
        <form method="POST" onSubmit={confirmRegistro}>
          <div>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              required="required"
              onChange={(elemento) => setName(elemento.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="apellido"
              placeholder="Apellido"
              required="required"
              onChange={(elemento) => setApellido(elemento.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              name="dni"
              id="dni"
              placeholder="DNI"
              required="required"
              onChange={(elemento) => setDni(elemento.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              name="telefono"
              id="telefono"
              placeholder="Teléfono"
              required="required"
              onChange={(elemento) => setTelefono(elemento.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required="required"
              onChange={(elemento) => setEmail(elemento.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="domicilio"
              id="domicilio"
              placeholder="Dirección"
              required="required"
              onChange={(elemento) => setDomicilio(elemento.target.value)}
            />
          </div>
          <div>
            <button type="submit" onClick={clickRegistro}>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}
