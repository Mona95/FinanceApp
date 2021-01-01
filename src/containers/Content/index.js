import React from "react";
//Components
import Filter from "../../components/Filter";
import AddBar from "../../components/AddBar";
import FinanceCardList from "../FinanceCardList";
//Material-ui Components
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
//Styles
import useStyles from "./content.style.js";

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <AddBar />
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Filter />
          </Paper>
        </Grid>
      </Grid>
      <FinanceCardList />
    </div>
  );
};

export default Content;
