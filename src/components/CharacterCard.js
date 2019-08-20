import React from "react";
import { css, cx } from "emotion";

export default function CharacterCard({
  image,
  name,
  species,
  gender,
  status,
  location,
  origin,
  episodes
}) {
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
      <img src={image} />
      <h1
        className={css`
          text-align: center;
        `}
      >
        {name}
      </h1>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location}</p>
        <p>Origin: {origin}</p>
        {/* <p>Appears in {episodes} episodes</p> */}
      </div>
    </div>
  );
}
