import './ItemCount.css'
import { useState } from "react"
import { Button } from '@mui/material';

const ItemCount = ({stock}) => {
        const [count, setCount] = useState(1);
        const addCount = () => {
            stock > count && setCount(count + 1);
        }
        const subsCount = () => {
            count > 1 && setCount(count - 1);
        }

        const agregar = () => {
            console.log(count);
        }
        return (
            <>
                <div className="itemCount">
                    <Button size="small" variant="outlined" onClick={subsCount}>-</Button>
                    <p>{count}</p>
                    <Button size="small" variant="outlined" onClick={addCount}>+</Button>
                
                </div>
                <button className="addcart" onClick={agregar}>Agregar al carrito</button>
            </>
        );
    }

export default ItemCount

