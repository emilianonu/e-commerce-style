
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home';
import Contacto from './pages/Contact';
import NotFound from './pages/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Detalle from './pages/Detalle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  


  return (
    //JSX
    <div className="App">
      
      <BrowserRouter>
        <NavBar />        
        <div className='title-up'>
          STYLE SHOP
        </div>
        <Routes>
          {/*<Route path='/Products' element={<CardList title={'Nuevos Recomendados'} products={products}/>}/>*/}
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<Detalle/>}/>
          <Route path='/Contact' element={<Contacto />}/>
          <Route path='*' element={<NotFound />}/> 
        </Routes>
      </BrowserRouter>
      <div className='general-container'>
          {/*<CardList title={'Nuevos Productos'} products={products}/>
          {/*<CardList title={'Nuevos Recomendados'} products={products}/>*/}
      </div>
      <ItemListContainer/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
