import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    
    const obtenerUsuarios = async () => {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = await respuesta.data;
        setUsuarios(users);
    }

    useEffect(() => {
        obtenerUsuarios();
    }, []);
    
    return (
       
       
       <div>
            <h2>Lista De Usuarios</h2>
            {
                usuarios.map( ( item ) => (
                    <div>
                        <Link to={`/usuario/${item.id}`}>
                            {item.name}
                        </Link>
                    </div>
                ))
            }
       </div>





    )



}

export default Usuarios
