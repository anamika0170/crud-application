import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Container } from "@mui/system";
import { AddUser } from "../AddUser";
import "../../globalStyle.css"

export const Header = () => {
  const [openAddUser, setAddUser]= useState(false)
  return (
    <>
      <Container sx={{textAlign:"center"}} maxWidth="sm">
          <Fab className="addUser" onClick={()=>setAddUser(true)} variant="extended" color="primary" aria-label="add">
            <AddIcon />
            Add User
          </Fab>
      </Container>
      <AddUser open ={openAddUser} onClose={()=>setAddUser(false)} setAddUser={setAddUser}/>
    </>
  );
};