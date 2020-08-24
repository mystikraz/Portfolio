import React, { useState, useEffect } from 'react';
import database from '../services/firebase';

const Team = () => {

    const [teams, setTeams] = useState([]);

    const unsubscribe = useEffect(() => {
        database.collection('team').onSnapshot(snapshot => (
            setTeams(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // unsubscribe();
        };
    }, []);

    return (
        <section className="page-section bg-light" id="team">
            {teams.map(team => {
                return (
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
                                            <a className="btn btn-dark btn-social mx-2" href={member.twitter} target="_blank"><i className="fab fa-twitter"></i></a>
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
                )
            })}
        </section>
    );
}

export default Team;
