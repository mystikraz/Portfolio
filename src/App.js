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
           
            {/* <!-- Portfolio Modals--> */}
            {/* <!-- Modal 1--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project Details Go Here--> */}
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Threads</li>
                                            <li>Category: Illustration</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal 2--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project Details Go Here--> */}
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/02-full.jpg" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Explore</li>
                                            <li>Category: Graphic Design</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal 3--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project Details Go Here--> */}
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/03-full.jpg" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Finish</li>
                                            <li>Category: Identity</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal 4--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project Details Go Here--> */}
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/04-full.jpg" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Lines</li>
                                            <li>Category: Branding</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal 5--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project Details Go Here--> */}
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/05-full.jpg" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Southwest</li>
                                            <li>Category: Website Design</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal 6--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project Details Go Here--> */}
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/06-full.jpg" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Window</li>
                                            <li>Category: Photography</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
