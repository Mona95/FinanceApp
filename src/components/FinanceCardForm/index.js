import React, { useState } from "react";
import { Button, CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import useStyles from "./financeCardForm.style.js";
import { connect } from "react-redux";
import {
  decreaseTotal,
  increaseTotal,
  updateFCard,
} from "../../actions/actions";

function FinanceCardForm(props) {
  const classes = useStyles();

  let {
    card: { name, expense, income, currency },
  } = props;

  let [cardExpense, setCardExpense] = useState(expense),
    [cardIncome, setCardIncome] = useState(income);

  const updateCardExpense = (e) => {
    setCardExpense(e.target.value);
  };
  const updateCardIncome = (e) => {
    setCardIncome(e.target.value);
  };

  const calculateDifference = (oldValue, newValue, type) => {
    let difference;
    if (oldValue > newValue) {
      difference = oldValue - newValue;
      props.decreaseTotal(type, difference);
    } else if (oldValue < newValue) {
      difference = newValue - oldValue;
      props.increaseTotal(type, difference);
    }
  };

  const handpeUpdateCardData = () => {
    let cardData = {
      expense: cardExpense,
      income: cardIncome,
    };
    props.updateFCard(name, cardData);
    props.closeEditForm();
    calculateDifference(expense, cardExpense, "expense");
    calculateDifference(income, cardIncome, "income");
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
          value={cardExpense}
          onChange={updateCardExpense}
          InputProps={{ inputProps: { min: 0 } }}
        />
        <TextField
          size="small"
          label="Income"
          name="income"
          type="number"
          value={cardIncome}
          onChange={updateCardIncome}
          InputProps={{ inputProps: { min: 0 } }}
        />
        <Typography className={classes.pos} color="textSecondary">
          Currency :{currency}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          className={classes.updateBtn}
          onClick={handpeUpdateCardData}
        >
          Update
        </Button>
        <Button
          variant="outlined"
          size="small"
          className={classes.cancelBtn}
          onClick={props.closeEditForm}
        >
          Cancel
        </Button>
      </CardActions>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateFCard: (cardName, updatedData) =>
    dispatch(updateFCard(cardName, updatedData)),
  increaseTotal: (totalType, amount) =>
    dispatch(increaseTotal(totalType, amount)),
  decreaseTotal: (totalType, amount) =>
    dispatch(decreaseTotal(totalType, amount)),
});

const mapStateToProps = (state) => ({
  fCards: state.fCards,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinanceCardForm);
