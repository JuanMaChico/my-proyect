import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from 'react-router-dom';

const Usuario = () => {

    const [usuario, setUsuario] = useState([]);

    const {id} = useParams();

    const obtenerUsuario = async () => {
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const users = await respuesta.data;
        setUsuario(users);
    }

    useEffect(() => {
        obtenerUsuario();
    }, []);

    return (
        <div>
            <h4>Usuario</h4>
            <li>Id: {usuario.id} - Nombre: {usuario.name}</li>
        </div>
    )
}

export default Usuario
