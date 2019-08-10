import React from "react";
import SearchResults from "../SearchResults";
import "./style.css";

function Results(props) {
  if(props.path === "/") {
    return(
        <div id="results">
            <h3>Search Results:</h3>
            {props.gameData.map((game) => {
              return <SearchResults
                id={game.id}
                key={game.id}
                path={props.path}
                name={game.name}
                otherNames={game.other_names}
                min_players={game.min_players}
                max_players={game.max_players}
                min_playtime={game.min_playtime}
                max_playtime={game.max_playtime}
                min_age={game.min_age}
                description={game.description_preview}
                thumbnail={game.images.thumb}
                image={game.images.large}
                link={game.url}
                mechanics={game.mechanics}
                categories={game.categories}/>
            })}
        </div>
    );
  } else if(props.path === "/saved") {
    if(props.savedGames.length > 0) {
        return(
            <div id="results">
                <h3>Saved Games:</h3>
            {props.savedGames.map((game) => {
              return <SearchResults
                id={game._id}
                key={game._id}
                path={props.path}
                name={game.name}
                otherNames={game.other_names}
                min_players={game.min_players}
                max_players={game.max_players}
                min_playtime={game.min_playtime}
                max_playtime={game.max_playtime}
                min_age={game.min_age}
                description={game.description}
                thumbnail={game.thumbnail}
                image={game.image}
                link={game.link}
                mechanics={game.mechanics}
                category={game.category} />
            })}
            </div>
        );
    } else {
        return(
            <div id="results">
                <h3>Saved Games</h3>
                <p>Nothing to see here...yet!</p>
            </div>
        );
      }
    }
}

export default Results;