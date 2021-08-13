import React,{useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const validar = ( event ) =>{
        event.preventDefault()
        console.log('Push boton');
        if ( !nombre.trim() ){
            console.log('El nombre esta Vacio!!');
            return
        }
        if ( !edad.trim() ){
            console.log('La Edad esta vacia!!');
            return
        }
    }

    return (
        <div className="container">
            <label>Formulario</label>
            <form onSubmit={validar} className="form-grup">

                <input 
                    placeholder="Ingrese Nombre" 
                    className="form-control mb-3" 
                    type="text"
                    //Tomamos el valor del Input y lo setemaos en nombre
                    onChange={ (e)=>{setNombre(e.target.value)}}
                />
                
                <input 
                    placeholder="Ingrese Edad" 
                    className="form-control mb-3" 
                    type="text"
                    //Tomamos el valor del Input y lo setemaos en edad
                    onChange={ (e)=>{setEdad(e.target.value)}}
                />
                
                <input 
                    className="btn btn-info btn-block" 
                    type="submit" 
                />

            </form>
        </div>
    )
}

export default Formulario;