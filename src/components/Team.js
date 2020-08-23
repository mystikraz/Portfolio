import React, { useState } from 'react';

const Team = () => {
    const [team, setTeam] = useState({
        title: 'Our Amazing Team',
        subTitle: 'Lorem ipsum dolor sit amet consectetur.',
        description:'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        members: [
            {
                id: 1,
                name: 'Kay Garland',
                position: 'Lead Designer',
                image: "assets/img/team/1.jpg",
                twitter: "www.twitter.com",
                facebook: "",
                linkedin: ""
            },
            {
                id: 2,
                name: 'Ray Garland',
                position: 'Lead Designer',
                image: "assets/img/team/2.jpg",
                twitter: "www.twitter.com",
                facebook: "",
                linkedin: ""
            },
            {
                id: 3,
                name: 'Shey Garland',
                position: 'Lead Designer',
                image: "assets/img/team/3.jpg",
                twitter: "www.twitter.com",
                facebook: "",
                linkedin: ""
            }
        ]
    });
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{team.title}</h2>
                    <h3 className="section-subheading text-muted">{team.subTitle}</h3>
                </div>
                <div className="row">
                    {team.members.map(member => {
                        return (
                            <div className="col-lg-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle" src={member.image} alt="" />
                                    <h4>{member.name}</h4>
                                    <p className="text-muted">{member.position}</p>
                                    <a className="btn btn-dark btn-social mx-2" href={member.twitter}><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-dark btn-social mx-2" href={member.facebook}><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-dark btn-social mx-2" href={member.linkedin}><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">{team.description}</p></div>
                </div>
            </div>
        </section>
    );
}

export default Team;
