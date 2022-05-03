import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/gallery' element={<Gallery />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
