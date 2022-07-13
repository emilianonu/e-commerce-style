
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home';
import Contacto from './pages/Contact';
import NotFound from './pages/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Detalle from './pages/Detalle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductList from './pages/ProductList';
import ThemeProvider from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

function App() {
  


  return (
    //JSX
    < div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/product/:id' element={<Detalle/>}/>
              <Route path='/contact' element={<Contacto />}/>
              <Route path='/products/:category' element={<ProductList/>}/>
              <Route path='*' element={<NotFound />}/> 
            </Routes>
          </BrowserRouter>
        {/*<ItemListContainer/>
        <ItemDetailContainer />*/}
        </ThemeProvider>
      </CartProvider>
      
      
    </div>
  );
}

export default App;
