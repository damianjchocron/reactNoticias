import React from 'react';
import Card from './card';
import NotFound from './notFound';
import AjaxRequest from './ajaxRequest';
import ResultToList from './resultToList';


class Detalle extends React.Component {
    ajax = new AjaxRequest(); //Instancia de Clase AjaxRequest
    resultToList = new ResultToList(); //Instacia de clase ResultToList QUe es el modelo
    state = {
        id: this.props.match.params.id, //Prop viene por el Routes de App y me permite acceder al (match viene dentro de el props)
        card: "" //Declaro que es un array Despues voy a pasarle elementos
    };
    listImg = [];

    componentDidMount() {
        let objRequest = {
            url: "http://localhost:8000/api/multimedia",
            data: { page: 1 },
            callBack: this.callBackMultimedia 
        };
        this.ajax.AjaxGetAll(objRequest); //LLamo a funcion de la Instacia creada arriba
    }

    callBackMultimedia = (result) => {
        this.listImg = result;
        let objRequest = {
            url: "http://localhost:8000/api/articulos",
            data: { id:this.state.id },
            callBack: this.callBackArticulo
        };
        this.ajax.AjaxGetItem(objRequest); //LLamo a funcion de la Instacia creada arriba
    }

    callBackArticulo = (result) => {
        let item = this.resultToList.Card(result, this.listImg); //LLamo a funcion de la Instacia creada arriba para asignar los valores y 
        this.setState({ 
            // viene un unico elemento
            card: item
        })
    }

    render() {
        console.log(this.props);
        var card = <NotFound />; //Por defecto le asigno el componente de No existe
        if (this.state.card) {
            let item = this.state.card;
            if (item) card = <Card obj={item} />;
        }
        return (
            <div>
                {card}
            </div>
        )
    }
}






export default Detalle;