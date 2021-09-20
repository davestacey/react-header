import React from "react";
import "./styles/styles.scss";
import navigation from "./data";
import { ReactComponent as Logo } from "./assets/logo.svg";

import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header items={navigation} logo={<Logo />} navPosition="center" />
      <section className="hero">
        <img src="image.jpg" alt="By arhihou anas on Unsplash" />
      </section>
    </div>
  );
}
