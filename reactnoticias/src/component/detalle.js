import React from 'react';
import Card from './card';

class Detalle extends React.Component {
    state = { id: 0 } //Se puede inicializar state sin constructor

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(this.props);
        this.setState({ id });
    }
    render() {
        const obj = [
            {
                key: 3,
                title: 'titulo 1',
                description: 'descripcion 1',
                alt: 'alt 1',
                src: 'https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2020/02/les-claypool-primus-live-2019.jpg',
                button: 'Detalle'
            },
            {
                key: 4,
                title: 'titulo 1',
                description: 'descripcion 1',
                alt: 'alt 1',
                src: 'https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2020/02/les-claypool-primus-live-2019.jpg',
                button: 'Detalle'
            },
            {
                key: 1,
                title: 'titulo 1',
                description: 'descripcion 1',
                alt: 'alt 1',
                src: 'https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2020/02/les-claypool-primus-live-2019.jpg',
                button: 'Detalle'
            },
            {
                key: 2,
                title: 'titulo 1',
                description: 'descripcion 1',
                alt: 'alt 1',
                src: 'https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2020/02/les-claypool-primus-live-2019.jpg',
                button: 'Detalle'
            },
        ]
    
        const { id } = this.state; //Le dice que busque este valor en el objeto state
        let item = obj[id];
        for(var i=0;i<obj.length;i++){
            var o = obj[i];
            if(o.id === id) item = o;
        }
        return (
            <div>
                <Card obj={item}/>
                detalle noticias numero {id}
            </div>
        )
    }
}


export default Detalle