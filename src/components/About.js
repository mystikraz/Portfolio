import React, { useState } from 'react';

const About = () => {

    const [about, setAbout] = useState({
        title: 'about',
        subTitle: 'Lorem ipsum dolor sit amet consectetur.',
        subHeading: 'Our Humble Beginnings',
        timeLine: [
            {
                year: '2009-2011',
                subHeading: 'Our Humble Beginnings',
                timeLineBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                timeLineInverted: false
            },
            {
                year: 'March 2011',
                subHeading: 'Our Humble Beginnings',
                timeLineBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                timeLineInverted: true
            },
            {
                year: 'january 2011',
                subHeading: 'Our Humble Beginnings',
                timeLineBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                timeLineInverted: false
            },
        ]
    });

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{about.title}</h2>
                    <h3 className="section-subheading text-muted">{about.subTitle}</h3>
                </div>
                <ul className="timeline">
                    {about.timeLine.map(x => {
                        return (
                            <li key={x.year} className={x.timeLineInverted ? "timeline-inverted" : ""} >
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>{x.year}</h4>
                                        <h4 className="subheading">{x.subHeading}</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">{x.timeLineBody}</p></div>
                                </div>
                            </li>
                        )
                    })}
                    <li class="timeline-inverted">
                        <div class="timeline-image">
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
        </section>
    );
}

export default About;
