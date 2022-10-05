import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';


export default function Login() {
    const location = useNavigate();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const checkLogin = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:8080/admins/login',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
                mode: "cors",
            }).then((respuesta) => {
                return respuesta.json()
            }).then((respuesta)=>{
                if(respuesta.status == 200){
                    window.sessionStorage.setItem("token", respuesta.token);
                    location("/");
                } else {
                    console.log(respuesta);
                    setError(respuesta.data.error);
                }
            })
        } catch (error) {
          console.error(error);
        }
    };
    return (
        <div className="w-100 row">
            <div className="m-auto col-5 mt-5">
                <Form.Group className="mb-3">
                    <h1>Inicia sesion</h1>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        required="required"
                        placeholder="E-mail"
                        id="email"
                        onChange={(element) => setEmail(element.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        required="required"
                        placeholder="Contraseña"
                        id="password"
                        onChange={(element) => setPassword(element.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" className="w-100" onClick={checkLogin}>Ingresar</Button>
                <Form.Text className="text-muted">
                    {<h3>{error}</h3>}
                </Form.Text>
            </div>
        </div>
    )
}
