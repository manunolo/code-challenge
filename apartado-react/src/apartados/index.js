import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilaUsuario from './filaUsuario'
import Table from 'react-bootstrap/Table';
import peticion from './helpers/helper'
import './index.css';

export default function Index() {
    const [dataUsers, adminUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.sessionStorage.getItem('token')){
            return navigate('/login');
        }
        const registers = async () => {
            peticion('users/list','GET').then(response => {
                adminUsers(response);
            });
        }

        registers();
    }, []);

    return(
        <div>
            <h2>Listado de usuarios</h2>
            <Table striped bordered hover>
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
            </Table>
        </div>
    );
}
