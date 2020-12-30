import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./editableFinanceCard.style.js";
import FinanceCardForm from "../FinanceCardForm";
import FinanceCard from "../FinanceCard";

export default function EditableFinanceCard(props) {
  const classes = useStyles();
  const [editFormOpen, setEditFormOpen] = useState(false);
  let { card } = props;

  const openEditForm = () => {
    setEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

  return (
    <Card className={classes.root}>
      {editFormOpen ? (
        <FinanceCardForm closeEditForm={closeEditForm} />
      ) : (
        <FinanceCard card={card} openEditForm={openEditForm} />
      )}
    </Card>
  );
}
