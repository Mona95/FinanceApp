import React, { useState } from "react";
import { connect } from "react-redux";
//Components
import FinanceCardForm from "../FinanceCardForm";
import FinanceCard from "../FinanceCard";
//Material-ui Components
import Card from "@material-ui/core/Card";
//Styles
import useStyles from "./editableFinanceCard.style.js";
//Actions
import { deleteFCard, decreaseTotal } from "../../actions/actions";

const EditableFinanceCard = (props) => {
  const classes = useStyles();
  //editFormOpen is being used to decide between displaying the card content or the card edit form
  //if its true => it will display the card edit form
  //if its false => it will display the card content
  const [editFormOpen, setEditFormOpen] = useState(false);
  let { card } = props;

  const openEditForm = () => {
    setEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

  const handleDeleteFCard = () => {
    props.deleteFCard(card.name);
    //totalIncome,totalExpense should be updated based on the deleted card
    props.decreaseTotal("expense", card.expense, card.currency);
    props.decreaseTotal("income", card.income, card.currency);
  };

  return (
    <Card className={classes.root}>
      {editFormOpen ? (
        <FinanceCardForm card={card} closeEditForm={closeEditForm} />
      ) : (
        <FinanceCard
          card={card}
          openEditForm={openEditForm}
          deleteFCard={handleDeleteFCard}
        />
      )}
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteFCard: (cardName) => dispatch(deleteFCard(cardName)),
  decreaseTotal: (totalType, amount, currency) =>
    dispatch(decreaseTotal(totalType, amount, currency)),
});

export default connect(null, mapDispatchToProps)(EditableFinanceCard);
