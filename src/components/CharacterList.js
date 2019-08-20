import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header.js";
import TabNav from "./TabNav.js";
// import { returnStatement } from "@babel/types";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharList(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error("server Error", error);
      });

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  if (charList.length === false) {
    return <div>Loading Characters</div>;
  } else {
    return (
      <>
        <Header />
        <TabNav />

        <section className="character-list grid-view">
          {charList.map(character => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              gender={character.gender}
              species={character.species}
              status={character.status}
              location={character.location.name}
              origin={character.origin.name}
              // episodes={character.episode}
            />
          ))}
        </section>
      </>
    );
  }
}
