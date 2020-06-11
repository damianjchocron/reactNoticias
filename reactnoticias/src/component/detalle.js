import React from 'react';
import Card from './card';
import NotFound from './notFound';
import ResultToListCard from '../data/dataCard';
import $ from 'jquery';

class Detalle extends React.Component {
    state = {
        id: this.props.match.params.id, //Prop viene por el Routes de App y me permite acceder al
        listCard: [] //Declaro que es un array
    };

    componentDidMount() { //Esto se ejecuta ultimo de todo
        $.ajax({
            method: "GET",
            url: "http://localhost:8000/api/multimedia",
            dataType: "json",
            data: { page: 1 }
        })
            .done((result) => {
                var listImg = result;
                $.ajax({
                    method: "GET",
                    url: "http://localhost:8000/api/articulos",
                    dataType: "json",
                    data: { page: 1 }
                })
                    .done((result) => {
                        var list = ResultToListCard(result, listImg);
                        this.setState({
                            listCard: list
                        });
                    })
            })
    }

    render() {
        console.log(this.props);
        let { id } = this.state;
        var card = <NotFound />; //Por defecto le asigno el componente de No existe
        if (this.state.listCard.length > 0) {
            let item = this.state.listCard.find(element => element.key == id);
            if (item) card = <Card obj={item} />;
        }
        return (
            <div>
                {card}
            </div>
        )
    }
}


export default Detalle