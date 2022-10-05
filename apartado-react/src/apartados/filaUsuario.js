import React from 'react';
import './filaUsuario.css';

export default function FilaUsuario(userData) {
    return (
        <tr>
            <td>{userData.nombre}</td>
            <td>{userData.apellido}</td>
            <td>{userData.dni}</td>
            <td>{userData.telefono}</td>
            <td>{userData.email}</td>
            <td>{userData.domicilio}</td>
        </tr>
    )
}