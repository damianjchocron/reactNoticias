import React from 'react';
import Common from './common';
import AjaxRequest from './ajaxRequest';

class CategoriaNuevaEditar extends React.Component {
    constructor(props) {
        super(props)

        /* Declaro las instancias de las class que voy a utilizar */
        this.ajax = new AjaxRequest(); //clase que tiene las peticiones ajax
        this.common = new Common(); //clase que tiene la fecha iso

        /* Cuando el state esta dentro de el constructor va con this */
        this.state = {
            nombre: "",
            msj: false,
            id: this.props.match.params.id,
        }

        /* Muy bien no entiendo esto pero creo que informa el evento qe le pase por el onChange */
        this.handleInputChange = this.handleInputChange.bind(this); //Manejador de input en el cambio. Que hace el .bind ??
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    render() {

        let msj = "";

        if (this.state.msj) {
            msj = <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
                     </div>
        }

        return (
            <div className="row p-5">
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" onChange={this.handleInputChange} value={this.state.nombre}></input>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary" onClick={this.handleButtonClick}>Guardar</button>
                    <a className="btn btn-primary m-5" href="/categoria">Volver</a>
                </div>
                <div>
                    {msj}
                </div>
            </div>
        )
    }


    componentDidMount() {
        //Si viene id en URL
        if (this.state.id) {
            let objRequest = {
                url: "http://localhost:8000/api/categorias",
                data: { id: this.state.id },
                callBack: this.callBackCategoria
            };
            this.ajax.AjaxGetItem(objRequest); //LLamo a funcion de la Instacia creada arriba
        }
    }

    callBackCategoria = (result) => {
        /* Asigna nuevo valor a la categoria */
        this.setState({
            nombre: result.nombre
        })
    }

    handleInputChange(event) {
        /* Tomo el objeto qe lanzo el evento */
        const target = event.target;

        /* Tomo el valor de el objeto qe lanzo el evento */
        const value = target.value;

        /* Tomo el name de el objeto qe lanzo el evento (nombre) */
        const name = target.name;

        this.setState({
            /* De forma dinamica agarra el name de cada input para poder utilizarlo en otros lados */
            /* [] Esto dice qe es una variable */
            [name]: value
        })
    }

    handleButtonClick = (event) => {
        var fecha = this.common.FechaActualISO();
        var objItem = { nombre: this.state.nombre, fechacreacion: `${fecha}` };
        var obj = {
            url: "http://localhost:8000/api/categorias",
            data: objItem,
            callBack: this.CallBackGuardar
        }
        if (this.state.id) {
            /* editar (si viene el id)*/
            this.ajax.AjaxPutItem(this.state.id, obj);
        } else {
            /* Si no Guarda */
            this.ajax.AjaxPost(obj);
        }
    }

    CallBackGuardar = (result) => {
        this.setState({
            msj: true,
        })
    }
}

export default CategoriaNuevaEditar;