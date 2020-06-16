import React from 'react';
import Card from './card';
import AjaxRequest from './ajaxRequest';
import ResultToList from './resultToList';


class Home extends React.Component {
  
    state = {
        listCard: [] //Declaro que es un array
    };
    ajax = new AjaxRequest(); //Instancia de Clase AjaxRequest
    resultToList = new ResultToList(); //Instacia de clase ResultToList QUe es el modelo
    listImg = [];

    render() {
        const list = this.state.listCard.map((item) => <Card key={item.key} obj={item} />);
        return (
            <div className="row">
                {list}
            </div>
        );
    };

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
            data: { page: 1 },
            callBack: this.callBackArticulo
        };
        this.ajax.AjaxGetAll(objRequest); //LLamo a funcion de la Instacia creada arriba
    }

    callBackArticulo = (result) => {
        let list = this.resultToList.CardAll(result, this.listImg); //LLamo a funcion de la Instacia creada arriba para asignar los valores y 
        this.setState({ 
            /* Viene un array */
            listCard: list
        })
    }
}

export default Home;