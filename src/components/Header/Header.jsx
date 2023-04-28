import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../images/Logotype.svg";
import searchIcon from "../../images/searchIcon.svg";
import Dropdown from "../Dropdown/Dropdown";

export default function Header() {
  const [burgerActive, setBurgerActive] = useState(false);
  const handleMenu = () => {
    setBurgerActive(!burgerActive);
  };

  const [myScroll, setMyScroll] = React.useState(0);
  const [headerSticky, setHeaderSticky] = useState(true);

  const handleScroll = () => {
    //header sticky ON
    if (window.scrollY - myScroll > 200) {
      setMyScroll(window.scrollY);
      setHeaderSticky(false);
    }
    // header static ON
    else if (myScroll - window.scrollY > 20) {
      setHeaderSticky(true);
      setMyScroll(window.scrollY);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY, headerSticky]);

  return (
    <header
      className={`
				${styles.header} ${headerSticky ? "" : styles.stickyOff}`}
    >
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Логотип"></img>
        <img className={styles.searchIcon} src={searchIcon} alt="Поиск"></img>
      </div>
      <nav className={`${styles.menu} ${burgerActive ? styles.active : ""}`}>
        <div>
          <img className={styles.menuLogo} src={logo} alt="Логотип"></img>
          <input
            onClick={handleMenu}
            type="checkbox"
            className={styles.toggler}
          />
          <div className={styles.hamburger}>
            <div></div>
          </div>
        </div>
        <Dropdown className={styles.dropdown} blockName="Demos">
          <ul>
            <li>
              <a href="#">Demos</a>
            </li>
            <li>
              <a href="#">Demos</a>
            </li>
            <li>
              <a href="#">Demos</a>
            </li>
          </ul>
        </Dropdown>
        <Dropdown blockName="Post">
          <ul>
            <li>
              <a href="#">Post</a>
            </li>
            <li>
              <a href="#">Post</a>
            </li>
            <li>
              <a href="#">Post</a>
            </li>
          </ul>
        </Dropdown>
        <Dropdown blockName="Features">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </Dropdown>
        <Dropdown blockName="Categories">
          <ul>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </Dropdown>
        <Dropdown blockName="Shop">
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </Dropdown>
        <Dropdown blockName="Buy Now"></Dropdown>
      </nav>
      <div
        onClick={handleMenu}
        className={`${styles.overlay} ${
          burgerActive ? styles.overlayActive : ""
        }`}
      ></div>
    </header>
  );
}
