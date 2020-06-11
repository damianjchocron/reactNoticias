function ResultToListCard(result, listImg){
    let list = [];
    result.forEach(element => {
        var src = listImg.find(imagen=>imagen.idarticulo==element.idarticulos);
        var item = {};

        var i = "./img/sinimagen.png";
        if(src) i = src.src; 

        item.title = element.titulo;
        item.descripcion = element.descripcion;
        item.alt = "alt 1";
        item.src = i;
        item.button = "Detalle";
        item.key = element.idarticulos;
        console.log(element);
        list.push(item);
    });
    return list;
}


export default ResultToListCard;