
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';
import productos from './utilidades/productsMock';
import {useState, useEffect} from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
 

  
    

    const getProducts = () => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(productos)
        }, 4000)
      })
    }
    useEffect(() => {
      getProducts()
      .then((response) => {
        setProducts(response)
      })
      .catch((err) => {
        console.log(err)
        })
      .finally(() => {

      })
      }, [])


  return (
    //JSX
    <div className="App">
      <NavBar />
        <div className='title-up'>
          STYLE SHOP
        </div>
        <div className='general-container'>
          <CardList title={'Nuevos Productos'} products={products}/>
          <CardList title={'Nuevos Recomendados'} products={products}/>
        </div>
        <ItemDetailContainer />
    </div>
  );
}

export default App;
