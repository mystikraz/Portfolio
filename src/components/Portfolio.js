import React, { useState, useEffect } from 'react';
import database from '../services/firebase';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);

    const unsubscribe = useEffect(() => {
        database.collection('portfolio').onSnapshot(snapshot => (
            setPortfolios(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // unsubscribe();
        };
    }, []);
    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
                {portfolios.map(portfolio => {
                    return (
                        <div className="container">
                            <div className="text-center">
                    <h2 className="section-heading text-uppercase">{portfolio.title}</h2>
                    <h3 className="section-subheading text-muted">{portfolio.subtitle}</h3>
                            </div>
                            <div className="row">
                                {portfolio.projects.map(project => {
                                    return (

                                        <div key={portfolio.id} className="col-lg-4 col-sm-6 mb-4">
                                            <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href={"#" + project.modalId}>
                                                    <div className="portfolio-hover">
                                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                                    </div>
                                                    <img className="img-fluid" src={project.image} alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                    <div className="portfolio-caption-heading">{project.projectTitle}</div>
                                                    <div className="portfolio-caption-subheading text-muted">{project.projectSubTitle}</div>
                                                </div>
                                            </div>

                                            <div className="portfolio-modal modal fade" id={project.modalId} tabIndex="-1" role="dialog" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                                                        <div className="container">
                                                            <div className="row justify-content-center">
                                                                <div className="col-lg-8">
                                                                    <div className="modal-body">
                                                                        {/* <!-- Project Details Go Here--> */}
                                                                        <h2 className="text-uppercase">{project.projectTitle}</h2>
                                                                        <p className="item-intro text-muted">{project.projectSubTitle}</p>
                                                                        <img className="img-fluid d-block mx-auto" src={project.image} alt="" />
                                                                        <p>{project.description}</p>
                                                                        <ul className="list-inline">
                                                                            <li>Date: {project.date}</li>
                                                                            <li>Client: {project.client}</li>
                                                                            <li>Category: {project.category}</li>
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
                    )
                })}
            </section>
        </div>
    );
}

export default Portfolio;
