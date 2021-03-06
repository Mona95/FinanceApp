import React from "react";
//Material-ui Components
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
//Material-ui Icons
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
//Styles
import useStyles from "./financeCard.style.js";
//Helper Methods
import { renderCurrencySymbol } from "../../utils";
//SVGs
import { ReactComponent as Graph } from "../../assets/images/graph.svg";

const FinanceCard = (props) => {
  const classes = useStyles();
  let {
    card: { name, expense, income, currency },
  } = props;
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
        <br />
        <Typography className={classes.pos} color="textSecondary">
          <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
          Expense : {expense}
          {renderCurrencySymbol(currency)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <KeyboardArrowUpIcon className={classes.arrowUpIcon} /> Income :{" "}
          {income}
          {renderCurrencySymbol(currency)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <LocalAtmIcon className={classes.currencyIcon} /> Currency :{" "}
          {currency}
        </Typography>
      </CardContent>
      <CardActions className={classes.root}>
        <IconButton size="small" onClick={props.openEditForm}>
          <EditIcon className={classes.editBtn} />
        </IconButton>
        <IconButton size="small" onClick={props.deleteFCard}>
          <DeleteIcon className={classes.deleteBtn} />
        </IconButton>
        <Graph className={classes.graphImg} />
      </CardActions>
    </>
  );
};
export default FinanceCard;
