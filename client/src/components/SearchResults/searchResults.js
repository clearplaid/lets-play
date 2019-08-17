import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import API from "../../utils/API";
import "./searchResults.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      deleted: false
    }
  }

  handleSave = event => {
    event.preventDefault();
    this.setState({ saved: true });
    
    const gameData = {
      id: this.props.id,
      name: this.props.name,
      other_names: this.props.other_names,
      min_players: this.props.min_players,
      max_players: this.props.max_players,
      min_playtime: this.props.min_playtime,
      max_playtime: this.props.max_playtime,
      min_age: this.props.min_age,
      description: this.props.description,
      thumbnail: this.props.thumbnail,
      image: this.props.image,
      link: this.props.link,
      mechanics: this.props.mechanics,
      categories: this.props.categories
    }
    API.saveGame(gameData).then(
      (response) => {
        console.log(response);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  handleDelete = event => {
    event.preventDefault();
    this.setState({ deleted: true });
    API.deleteGame(this.props.id).then(
      (response) => {
        console.log(response);
        Router.dispatch(this.props.location, null)
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <div className="searchResult container-fluid" id={(this.props.id) ? this.props.id : null} style={{ display: this.state.deleted ? "none" : "block" }}>
          <div className="card d-flex flex-column mb-3">
            <div className="row no-gutters justify-content-center">
              <div className="col-md-4 d-flex flex-column">
                {(this.props.thumbnail) ? <img src={
                    // if thumbnail exists on this.props.img use that else leave src empty
                    (this.props.thumbnail) ? this.props.image : ""
              } alt="box cover" className="img-fluid p-4" /> : null}
              <ul className="card-text"><small className="text-muted">
                      <li># of players: {this.props.min_players} - {this.props.max_players}</li>
                      <li>Minimum Age: {this.props.min_age}</li>
                      <li>Playtime: {this.props.min_playtime} - {this.props.max_playtime} minutes</li></small>
              </ul>
              <div className="btnDiv mt-auto p-4">
                  {// if link to book exists include View button else do not
                    (this.props.link) ? <a href={this.props.link}><button type="button" name="view" className="view">View</button></a> : null
                  }
                  {// if this.props.path is "/" display save button else display Delete button
                    (this.props.path === "/search") ? <button type="button" name="save" onClick={this.handleSave} disabled={this.state.saved} className="save">{(this.state.saved) ? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDelete} disabled={this.state.deleted} className="delete">Delete</button>
                  }
                </div>
          {/* end of col */}
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title font-weight-bold">{this.props.name}</h4>
                  <div className="descriptionWrapper">
                    <p className="card-text">{(this.props.description) ? this.props.description : "N/A"}</p>
                  </div>
              {/* end of card body */}
                </div>
            {/* end of col */}
              </div>
          {/* end of row */}
            </div>
        {/* end of card */}
          </div>
    {/* end of searchresult */}
      </div>
    );
  }
}

export default SearchResults;