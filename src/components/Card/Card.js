import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const CardItem = ({image, title, price, stock, id}) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    return(
        <Card sx={{ minWidth: 275 }} className='card-item-container'>
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`/${image}`} alt={"producto"}/> 
                        <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/product/${id}`}>Ver Detalle</Link>
                        </Button>
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>$ {price}</span>
                        </div>
                        <div className='color-group-selector'>
                            <button className='color-selector black'></button>
                            <button className='color-selector green'></button>
                            <button className='color-selector red'></button>
                        </div>
                    </div>
                </div>
            </CardContent>
            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} alt={"producto"}/>
            </Modal>
        </Card>
    )
}

export default CardItem