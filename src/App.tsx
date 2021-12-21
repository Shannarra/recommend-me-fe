import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={null} />
                <Route path="/logout" element={null} />
                <Route path="/recommendations" element={null}/>

                {/*TODO: FIX ALL ROUTES! */}
                <Route path="/recommendations/new" element={null}/>
                <Route path="/recommendations/view" element={null}>
                    <Route path="recommendations/:id" element={null}/>
                </Route>

                <Route path="/profile" />
                <Route path="/profile/edit" element={null}/>
            </Routes>
        </div>
    )
}

export default App;
