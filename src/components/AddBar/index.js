import React, { useState } from "react";
import useStyles from "./addBar.style.js";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { currencyLists } from "../../utils";
import { connect } from "react-redux";
import { addFCard } from "../../actions/actions";

function AddBar(props) {
  const classes = useStyles();

  let [fcardName, setFCardName] = useState(),
    [expense, setExpense] = useState(),
    [income, setIncome] = useState(),
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
      alert("Card already exists, please choose another name!");
    } else {
      props.addFCard(cardData);
    }
  };

  return (
    <div>
      <TextField
        label="FCard Name"
        name="name"
        type="text"
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        onChange={updateFCardName}
      />
      <TextField
        label="Expense"
        name="expense"
        id="standard-start-adornment"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        onChange={updateExpense}
      />
      <TextField
        label="Income"
        name="income"
        id="standard-start-adornment"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        onChange={updateIncome}
      />
      <TextField
        id="standard-select-currency"
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
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addFCard: (cardData) => dispatch(addFCard(cardData)),
});

const mapStateToProps = (state) => ({
  fCards: state.fCards,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);
