import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';



//UpperCamelCase ej: "NavBar"
const NavBar = () => {
    return (
        <AppBar position="static" className='header-primary'>
          <Toolbar>
            <div className='container-logo'>
              <img src="./logo.png"/>
            </div>
            <div className='lista-menu'>
              <ul>
                <li>
                  <button><Link to='/'>Inicio</Link></button>
                </li>
                <li>
                  <button>Productos</button>
                </li>
                <li>
                  <button><Link to='/Contacto'>Contacto</Link></button>
                </li>
                <li>
                  <button>Como Comprar</button>
                </li>
              </ul>
            </div>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
          
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            
          </Toolbar>
        
          
        </AppBar>
    );
}

export default NavBar