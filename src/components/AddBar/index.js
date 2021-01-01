import React, { useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
//Material-ui Components
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//Styles
import useStyles from "./addBar.style.js";
//Helper Methods
import { currencyLists } from "../../utils";
//Actions
import { addFCard, increaseTotal } from "../../actions/actions";

function AddBar(props) {
  const classes = useStyles();

  let [fcardName, setFCardName] = useState(""),
    [expense, setExpense] = useState(0),
    [income, setIncome] = useState(0),
    [currency, setCurrency] = useState("EUR");

  const updateFCardName = (e) => {
    setFCardName(e.target.value);
  };
  const updateExpense = (e) => {
    setExpense(e.target.value);
  };
  const updateIncome = (e) => {
    setIncome(e.target.value);
  };
  const updateCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const handleAddFCard = () => {
    let cardData = {
      name: fcardName,
      expense: expense,
      income: income,
      currency: currency,
    };
    if (props.fCards.find((card) => card.name === fcardName)) {
      alert("Card already exists, please choose another name");
    } else if (fcardName === "") {
      alert("FCard Name can not be empty.");
    } else {
      props.addFCard(cardData);
      props.increaseTotal("expense", expense, currency);
      props.increaseTotal("income", income, currency);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <TextField
              label="FCard Name"
              name="name"
              type="text"
              className={clsx(classes.margin)}
              onChange={updateFCardName}
              value={fcardName}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <TextField
              label="Expense"
              name="expense"
              type="number"
              value={expense}
              className={clsx(classes.margin)}
              onChange={updateExpense}
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <TextField
              label="Income"
              name="income"
              type="number"
              value={income}
              className={clsx(classes.margin)}
              onChange={updateIncome}
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <TextField
              name="currency"
              label="Select"
              helperText="Please select your currency"
              onChange={updateCurrency}
              value={currency}
              select
            >
              {currencyLists().map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="outlined"
              className={classes.addButton}
              color="secondary"
              onClick={handleAddFCard}
            >
              <AddBoxIcon className={classes.addIcon} /> Add FCard
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addFCard: (cardData) => dispatch(addFCard(cardData)),
  increaseTotal: (totalType, amount, currency) =>
    dispatch(increaseTotal(totalType, amount, currency)),
});

const mapStateToProps = (state) => ({
  fCards: state.fCards,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);
