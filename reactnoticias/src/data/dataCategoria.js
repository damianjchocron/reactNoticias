function ResultToListCategoria(categorias){
    let list = [];
    categorias.forEach(element => {
        var item = {};
        item.idcategoria = element.idcategoria;
        item.nombre = element.nombre;
        list.push(item);
    });
    return list;
}


export default ResultToListCategoria;