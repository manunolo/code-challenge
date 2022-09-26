import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import peticion from "./helpers/helper";
import './login.css';


export default function Login() {
    let location = useNavigate();
    let [error, setError] = useState(null);
    let checkLogin = () => {
        try {
            peticion('POST','admins/login',{email, password}).then((respuesta)=>{
                if(respuesta.status === 200){
                    window.sessionStorage.setItem("token", respuesta.token);
                    location("/");
                } else {
                    setError(respuesta.data.error);
                }
            })
        } catch (error) {
          console.error(error);
        }
    };
    let [email, setEmail] = useState(null)
    let [password, setPassword] = useState(null)
    return (
        <div>
            <h1>Inicia sesion</h1>
            <form onSubmit={checkLogin}>
                <input
                    type="email"
                    required="required"
                    placeholder="E-mail"
                    id="email"
                    onChange={(element) => setEmail(element.target.value)}
                />
                <input
                    type="text"
                    required="required"
                    placeholder="Contraseña"
                    id="password"
                    onChange={(element) => setPassword(element.target.value)}
                />
                <button type="submit">Ingresar</button>
                {<h3>{error}</h3>}
            </form>
        </div>
    )
}
