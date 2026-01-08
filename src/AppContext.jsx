import {createContext} from "react";

export const AppContext = createContext({userToken: null, theme: "light"});