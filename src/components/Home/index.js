import { Avatar, Chip, Fab } from "@mui/material";
import React from "react";
import { Header } from "../Header";
import { UserList } from "../UserList";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../../globalStyle.css"
import PeopleIcon from '@mui/icons-material/People';
export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="heading" >
          <Chip avatar={<Avatar><PeopleIcon /></Avatar>} label={<h2>
            ALL USER LIST
          </h2>} />
        </div>
        <Header />
        <UserList />
      </div>
    </React.Fragment>
  );
};