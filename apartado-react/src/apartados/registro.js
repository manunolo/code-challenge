import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./registro.css";



export default function Registro() {
  let [nombre, setName]  = useState(null);
  let [apellido, setApellido] = useState(null);
  let [dni, setDni] = useState(null);
  let [telefono, setTelefono] = useState(null);
  let [email, setEmail] = useState(null);
  let [domicilio, setDomicilio] = useState(null);
  let [message, setMessage] = useState(null);

  const confirmRegistro = async (event)=>{
    event.preventDefault(); 
    if(nombre != null || apellido != null || dni != null || telefono != null || email != null || domicilio!= null){
        await fetch("http://localhost:8080/users/register",{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                apellido,
                dni,
                telefono,
                email,
                domicilio,
                categoria: 'User'
            }),
            mode:'cors',
        }).then((respuesta)=>{
            return respuesta.json();
        }).then((resp)=>{
            setMessage("Se creo con exito su usuario");
        });
    } else {
        setMessage("Debe completar los campos")
    }
  }

  return (
    <div className="w-100 m-auto">
        <Form onSubmit={confirmRegistro} className="m-auto col-5 mt-5">
            <Form.Group className="mb-3">
                <center className="w-100"><h1>Registrate!</h1></center>
                <center className="w-100"><p>Complete los siguientes datos para su registro</p></center>
                <Form.Control
                    required
                    className="mt-3" 
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    onChange={(elemento) => setName(elemento.target.value)}
                />
                <Form.Control
                    required
                    className="mt-3" 
                    type="text"
                    id="apellido"
                    placeholder="Apellido"
                    onChange={(elemento) => setApellido(elemento.target.value)}
                />
                <Form.Control
                    required
                    className="mt-3" 
                    type="number"
                    name="dni"
                    id="dni"
                    placeholder="DNI"
                    onChange={(elemento) => setDni(elemento.target.value)}
                />
                <Form.Control
                    required
                    className="mt-3" 
                    type="number"
                    name="telefono"
                    id="telefono"
                    placeholder="Teléfono"
                    onChange={(elemento) => setTelefono(elemento.target.value)}
                />
                <Form.Control
                    required
                    className="mt-3" 
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    onChange={(element) => setEmail(element.target.value)}
                />
                <Form.Control
                    required
                    className="mt-3" 
                    type="text"
                    name="domicilio"
                    id="domicilio"
                    placeholder="Dirección"
                    onChange={(elemento) => setDomicilio(elemento.target.value)}
                />
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">Ingresar</Button>
            <Form.Text className="text-danger w-100 text-center">
                {<h3 className="">{message}</h3>}
            </Form.Text>
        </Form>
    </div>
  );
}
