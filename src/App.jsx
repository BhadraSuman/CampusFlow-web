import { BrowserRouter, Route, Routes } from "react-router";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
