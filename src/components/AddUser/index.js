import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Divider, FormControl, Input, InputAdornment, InputLabel, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import "../../globalStyle.css";
import { toast } from 'react-toastify'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { GlobalContext } from '../../context/GlobalState';
export const AddUser = (props) => {

  const { addUser, users } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");



  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      number,
      email,
      address
    };
    if (!newUser.name) {
      toast.error('Please Enter Name !', {
        position: toast.POSITION.TOP_CENTER,
        icon: <ErrorOutlineIcon />,
        className: 'toast-message'
      });
    } else if (!newUser.number) {
      toast.error('Please Enter Number !', {
        position: toast.POSITION.TOP_CENTER,
        icon: <ErrorOutlineIcon />,
        className: 'toast-message'
      });
    } else if (newUser.number.length < 10) {
      toast.error('Please Enter valid Number !', {
        position: toast.POSITION.TOP_CENTER,
        icon: <ErrorOutlineIcon />,
        className: 'toast-message'
      });
    } else if (!newUser.email) {
      toast.error('Please Enter Email !', {
        position: toast.POSITION.TOP_CENTER,
        icon: <ErrorOutlineIcon />,
        className: 'toast-message'
      });
    } else if (!newUser.address) {
      toast.error('Please Enter Address !', {
        position: toast.POSITION.TOP_CENTER,
        icon: <ErrorOutlineIcon />,
        className: 'toast-message'
      });
    } else {
      addUser(newUser);
      toast.success('User Added Successfully !', {
        position: toast.POSITION.TOP_CENTER,
        icon: <CheckCircleOutlineIcon />,
        className: 'toast-success'
      });
      props.onClose()
    }
   
    setName("")
    setNumber("")
    setEmail("")
    setAddress("")
  };

  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <Box className='modalStyle'>
          <Box className='title'>
            <h4>ADD USER DETAILS</h4>
            <Divider />
          </Box>
          <Typography className='inputField'>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Enter Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
              />
            </FormControl>
          </Typography>
          <Typography className='inputField'>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Enter Number
              </InputLabel>
              <Input
                fullWidth
                id="input-with-icon-adornment"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Enter location"
              />
            </FormControl>
          </Typography>
          <Typography className='inputField'>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Enter Email
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter designation"
              />
            </FormControl>
          </Typography>
          <Typography className='inputField'>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Enter Address
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter designation"
              />
            </FormControl>
          </Typography>
          <form onSubmit={onSubmit}>
            <div className="buttonFlex">

              {/* </div> */}
              <Button variant='contained' color='error' onClick={() => props.onClose()}>
                Cancel
              </Button>
              <Button type='submit' variant='contained' color='success'>
                Add User
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};