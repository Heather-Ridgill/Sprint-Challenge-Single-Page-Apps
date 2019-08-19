import React from "react";
import { Route } from "react-router-dom";

import {
  WelcomePage,
  LocationsList,
  CharacterList,
  EpisodesList
} from "./components";

const AppRouter = () => {
  return (
    <>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodesList} />
    </>
  );
};

export default AppRouter;
