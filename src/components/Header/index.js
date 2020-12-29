import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import useStyles from "./header.style.js";

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <AppBar position="static">
        <Toolbar>
          <MonetizationOnIcon className={classes.appIcon} />
          <Typography variant="h6" className={classes.title}>
            Welcome to Finance App !
          </Typography>
          <Typography className={classes.totalInfo}>T.Income : 0$</Typography>
          <Typography className={classes.totalInfo}>T.Expense : 0$</Typography>
          <Typography className={classes.totalInfo}>
            Current Rate : $
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
