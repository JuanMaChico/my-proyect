import React from 'react'



function Card( props ) {
    
    const { imagen, titulo, texto } = props;
    
    return (
            <div className='card' style={{width:"200rem"}} >
                <img src={ imagen } className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title' >{ titulo }</h5>
                    <p className='card-text'>{ texto }</p>
                    <a href="#" className='btn btn-primary'>Ver Mas</a>
                </div>
            </div>
    );
};

export default Card
