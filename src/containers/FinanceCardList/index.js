import React from "react";
import EditableFinanceCard from "../../components/EditableFinanceCard";
import GridList from "@material-ui/core/GridList";
import useStyles from "./financeCardList.style.js";

export default function FinanceCardList() {
  const classes = useStyles();
  return (
    <div className={classes.listWrapper}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        <EditableFinanceCard />
      </GridList>
    </div>
  );
}
