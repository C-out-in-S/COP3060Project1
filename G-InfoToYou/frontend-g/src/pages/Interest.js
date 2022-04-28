import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = { genres: [] };

    }

    async increase_interest() {
        let firebaseResponse = localStorage.getItem("firebaseResponse");
        firebaseResponse = (firebaseResponse ? JSON.parse(firebaseResponse): "");
        let headers = {"Authorization": "Bearer " + firebaseResponse.token};
        let value = this.context
        console.log(value.currentUser.user.id)
        console.log(this.context)

        await axios.put("http://localhost:8001/api/interest/update/" + value.currentUser.id,{headers: headers})
            .then((response) =>{

            })
            .catch((err) =>{
                console.log(err);
            })
    }


    componentDidMount() {
        const API2key = "?key=387edab73bb54bc6bf5d5401da121789";
        let API_URL = "https://api.rawg.io/api/genres?key=387edab73bb54bc6bf5d5401da121789";


        const getAllGenres = async () => {
            await axios.get(API_URL).then(response =>{
                let list = response.data.results;

                let gList = [];
                list.map(async (item) => {

                        let ID = item.id;
                        let API2_URL = "https://api.rawg.io/api/genres/" + ID + API2key;
                        await axios.get(API2_URL).then(resp =>{
                            gList = this.state.genres;
                            gList.push(resp.data);
                            this.setState({genres: gList})
                        })

                })
            })
        }
        getAllGenres();


    }


    render() {
        return (
            <div id={"front"}>
                <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <a class="navbar-brand" ><img src="http://localhost:3000/img/smallbold_logo.png" id="small2" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href=""><b>Interests</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""><Link to={"/videogameinfo"} id={"out"}>Video Game Info</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""><Link to={"/profile"} id="out">Profile</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""><Link to={"/"} id="out">Sign Out</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row row-cols-sm-2 row-cols-md-5 row-cols-xxl-6" id="move">
                    {
                        this.state.genres.map((genre) => {

                            return (
                                <div className="col mb-3" id="pad">
                                    <div className="card h-100 position-relative">
                                        <img src={genre["image_background"]} alt="image from RAWG API" />
                                        <div className="card-body book-card-details">
                                            <h5 className="card-title book-title">{genre["name"]} &nbsp;&nbsp;
                                                <span className="badge position-absolute top-0 start-0 rounded-pill translate-middle" onClick={(event ) => this.increase_interest()}><img src="http://localhost:3000/img/addition.png" id={"small2"}/></span>
                                            </h5>
                                            <h5 className="card-title on-list"></h5>
                                            <h6 className="card-subtitle mb-2 text-muted book-author"></h6>
                                            <p className="card-text"></p>
                                            <h5 className="card-title on-list"></h5>
                                            <div className="card-text">{genre.description}</div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })
                    }
                </div>
                <div id={"footer"}><center>© 2022 G-Info To You <img src="http://localhost:3000/img/smallbold_logo.png" id="small" /></center></div>
            </div>
        );
    }
}

Interest.contextType = AuthContext;
export default Interest;