import React, { createContext, useContext, useReducer } from "react";

//prepare the datalayer
export const StateContext = createContext();
//wrap our app and provide the data layer explained afterwards
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull info from dtat layer
export const useStateValue = () => useContext(StateContext);
