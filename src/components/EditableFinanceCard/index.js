import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./editableFinanceCard.style.js";
import FinanceCardForm from "../FinanceCardForm";
import FinanceCard from "../FinanceCard";

export default function EditableFinanceCard() {
  const classes = useStyles();
  const [editFormOpen, setEditFormOpen] = useState(false);

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
        <FinanceCard openEditForm={openEditForm} />
      )}
    </Card>
  );
}
