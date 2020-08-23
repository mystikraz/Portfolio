import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {

    const [links, setLinks] = useState([
        {
            id: 1,
            name: "services",
            to: "#services",
            className: "nav-link js-scroll-trigger"
        },
        {
            id: 2,
            name: "portfolio",
            to: "#portfolio",
            className: "nav-link js-scroll-trigger"
        },
        {
            id: 3,
            name: "about",
            to: "#about",
            className: "nav-link js-scroll-trigger"
        },
        {
            id: 4,
            name: "team",
            to: "#team",
            className: "nav-link js-scroll-trigger"
        },
        {
            id: 5,
            name: "contact",
            to: "#contact",
            className: "nav-link js-scroll-trigger"
        }]);

    return (
        <div className="App">
            {/* <!-- Navigation--> */}
            <Nav links={links} />
            {/* <!-- Masthead--> */}
            <Header />
            {/* <!-- Services--> */}
            <Services />
            
            {/* <!-- Portfolio Grid--> */}
            <Portfolio/>
            {/* <!-- About--> */}
            <About/>
            {/* <!-- Team--> */}
            <Team/>
            {/* <!-- Clients--> */}
            <Clients/>
            {/* <!-- Contact--> */}
            <Contact/>
            {/* <!-- Footer--> */}
           
           
        </div>
    );
}

export default App;
