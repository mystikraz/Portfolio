import React, { useState, useEffect } from 'react';

const Nav = (links) => {
    const [navClass, setNavClass] = useState('');
    const [activeLink, setActiveLink] = useState(0);
    console.log(links)
    const handleActive = (id) => {
        setActiveLink(id);
    }
    // const [links, setLinks] = useState([
    //     {
    //         id: 1,
    //         name: "services",
    //         to: "#services",
    //         className: "nav-link js-scroll-trigger"
    //     },
    //     {
    //         id: 2,
    //         name: "portfolio",
    //         to: "#portfolio",
    //         className: "nav-link js-scroll-trigger"
    //     },
    //     {
    //         id: 3,
    //         name: "about",
    //         to: "#about",
    //         className: "nav-link js-scroll-trigger"
    //     },
    //     {
    //         id: 4,
    //         name: "contact",
    //         to: "#contact",
    //         className: "nav-link js-scroll-trigger"
    //     }]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    const handleScroll = () => {
        console.log("handleScroll")
        let offsetTop = window.pageYOffset;
        if (offsetTop > 100) {
            setNavClass('navbar-shrink');
        } else {
            setNavClass('');
        }
    };
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${navClass}`} id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
            <i className="fas fa-bars ml-1"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        {
                            links.links.map(link => {
                                return (
                                    <li key={link.id} className="nav-item"><a className={link.className + (link.id === activeLink ? " active" : "")} onClick={() => handleActive(link.id)} href={link.to}>{link.name}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
