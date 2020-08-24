import React, { useState, useEffect } from 'react';
import database from '../services/firebase';

const Services = () => {

    const [services, setServices] = useState([]);

    const unsubscribe = useEffect(() => {
        database.collection('service').onSnapshot(snapshot => (
            setServices(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // unsubscribe();
        };
    }, []);
    return (
        <section className="page-section" id="services">
            {services.map(service => {
                return (
                    <div key={service.title} className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">{service.title}</h2>
                            <h3 className="section-subheading text-muted">{service.subtitle}</h3>
                        </div>
                        <div className="row text-center">
                            {service.serviceDetails.map(serviceDetail => {
                                return (
                                    <div key={serviceDetail.title} className="col-md-4">
                                        <span className="fa-stack fa-4x">
                                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                            <i className={`fas ${serviceDetail.className} fa-stack-1x fa-inverse`}></i>
                                        </span>
                                        <h4 className="my-3">{serviceDetail.title}</h4>
                                        <p className="text-muted">{serviceDetail.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Services;
