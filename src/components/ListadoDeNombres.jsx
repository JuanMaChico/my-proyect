import React, { useState } from 'react'
import uniqid from 'uniqid';

const ListadoDeNombres = () => {

    const [nombre, setNombre] = useState('');
    const [listanombres, setListaNombres] = useState([]);

    const addNombres = (e) => {
        e.preventDefault();
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaNombres([...listanombres, nuevoNombre]);
        setNombre('');
    }
    const deleteNombre = (id) =>{
        const nuevoArray = listanombres.filter(item => item.id !== id);
        setListaNombres(nuevoArray);
    }

    return (

        <div>
            <h2>Aplicacion de Crud basica</h2>

            <div className="row">

                <div className="col">
                    <h2>Listado De Nombres</h2>
                    <ul className="list-group">
                        {
                            listanombres.map( item =>
                                <li 
                                    key="item.id" 
                                    className="list-group-item">{item.tituloNombre}
                                    <bottom onClick={() => {deleteNombre(item.id)}} className="btn btn-outline-danger float-end">Borrar</bottom>
                                </li> 
                            )
                        }
                    </ul>
                </div>

                <div className="col">
                    <h2>Formulario Para añadir nombres</h2>

                    <form onSubmit={(e) => addNombres(e)} className="form-group">

                        <input 
                            onChange={(e)=>{ setNombre(e.target.value) }} 
                            className="form-control mb-3" type="text" 
                            placeholder="Introduce Nombre"
                            value={nombre}
                        />

                        <input 
                            className="btn btn-info btn-block" 
                            type="submit" 
                            alue="Registrar Nombre" 
                        />
                    
                    </form>
                </div>

            </div>

        </div>

    )
}
export default ListadoDeNombres;