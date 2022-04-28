import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";

function Profile(props) {

let [num_interests, setNum_interests] = useState(0);
const context = useContext(AuthContext);

useEffect(() =>{
    let firebaseResponse = localStorage.getItem("firebaseResponse");
    firebaseResponse = (firebaseResponse ? JSON.parse(firebaseResponse): "");
    let headers = {"Authorization": "Bearer " + firebaseResponse.token};

    axios.get("http://localhost:8001/api/interest/count/" + context.currentUser.id,{headers: headers})
        .then((response) =>{

        })
        .catch((err) =>{
            console.log(err);
        })
})

    return (
            <div id={"front"}>
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" id={"tofront"}>
                    <a className="navbar-brand"><img src="http://localhost:3000/img/smallbold_logo.png"
                                                     id="small2"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href=""><Link to={"/interests"} id="out">Interests</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""><Link to={"/videogameinfo"} id={"out"}>Video
                                    Game Info</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""><b>Profile</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""><Link to={"/"} id="out">Sign Out</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="wrapper">
                    <div className="left">
                        <img src="http://localhost:3000/img/Headshot2.jpg" alt="user" width="120" height="148"/>
                            <h4>Caleb Young</h4>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>Information</h3>
                            <div className="info_data">
                                <div className="data">
                                    <h4>Email</h4>
                                    <p>caleb1.young@famu.edu</p>
                                </div>
                                <div className="data" id={"push"}>
                                    <h4>Phone</h4>
                                    <p>407-373-9600</p>
                                </div>
                            </div>
                        </div>

                        <div className="projects">
                            <div className="projects_data">
                                <div className="data">
                                    <h4>Interests</h4>
                                    <p>{num_interests}</p>
                                </div>
                                <div className="data">
                                    <h4>Follower Count</h4>
                                    <p>2296</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={"footer"}><center>© 2022 G-Info To You <img src="http://localhost:3000/img/smallbold_logo.png" id="small" /></center></div>
            </div>
    );
}

export default Profile;