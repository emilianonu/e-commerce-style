
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent'
import { useState } from 'react';
import ItemDetailContainer from '../Modal/Modal'
import ItemDetail from '../ItemDetail/ItemDetail';


const Modal = ({handleClose, open, children}) => {
    const [count, setCount] = useState(1)
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                {children}
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                <ItemDetailContainer/>
            </DialogContent>
        </Dialog>
    )
}

export default Modal