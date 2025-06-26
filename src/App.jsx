import { BrowserRouter, Route, Routes } from "react-router";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";
import { Bounce, ToastContainer } from "react-toastify";
import Signin from "./Pages/Auth/Signin";

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
