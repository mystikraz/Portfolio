import React, { useState } from 'react';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([
        {
            id: 1,
            title: "Threads",
            subTitle: "Illusttration",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            image: "assets/img/portfolio/01-thumbnail.jpg",
            date: "January 2020",
            client: "Thread",
            category: "Illustration",
            modalId: "portfolioModal1"
        },
        {
            id: 2,
            title: "new Threads",
            subTitle: "Illusttration",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            image: "assets/img/portfolio/01-thumbnail.jpg",
            date: "January 2020",
            client: "Thread",
            category: "Illustration",
            modalId: "portfolioModal2"
        },
        {
            id: 3,
            title: " super Threads",
            subTitle: "Illusttration",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            image: "assets/img/portfolio/01-thumbnail.jpg",
            date: "January 2020",
            client: "Thread",
            category: "Illustration",
            modalId: "portfolioModal3"
        },

    ]);
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolios.map(portfolio => {
                            return (

                                <div key={portfolio.id} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href={"#" + portfolio.modalId}>
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img className="img-fluid" src={portfolio.image} alt="" />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">{portfolio.title}</div>
                                            <div className="portfolio-caption-subheading text-muted">{portfolio.subTitle}</div>
                                        </div>
                                    </div>

                                    <div className="portfolio-modal modal fade" id={portfolio.modalId} tabIndex="-1" role="dialog" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="modal-body">
                                                                {/* <!-- Project Details Go Here--> */}
                                                                <h2 className="text-uppercase">{portfolio.title}</h2>
                                                                <p className="item-intro text-muted">{portfolio.subTitle}</p>
                                                                <img className="img-fluid d-block mx-auto" src={portfolio.image} alt="" />
                                                                <p>{portfolio.description}</p>
                                                                <ul className="list-inline">
                                                                    <li>Date: {portfolio.date}</li>
                                                                    <li>Client: {portfolio.client}</li>
                                                                    <li>Category: {portfolio.client}</li>
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

                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
