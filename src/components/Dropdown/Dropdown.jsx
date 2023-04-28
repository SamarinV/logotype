import React from "react";

import icon from "../../images/arrowIcon.svg";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, blockName }) => {
  //если нет children, убираем иконку
  let a;
  if (!children) {
    a = "";
  } else a = icon;

  return (
    <div className={styles.dropdown}>
      <button className={styles.btn}>
        {blockName}
        <img className={styles.icon} src={a}></img>
      </button>
      <div className={styles.items}>{children}</div>
    </div>
  );
};

export default Dropdown;
