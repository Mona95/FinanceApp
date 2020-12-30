import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./editableFinanceCard.style.js";
import FinanceCardForm from "../FinanceCardForm";
import FinanceCard from "../FinanceCard";
import { connect } from "react-redux";
import { deleteFCard } from "../../actions/actions";

function EditableFinanceCard(props) {
  const classes = useStyles();
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
}

const mapDispatchToProps = (dispatch) => ({
  deleteFCard: (cardName) => dispatch(deleteFCard(cardName)),
});

export default connect(null, mapDispatchToProps)(EditableFinanceCard);
