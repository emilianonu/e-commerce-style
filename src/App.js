
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';
import Modal from './components/Modal/Modal';
import {useState} from 'react';

function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    //JSX
    <div className="App">
      <NavBar />
        <div className='title-up'>
          STYLE SHOP
        </div>
        <div className='general-container'>
          <CardList title={'Nuevos Productos'}/>
          <CardList title={'Nuevos Recomendados'}/>
        </div>
        <button onClick={() => setOpen(true)}>Abrir Modal</button>
        <Modal handleClose={handleClose} open={open}/>
    </div>
  );
}

export default App;
