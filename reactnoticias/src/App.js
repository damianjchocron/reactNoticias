import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './component/header';
import Footer from './component/footer';
import Detalle from './component/detalle';
import Form from './component/form';
import Home from './component/home';
import CategoriaNuevaEditar from './component/categoriaNuevaEditar';
import Categoria from './component/categoria';
import ArticulosNuevoEditar from './component/articuloNuevoEditar';
import Articulos from './component/articulos';


// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> {/* Siempre aparece porqe esta sin la etiqueta ROUTE */}
        <Route exact path="/" component={Home} />{/* Solamente aparece si esta en HOME con este PATH */}
        <Route exact path="/detalle/:id" component={Detalle} /> {/* //Route es un component que hace que a Detalle le llegue props y pueda acceder */}

        {/* Categoria routes */}

        <Route exact path="/categoria" component={Categoria} />
        <Route exact path="/categoria/nueva" component={CategoriaNuevaEditar} />
        <Route exact path="/categoria/editar/:id" component={CategoriaNuevaEditar} />

        <Route exact path="/form" component={Form} />

        {/*Articulos routes  */}
        <Route exact path="/articulos" component={Articulos} />
        <Route exact path="/articulo/nuevo" component={ArticulosNuevoEditar} />
        <Route exact path="/articulo/editar/:id" component={ArticulosNuevoEditar} />

        <Footer />{/* Siempre aparece porqe esta sin la etiqueta ROUTE */}
      </div>
    </BrowserRouter>
  );
}

export default App;
