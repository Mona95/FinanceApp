import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import useStyles from "./header.style.js";
import { connect } from "react-redux";

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <AppBar position="static">
        <Toolbar>
          <MonetizationOnIcon className={classes.appIcon} />
          <Typography variant="h6" className={classes.title}>
            Welcome to Finance App !
          </Typography>
          <Typography className={clsx(classes.totalInfo, classes.incomeInfo)}>
            T.Income : {props.totalIncome}€
          </Typography>
          <Typography className={clsx(classes.totalInfo, classes.expenseInfo)}>
            T.Expense : {props.totalExpense}€
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  totalIncome: state.totalIncome,
  totalExpense: state.totalExpense,
});

export default connect(mapStateToProps)(Header);
