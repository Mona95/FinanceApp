import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import useStyles from "./rateHeader.style";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { fetchCurrencyRates } from "../../actions/middleware/currencyRates";

function RateHeader(props) {
  const classes = useStyles();
  let { eurRate, usdRate, jpyRate, tryRate } = props;

  useEffect(() => {
    props.dispatch(fetchCurrencyRates());
  }, [props]);
  return (
    <div className={classes.rateHeaderWrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={clsx(classes.paper, classes.baseRate)}>
            (BASE) EUR = {eurRate}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>USD($) = {usdRate}$</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>JPY(¥) = {jpyRate}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>TRY(₺) = {tryRate}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  eurRate: state.EUR,
  usdRate: state.USD,
  jpyRate: state.JPY,
  tryRate: state.TRY,
});

export default connect(mapStateToProps, null)(RateHeader);
