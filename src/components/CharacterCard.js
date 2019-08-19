import React from "react";
import { css, cx } from "emotion";

export default function CharacterCard(props) {
  const person = props.person;
  return (
    <div
      className={css`
        margin: 30px;
        padding: 30px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
      `}
    >
      <img src={person.image} />
      <h1
        className={css`
          text-align: center;
        `}
      >
        {person.name}
      </h1>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <p>Species: {person.species}</p>
        <p>Status: {person.status}</p>
        <p>Gender: {person.gender}</p>
        <p>Location: {person.location.name}</p>
        <p>Origin: {person.origin.name}</p>
        <p>Appears in {person.episode.length} episodes</p>
      </div>
    </div>
  );
}
