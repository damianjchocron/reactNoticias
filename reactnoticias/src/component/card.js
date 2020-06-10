import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{width: '18rem'}} >
                <img src={props.obj.src} className="card-img-top" alt={props.obj.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.obj.title}</h5>
                    <p className="card-text">{props.obj.description}</p>
                    <a href="#" className="btn btn-primary">{props.obj.button}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;