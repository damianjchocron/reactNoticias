import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './component/header';
import Footer from './component/footer';
import Detalle from './component/detalle';
import Form from './component/form';
import Home from './component/home';


// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route  path="/detalle/:id" component={Detalle}/> {/* De donde saca el id??? */}
      <Route  path="/form" component={Form}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
