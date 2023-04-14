import { Button, Divider, FormControl, Input, InputLabel, Modal, Typography, Zoom } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useContext, useEffect } from 'react';
import {toast} from 'react-toastify'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


import { GlobalContext } from '../../context/GlobalState';
import '../../globalStyle.css'

export default function EditUsers(props) {

    const { users, editUser } = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState(props.userData);

    const currentUserId = localStorage.getItem("userId")

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(
            (currentuserTraversal) => currentuserTraversal.id == parseInt(userId)
        );
        setSelectedUser(selectedUser);

    }, [currentUserId, users]);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!selectedUser.name){
            toast.error('Please Enter Name !', {
                position: toast.POSITION.TOP_CENTER,
                icon:<ErrorOutlineIcon/>,
                className: 'toast-message'
            });
        }else if(!selectedUser.number){
            toast.error('Please Enter Number !', {
                position: toast.POSITION.TOP_CENTER,
                icon:<ErrorOutlineIcon/>,
                className: 'toast-message'
            });
        }else if(!selectedUser.email){
            toast.error('Please Enter Email !', {
                position: toast.POSITION.TOP_CENTER,
                icon:<ErrorOutlineIcon/>,
                className: 'toast-message'
            }); 
        }else if(!selectedUser.address){
            toast.error('Please Enter Address !', {
                position: toast.POSITION.TOP_CENTER,
                icon:<ErrorOutlineIcon/>,
                className: 'toast-message'
            });
        }else{
            editUser(selectedUser)
            toast.success('User Updated Successfully !', {
                position: toast.POSITION.TOP_CENTER,
                icon:<CheckCircleOutlineIcon/>,
                className: 'toast-success'
              });
              props.onClose();
        }
      
    };

    const handleOnChange = (userKey, newValue) =>
        setSelectedUser({ ...selectedUser, [userKey]: newValue });

    if (!selectedUser || !selectedUser.id) {
        return <div></div>;
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modalStyle'>
                    <Box className='title'>
                        <h4>EDIT USER DETAILS</h4>
                        <Divider />
                    </Box>               
                    <form onSubmit={onSubmit}>
                        <Typography className='inputField'>
                            <FormControl variant='standard'>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                    Name
                                </InputLabel>
                                <Input
                                    value={selectedUser.name}
                                    onChange={(e) => handleOnChange("name", e.target.value)}
                                    type="text"
                                />
                            </FormControl>
                        </Typography>
                        <Typography className='inputField'>
                            <FormControl variant='standard'>
                                <InputLabel
                                >
                                    number
                                </InputLabel>
                                <Input
                                    value={selectedUser.number}
                                    onChange={(e) => handleOnChange("number", e.target.value)}
                                    type="number"
                                    placeholder="Enter location"
                                />
                            </FormControl>
                        </Typography>
                        <Typography className='inputField'>
                            <FormControl variant='standard'>
                                <InputLabel>
                                    Email
                                </InputLabel>
                                <Input
                                    value={selectedUser.email}
                                    onChange={(e) => handleOnChange("email", e.target.value)}
                                    type="text"
                                    placeholder="Enter designation"
                                />
                            </FormControl>
                        </Typography>
                        <Typography className='inputField'>
                            <FormControl variant='standard'>
                                <InputLabel >
                                    Address
                                </InputLabel>
                                <Input
                                    value={selectedUser.address}
                                    onChange={(e) => handleOnChange("address", e.target.value)}
                                    type="text"
                                    placeholder="Enter designation"
                                />
                            </FormControl>
                        </Typography>
                        <div className="buttonFlex">
                            <Button variant='contained' color='error' onClick={()=>props.onClose()}>
                               Cancel
                            </Button>
                            <Button variant='contained' color='success' type="submit">
                                Edit user
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}