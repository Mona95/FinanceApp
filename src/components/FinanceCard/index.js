import React from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./financeCard.style.js";

export default function FinanceCard(props) {
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
        <br />
        <Typography className={classes.pos} color="textSecondary">
          Expense :
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Income :
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Currency :
        </Typography>
      </CardContent>
      <CardActions className={classes.root}>
        <IconButton size="small" onClick={props.openEditForm}>
          <EditIcon className={classes.editBtn} />
        </IconButton>
        <IconButton size="small" onClick={props.closeEditForm}>
          <DeleteIcon className={classes.deleteBtn} />
        </IconButton>
      </CardActions>
    </>
  );
}
