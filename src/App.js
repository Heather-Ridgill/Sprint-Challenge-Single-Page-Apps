import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import { css, cx } from "emotion";

export default function App() {
  return (
    <main
      className={`
        max-width: 1200px;
      `}
    >
      <AppRouter />
      <Header />
      <TabNav />
    </main>
  );
}
