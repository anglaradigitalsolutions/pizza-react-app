import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../features/counter/cart";

export const Confirmation = (props) => {

    const [open, setOpen] = useState(props.isOpen);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.onClose();
    };

    const onConfirm = ()=>{
        dispatch(deleteItem(props.pizzaDetail.id));
        // setTimeout(()=>{
            handleClose();
        // }, 500)
    }
    return (
        <Dialog open={props.isOpen} onClose={handleClose}>
            <DialogTitle className='customize-section-title'>Confirm</DialogTitle>
            <DialogContent style={{minWidth:'300px'}}>
                <DialogContentText>
                    Please Confirm!! <br/>
                    Are you sure??
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onConfirm}>Remove</Button>
            </DialogActions>
        </Dialog>
    )
}
