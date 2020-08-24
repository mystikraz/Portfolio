import React, { useState, useEffect } from 'react';
import database from '../services/firebase';

const About = () => {

    const [about, setAbout] = useState([]);
    const unsubscribe = useEffect(() => {
        database.collection('about').onSnapshot(snapshot => (
            setAbout(snapshot.docs.map(doc => doc.data()))
        ))
        console.log(about)
        return () => {
            // unsubscribe();
        };
    }, []);
    return (
        <section className="page-section" id="about">
            {about.map(x => {
                return (
                    <div key={x.id} className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">{x.title}</h2>
                            <h3 className="section-subheading text-muted">{x.subTitle}</h3>
                        </div>
                        <ul className="timeline">
                            {x.timeLine.map(a => {
                                return (
                                    <li key={a.id} className={x.timeLineInverted ? "timeline-inverted" : ""} >
                                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>{a.year}</h4>
                                                <h4 className="subheading">{a.subHeading}</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted">{a.timeLineBody}</p></div>
                                        </div>
                                    </li>
                                )
                            })}
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            })}

        </section>
    );
}

export default About;
