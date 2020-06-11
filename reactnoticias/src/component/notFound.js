import React from 'react';

const NotFound = (props)=>{
    return(
        <div>
            <div class="alert alert-danger" role="alert">
                No Existe el detalle {props.id}
            </div>
            <a className="btn btn-primary" href="/" role="button">Ir a Home</a>
        </div>
    )
}

export default NotFound;