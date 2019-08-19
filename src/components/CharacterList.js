import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const { charList, setCharList } = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharList(response.data);
      })
      .catch(error => {
        console.error("server Error", error);
      });

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {charList.map(char => {
        return <CharacterCard char={char} key={char.id} />;
      })}
    </section>
  );
}
