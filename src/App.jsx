import {useState} from "react";
import "./App.css";
import {HomePage, SubcategoryPage} from "./pages";
import {AppContext} from "./AppContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
    const [context, setContext] = useState({userToken: null, theme: "light"});
    return (
        <AppContext.Provider value={{context, setContext}} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/subcategory/:id" element={<SubcategoryPage />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
