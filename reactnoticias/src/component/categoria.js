import React from 'react';
import AjaxRequest from './ajaxRequest';
import ResultToList from './resultToList';


class Categoria extends React.Component {
    /* Siempre en el constructor todo va con THIS */
    constructor(props) {
        super(props);
        this.ajax = new AjaxRequest();//Instancia de la clase qe tiene las peticones ajax
        this.resultToList = new ResultToList(); //Instancia de el model
        this.idborrado = "";
        this.state = {
            listCategoria: [],
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
                Borrado con exito
                     </div>
        };

        //Declara variable que despuesmete en el return
        const list = this.state.listCategoria.map((item) => //ITERA por cada elemento
            <div className="row" key={item.idcategoria}>
                <div className="col-1">{item.idcategoria}</div>
                <div className="col-3">{item.nombre}</div>
                <div className="col-2">
                    <a href={"/categoria/editar/" + item.idcategoria} className="btn btn-primary">Editar</a>
                </div>
                <div className="col-2">
                    <button type="button" onClick={this.handleClickBorrar} id={item.idcategoria} className="btn btn-danger">Borrar</button>
                </div>

            </div>
        );

        return (
            <div className="p-5">
                <a href="/categoria/nueva" className="btn btn-primary">Nuevo</a>
                <div className="col-12">
                    <div className="col-12">
                        {list}
                    </div>
                </div>
                <div className="m-5">
                    {msj}
                </div>
            </div>
        )
    }
    /* Se llama cuando se termina de crear el render */
    componentDidMount() {
        let objRequest = {
            url: "http://localhost:8000/api/categorias",
            dalta: { page: 1 },
            callBack: this.callBackCategoria
        };
        this.ajax.AjaxGetAll(objRequest);
    }

    /* Lo dispara cuando se termina de hacer la peticion ajax */
    callBackCategoria = (result) => {
        let list = this.resultToList.CategoriaAll(result);
        this.setState({
            /* Asigna al estado el array con las categorias */
            listCategoria: list
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
            url: "http://localhost:8000/api/categorias",
            data: objItem,
            callBack: this.callBackDeleteCategoria
        };
        this.ajax.AjaxDeleteItem(objRequest); //LLamo a funcion de la Instacia creada arriba
    }

    callBackDeleteCategoria = (result) => {
        console.log(this.state.idborrado);

        let list = this.state.listCategoria;
        let item = list.find(element => element.idcategoria === this.state.idborrado);
        list.splice(item, 1);

        this.setState({
            listCategoria: list,
            msj: true,
        });
    }
}

export default Categoria;