import React from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import WeddingTVApp from "./WeddingTVApp";
// eslint-disable-next-line
function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to="/about" className="App-link">
                    Go to About
                </Link>
                <Link to="/about/123" className="App-link">
                    Go to About Detail (Card 123)
                </Link>
                <Link to="/lotto" className="App-link">
                    준모TV
                </Link>
            </header>
        </div>
    );
}
// eslint-disable-next-line
function About() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>About Page</h1>
                <p>This is the about page.</p>
                <Link to="/" className="App-link">
                    Go to Home
                </Link>
                <Link to="/about/123" className="App-link">
                    Go to About Detail (Card 123)
                </Link>
            </header>
        </div>
    );
}
// eslint-disable-next-line
function AboutDetail() {
    let { cardId } = useParams();

    return (
        <div className="App">
            <header className="App-header">
                <h1>About Detail Page</h1>
                <p>This is the detail page for card ID: {cardId}</p>
                <Link to="/about" className="App-link">
                    Back to About
                </Link>
            </header>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WeddingTVApp />} />
                {/*<Route path="/about" element={<About />}/>*/}
                {/*<Route path="/about/:cardId" element={<AboutDetail />} />*/}
                {/*<Route path="/lotto" element={<WeddingTVApp />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
