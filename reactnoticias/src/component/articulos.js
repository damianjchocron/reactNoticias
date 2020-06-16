import React from 'react';
import AjaxRequest from './ajaxRequest';
import ResultToList from './resultToList';


class Articulos extends React.Component {
    /* Siempre en el constructor todo va con THIS */
    constructor(props) {
        super(props);
        this.ajax = new AjaxRequest();//Instancia de la clase qe tiene las peticones ajax
        this.resultToList = new ResultToList(); //Instancia de el model
        this.idborrado = "";
        this.state = {
            listArticulos: [],
            msj: false
        }
            ; //Declaracion de estado inicial
        /* Bindea el boton */
        this.handleClickBorrar = this.handleClickBorrar.bind(this);
    }
    render() {
        let msj = "";

        if (this.state.msj) {
            msj = <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
                     </div>
        }

        //Declara variable que despuesmete en el return
        const list = this.state.listArticulos.map((item) => //ITERA por cada elemento
            <div className="row" key={item.idarticulos}>
                <div className="col-1">{item.idarticulos}</div>
                <div className="col-3">{item.titulo}</div>
                <div className="col-3">{item.descripcion}</div>
                <div className="col-2">
                    <a href={"/articulo/editar/" + item.idarticulos} className="btn btn-primary">Editar</a>
                </div>
                <div className="col-2">
                    <button type="button" onClick={this.handleClickBorrar} id={item.idarticulos} className="btn btn-danger">Borrar</button>
                </div>
            </div>
        );

        return (
            <div className="p-5">
                <a href="/articulo/nuevo" className="btn btn-primary">Nuevo</a>
                <div className="col-12">
                    <div className="col-12">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
    /* Se llama cuando se termina de crear el render */
    componentDidMount() {
        let objRequest = {
            url: "http://localhost:8000/api/articulos",
            dalta: { page: 1 },
            callBack: this.callBackArticulos
        };
        this.ajax.AjaxGetAll(objRequest);
    }

    /* Lo dispara cuando se termina de hacer la peticion ajax */
    callBackArticulos = (result) => {
        let list = this.resultToList.ArticulosAll(result);
        this.setState({
            /* Asigna al estado el array con las Articulos */
            listArticulos: list
        })
    }

    /* Se dispara cuando haces click en borrar */
    handleClickBorrar(event) {
        const target = event.target;
        const id = target.id
        this.idborrado = id;
        /* Esto no funciona !!!!!!!!!!!!! */
        var objItem = { id: id }
        let objRequest = {
            url: "http://localhost:8000/api/articulos",
            data: objItem,
            callBack: this.callBackDeleteArticulo
        };
        this.ajax.AjaxDeleteItem(objRequest); //LLamo a funcion de la Instacia creada arriba
    }

    callBackDeleteArticulo = (result) => {
        console.log(this.state.idborrado);

        let list = this.state.listArticulos;
        let item = list.find(element => element.idarticulos === this.state.idborrado);
        list.splice(item,1);

        this.setState({
            listArticulos: list,
            msj: true,
        });
    }
}

export default Articulos;