import styles from "./styles/App.module.scss";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import React from "react";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <Posts />
        </main>
      </div>
      <HeroSection />
    </div>
  );
}

export default App;
