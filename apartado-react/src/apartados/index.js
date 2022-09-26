import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import peticion from "./helpers/helper";
import FilaUsuario from './filaUsuario'
import './index.css';

export default function Index() {
    const [dataUsers, adminUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.sessionStorage.getItem('name') || window.sessionStorage.getItem('name')==='undefined' || registers()){
            navigate('/login');
        }
    });

    const registers = async () => {
        let respuesta = peticion('GET','users/list', '',window.sessionStorage.getItem('token'));
        if (respuesta.status === 200) {
            adminUsers(respuesta.data);
            return true;
        } else {
            window.sessionStorage.clear();
            return false
        }
    }

    return(
        <div>
            <h2>Listado de usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataUsers.map(userData => {
                            return <FilaUsuario
                                nombre={userData.nombre}
                                apellido={userData.apellido}
                                dni={userData.dni}
                                telefono={userData.telefono}
                                email={userData.email}
                                domicilio={userData.domicilio}
                                key={`usuario${userData.id}`}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
