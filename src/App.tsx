import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home";
import {RecommendationsList} from "./components/recommendations/RecommendationsList";
import {RecommendationView} from "./components/recommendations/RecommendationView";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={null} />
                <Route path="/logout" element={null} />
                <Route path="/recommendations" element={<RecommendationsList />}/>

                {/*TODO: FIX ALL ROUTES! */}
                <Route path="/recommendations/new" element={null}/>
                <Route path="/profile" />
                <Route path="recommendations/:id" element={<RecommendationView />}/>

                <Route path="/profile/edit" element={null}/>
            </Routes>
        </div>
    )
}

export default App;
