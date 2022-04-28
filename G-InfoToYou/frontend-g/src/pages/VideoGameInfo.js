import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class VideoGameInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { games: [] };
    }

    componentDidMount() {
        let vAPI_URL = "https://api.rawg.io/api/games?key=387edab73bb54bc6bf5d5401da121789";
        const vAPI2_key = "?key=387edab73bb54bc6bf5d5401da121789";

        const getAllGames = async () => {
            await axios.get(vAPI_URL).then(response => {
                let list = response.data.results;

                let vgList = [];
                list.map( async (item) => {
                    let ID = item.id;
                    let vAPI2_URL = "https://api.rawg.io/api/games/" + ID + vAPI2_key;

                    await axios.get(vAPI2_URL).then(resp => {
                        vgList = this.state.games;
                        vgList.push(resp.data);
                        this.setState({games: vgList});

                    })
                })

            })
        }
        getAllGames();
    }





    render() {
        console.log(this.state.games)
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
                                <a class="nav-link" href=""><Link to={"/interests"} id="out">Interests</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""><b>Video Game Info</b></a>
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
                        this.state.games.map((game) => {
                            return (
                                <div className="col mb-3" id="pad">
                                    <div className="card h-100 position-relative">
                                        <img src={game["background_image"]} alt="image from RAWG API" />
                                        <div className="card-body book-card-details">
                                            <h5 className="card-title book-title">{game["name"]}</h5>
                                            <h5 className="card-title on-list" ><a href={game["website"]} target={"_blank"} id={"green"}>Metascore: {game["metacritic"]}</a></h5>
                                            <h6 className="card-subtitle mb-2 text-muted book-author"></h6>
                                            <p className="card-text">
                                                ESRB Rating - {game["esrb_rating"].name}
                                            </p>
                                            <p className="card-text">Original release date: {game["released"]}</p>
                                            <div className="card-text"><b> Description: </b>{game["description"]}</div>
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

export default VideoGameInfo;