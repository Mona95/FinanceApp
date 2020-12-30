import { Button, CardContent } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import useStyles from "./financeCardForm.style.js";
import { currencyLists } from "../../utils";

export default function FinanceCardForm(props) {
  const classes = useStyles();
  return (
    <>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          FCard Name
        </Typography>
        <TextField
          size="small"
          label="Expense"
          type="number"
          id="standard-start-adornment"
        />
        <TextField
          size="small"
          label="Income"
          type="number"
          id="standard-start-adornment"
        />
        <br />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          helperText="Currency"
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
        <Button variant="outlined" size="small" color="secondary">
          Update
        </Button>
        <Button variant="outlined" size="small" onClick={props.closeEditForm}>
          Cancel
        </Button>
      </CardActions>
    </>
  );
}
