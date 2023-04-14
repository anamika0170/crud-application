import { Box, Button, Divider, Fab, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Zoom } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { GlobalContext } from '../../context/GlobalState';
import EditUsers from '../EditUser';
import "../../globalStyle.css"


export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
    address: ""
  })
  const onClickUserEdit = async (id, record) => {
    setOpenEdit(true)
    localStorage.setItem("userId", String(id))
    setUser({
      id: record.id,
      name: record.name,
      location: record.location,
      designation: record.designation,
    })
  };

  return (
    <React.Fragment>
      {users.length > 0 ? (
        <React.Fragment>
          <Container sx={{ marginTop: "20px" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "black" }}>
                <TableRow>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>S.NO</TableCell>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>Number</TableCell>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>Address</TableCell>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>Edit</TableCell>
                  <TableCell sx={{ color: "white !important", fontWeight: "bold" }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.number}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>  <Fab onClick={() => onClickUserEdit(user.id, user)} color="secondary" aria-label="edit">
                      <EditIcon />
                    </Fab></TableCell>
                    <TableCell><Fab onClick={handleOpen} color="error" aria-label="edit">
                      <DeleteForeverIcon />
                    </Fab></TableCell>

                    <Modal
                      open={open}
                      onClose={handleClose}
                    >
                      <Box className='deleteModal'>
                        <Box className='heading'>
                          <h4>ARE YOU SURE YOU WANT TO DELETE USER</h4>
                          <Divider />
                        </Box>
                        <Box className='buttonFlex'>
                          <Button variant='contained' color='success' onClick={() => setOpen(false)}>Cancle</Button>
                          <Button variant='contained' color='error' onClick={() => {
                            removeUser(user.id)
                            setOpen(false)
                            toast.success('User Deleted Successfully !', {
                              position: toast.POSITION.TOP_CENTER,
                              icon: <CheckCircleOutlineIcon />,
                              className: 'toast-success'
                            });
                          }}>Delete</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </Container>
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
      <EditUsers open={openEdit} onClose={() => setOpenEdit(false)} userData={user} />
    </React.Fragment>
  );
};