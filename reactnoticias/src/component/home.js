import React from 'react';
import Card from './card';
import ListCard from '../data/dataCard';
import ResultToListCard from '../data/dataCard';
import $ from 'jquery';


class Home extends React.Component {


    state = {
        listCard: [] //Declaro que es un array
    };


    render() {
        const list = this.state.listCard.map((item)=> <Card key={item.key} obj={item}/>);
        return (
            <div className="row">
                {list}
            </div>
        );
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
                    });
            });
    };

}

export default Home;