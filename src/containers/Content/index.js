import React from "react";
import Filter from "../../components/Filter";
import AddBar from "../../components/AddBar";
import FinanceCardList from "../FinanceCardList";
import useStyles from "./content.style.js";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

export default function Content() {
  const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <AddBar />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Filter />
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <FinanceCardList />
    </div>
  );
}
