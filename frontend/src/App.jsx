import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SetupProcess from "./pages/setup_process"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setup_process" element={<SetupProcess/>}/>
        </Routes>
    );
}

export default App;
