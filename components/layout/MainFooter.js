import React from "react";

import classes from "./MainFooter.module.css";

const MainFooter = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.centered}>
        <p className={classes.text}>Rene Alas © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default MainFooter;
