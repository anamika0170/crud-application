import React, { createContext, useEffect, useReducer } from 'react';

import appReducer from './AppReducer';
import { ADD_FAVOURITE, ADD_USER, EDIT_USER,REMOVE_USER } from './constants';

const initialState = {
  users: [
    {
      id:1,
      name:"Example",
      number:1234567890,
      email:"Example@gmail.com",
      address:"xyz colony"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, () => {
    const localData  = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [state]);

  function addUser(user) {
    dispatch({
      type: ADD_USER,
      payload: user
    });
  }

  function editUser(user) {
    dispatch({
      type: EDIT_USER,
      payload: user
    });
  }

  function removeUser(id) {
    dispatch({
      type: REMOVE_USER,
      payload: id
    });
  }

  function addFavourite(user) {
    dispatch({
      type: ADD_FAVOURITE,
      payload: user
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        addUser,
        editUser,
        removeUser,
        addFavourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
