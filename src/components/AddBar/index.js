import React from "react";
import useStyles from "./addBar.style.js";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { currencyLists } from "../../utils";

export default function AddBar() {
  const classes = useStyles();
  return (
    <div>
      <TextField
        label="FCard Name"
        type="text"
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
      />
      <TextField
        label="Expense"
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
      />
      <TextField
        label="Income"
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
      />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        helperText="Please select your currency"
      >
        {currencyLists().map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        className={classes.addButton}
        color="secondary"
      >
        <AddBoxIcon className={classes.addIcon} /> Add FCard
      </Button>
    </div>
  );
}
