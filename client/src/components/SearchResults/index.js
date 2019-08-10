import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

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
    API.saveBook(gameData).then(
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
      <div className="searchResult" id={(this.props.id) ? this.props.id : null} style={{ display: this.state.deleted ? "none" : "block" }}>
        <div className="wrapper">
          <div className="row">
            <div className="aboutGame">
              <h4>{this.props.name}</h4>

            </div>
          </div>

          <div className="row gameRowInfo">
            <div className="col-sm-3">
              {(this.props.thumbnail) ? <img src={
                // if thumbnail exists on this.props.img use that else leave src empty
                (this.props.thumbnail) ? this.props.image : ""
              } alt="book cover" /> : null}
              <div className="btnDiv">
                {// if link to book exists include View button else do not
                  (this.props.link) ? <a href={this.props.link}><button type="button" name="view" className="view">View</button></a> : null
                }
                {// if this.props.path is "/" display save button else display Delete button
                  (this.props.path === "/") ? <button type="button" name="save" onClick={this.handleSave} disabled={this.state.saved} className="save">{(this.state.saved) ? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDelete} disabled={this.state.deleted} className="delete">Delete</button>
                }
                </div>
              </div>
            <div className="col-sm-9">
              <p>{(this.props.description) ? this.props.description : "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;