import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      gameData: []
    }
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSearch = event => {
    event.preventDefault();
    const title = this.state.title.replace(/\s/g, "+");

    API.searchGames(title)
      .then(
        (response) => {
          console.log(response.data.games)
          this.setState({ title: "", gameData: response.data.games })
      }
    )
  }

  render() {
    return (
      <main>
        <Form handleChange={this.handleChange} handleSearch={this.handleSearch} />

        {(this.state.gameData.length > 0) ?
          <Results gameData={this.state.gameData} path={this.props.match.path} /> : null
        }
      </main>
    )
  }
}

export default Search;