import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';


const CartIcon = () => {
     return(
      <IconButton className='cartWidget'>
         <ShoppingCartIcon color="secondary"/>
      </IconButton>
        )
 }

 export default CartIcon