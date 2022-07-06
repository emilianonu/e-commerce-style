
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent'
import { useState } from 'react';


const Modal = ({handleClose, open, children}) => {
    const [count, setCount] = useState(0)
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal