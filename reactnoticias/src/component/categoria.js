import React from 'react';
import $ from 'jquery';
import ResultToListCategoria from '../data/dataCategoria';

class Categoria extends React.Component {
    state = {listCategoria:[]};

    render() {
        const list = this.state.listCategoria.map((item) =>
            // <Card key={item.key} obj={item}/>);
            <div className="row">
                <div className="col-1">{item.idcategoria}</div>
                <div className="col-3">{item.nombre}</div>
                <div className="col-2">
                    <a className="btn btn-primary">Editar</a>
                </div>
                <div className="col-2">
                    <a className="btn btn-primary">Borrar</a>

                </div>
            </div>
        );
        return (
            <div className="p-5">
                <button type="button" className="btn btn-primary">Nuevo</button>
                <div className="col-12">
                    <div className="col-12">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        $.ajax({
            method: "GET",
            url: "http://localhost:8000/api/categorias",
            dataType: "json",
            data: { page: 1 }
        })
            .done((result) => {
                var list = ResultToListCategoria(result);
                this.setState({
                    listCategoria: list
                });
            })
    }
}

export default Categoria;