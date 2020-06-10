import React from 'react';
import Card from './card';

const Home = () => {
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

    const list = obj.map((item)=> {
       return <Card key={item.key} obj={item} />

    })


    return (
        <div>
            {list}
        </div>
    )
}

export default Home;