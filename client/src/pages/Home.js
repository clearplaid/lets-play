import React from "react";
import API from "../utils/API";
import "./Home.css";


class Home extends React.Component {
  state = {
    popularGames: []
  }

  componentDidMount() {
    API.getPopular()
      .then(
        (response) => {
          console.log(response)
          this.setState({ popularGames: response.data })
      }
    )
  }

 
  render() {
    return (
      <main>
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-9">
          <center><h1>Popular Games</h1></center>
            <div className="row justify-content-center"> 
              {this.state.popularGames.map(game => (
                <div className="card" id={game.id} key={game.id} style={{ width: "15rem" }}>
                <img src={game.images.original} className="card-img-top img-fluid pb-1" alt={game.name} />
                <div className="card-body d-flex flex-column p-0">
                  <h5 className="card-title text-center font-weight-bold pb-2">{game.name}</h5>
                    <ul className="card-text">
                      <li># of players: {game.min_players} - {game.max_players}</li>
                      <li>Minimum Age: {game.min_age}</li>
                      <li>Playtime: {game.min_playtime} - {game.max_playtime} minutes</li>
                    </ul>
                  <a href="{game.url}" className="btn btn-info btn-block mt-auto">More Info</a>
                  </div>
              {/* end of row */}
                </div>
              ))}
              {/* end of popular games column */}
              </div>
          </div>
          <div className="col-sm-3">
            <center><h1>Guilds</h1></center>
              <div className="card">
                <ul>
                  <li>Guild Names</li>
                </ul>
              </div>
              
            <center><h1>Adventurers</h1></center>
              <div className="card">
                <ul>
                  <li>Users Names</li>
                </ul>
              </div>
        {/* end of guilds col */}
            </div>
        {/* end of row */}
          </div>
        {/* end of container */}
        </div>
      </main>
    )
  }

}

export default Home;