
class ResultToList {

    CardAll(articulos, listImg) {
        let list = [];
        articulos.forEach(element => {
            var src = listImg.find(imagen => imagen.idarticulo === element.idarticulos);
            var item = {};

            var i = "./img/sinimagen.png";
            if (src) i = src.src;

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

    Card(articulo, listImg) {
        var src = listImg.find(imagen => imagen.idarticulo === articulo.idarticulos);
        var item = {};

        var i = "../img/sinimagen.png";
        if (src) i = src.src;

        item.title = articulo.titulo;
        item.descripcion = articulo.descripcion;
        item.alt = "alt 1";
        item.src = i;
        item.button = "Detalle";
        item.key = articulo.idarticulos;
        return item;
    }

    CategoriaAll(categorias) {
        let list = [];
        categorias.forEach(element => {
            var item = {};
            item.idcategoria = element.idcategoria;
            item.nombre = element.nombre;
            list.push(item);
        });
        return list;
    }

    ArticulosAll(articulos) {
        let list = [];
        articulos.forEach(element=>{
            var item = {};
            item.idarticulos = element.idarticulos;
            item.titulo = element.titulo;
            item.descripcion = element.descripcion;
            item.fechacreacion = element.fechacreacion;
            item.valoracion = element.valoracion;
            item.idcategoria = this.ObtenerIdCategoriaApi(element.idcategoria);
            list.push(item);
        });
        return list;
    }

    ObtenerIdCategoriaApi(value) {
        return value.split("/")[3];
    }
}

export default ResultToList;