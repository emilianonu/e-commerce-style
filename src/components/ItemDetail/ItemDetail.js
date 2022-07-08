import ItemCount from "../ItemCount/ItemCount"
import { MenuItem } from "@mui/material"
import Select from "@mui/material"
import { useState } from "react"
import FormControl from '@mui/material/FormControl';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const ItemDetail = ({data}) => {
    console.log("Data desde ItemDetail", data)

    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return(
        <div>
            Informacion del producto
            <img src={data.image} alt={data.title} width="400" />
            <div className="detail-product-info__title">
                <h1>{data.title}</h1>
                <FavoriteBorderIcon />
            </div>
            <h2>{data.description}</h2>
            <h3>$ {data.price}</h3>
            <span>3 Cuotas sin interés de $ {data.price / 3}</span>
                <div className='color-group-selector'>
                    <button className='color-selector black'></button>
                    <button className='color-selector green'></button>
                    <button className='color-selector red'></button>
                </div>
                
                <label>Selecciona tu talle</label>
                {/*<Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    placeholder="Selecciona tu talle"
                    onChange={handleChange}
                    >
                    <MenuItem value={'s'}>S</MenuItem>
                    <MenuItem value={'m'}>M</MenuItem>
                    <MenuItem value={'l'}>L</MenuItem>
                    <MenuItem value={'xl'}>XL</MenuItem>
                    <MenuItem value={'xxl'}>XXL</MenuItem>
                </Select>*/}
            <ItemCount stock={data.stock} initial={1} />
        </div>
    )
}

export default ItemDetail