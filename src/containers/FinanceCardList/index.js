import React from "react";
import EditableFinanceCard from "../../components/EditableFinanceCard";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import useStyles from "./financeCardList.style.js";
import { connect } from "react-redux";
import { isEmpty } from "../../utils";

function FinanceCardList(props) {
  const classes = useStyles();
  let { fCards } = props;
  return (
    <div className={classes.listWrapper}>
      {isEmpty(fCards) ? (
        <Typography>No Finance Card Found!</Typography>
      ) : (
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {fCards.map((card) => (
            <EditableFinanceCard card={card} />
          ))}
        </GridList>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  fCards: state.fCards,
});

export default connect(mapStateToProps)(FinanceCardList);
