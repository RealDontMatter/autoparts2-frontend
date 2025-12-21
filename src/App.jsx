import {
    ModalLayout,
    Login,
    Header
} from "./components";
import {useState} from "react";
import "./App.css";

function App() {

    const [isLoginOpen, setIsLoginOpen] = useState(true);

    return (
        <>
            <Header />
            <ModalLayout isOpen={isLoginOpen}>
                <Login onClose={() => setIsLoginOpen(false)} />
            </ModalLayout>
        </>
    )
}

export default App
