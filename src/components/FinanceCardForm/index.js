import React, { useState } from "react";
import { Button, CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import useStyles from "./financeCardForm.style.js";
import { currencyLists } from "../../utils";
import { connect } from "react-redux";
import { updateFCard } from "../../actions/actions";

function FinanceCardForm(props) {
  const classes = useStyles();

  let {
    card: { name, expense, income, currency },
  } = props;

  let [cardExpense, setCardExpense] = useState(expense),
    [cardIncome, setCardIncome] = useState(income),
    [cardCurrency, setCardCurrency] = useState(currency);

  const updateCardExpense = (e) => {
    setCardExpense(e.target.value);
  };
  const updateCardIncome = (e) => {
    setCardIncome(e.target.value);
  };
  const updateCardCurrency = (e) => {
    setCardCurrency(e.target.value);
  };

  const handpeUpdateCardData = () => {
    let cardData = {
      expense: cardExpense,
      income: cardIncome,
      currency: cardCurrency,
    };
    props.updateFCard(name, cardData);
    props.closeEditForm();
  };

  return (
    <>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <TextField
          size="small"
          label="Expense"
          name="expense"
          type="number"
          id="standard-start-adornment"
          value={cardExpense}
          onChange={updateCardExpense}
        />
        <TextField
          size="small"
          label="Income"
          name="income"
          type="number"
          id="standard-start-adornment"
          value={cardIncome}
          onChange={updateCardIncome}
        />
        <br />
        <TextField
          id="standard-select-currency"
          name="currency"
          select
          helperText="Currency"
          value={cardCurrency}
          onChange={updateCardCurrency}
          fullWidth
        >
          {currencyLists().map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={handpeUpdateCardData}
        >
          Update
        </Button>
        <Button variant="outlined" size="small" onClick={props.closeEditForm}>
          Cancel
        </Button>
      </CardActions>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateFCard: (cardName, updatedData) =>
    dispatch(updateFCard(cardName, updatedData)),
});

const mapStateToProps = (state) => ({
  fCards: state.fCards,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinanceCardForm);
