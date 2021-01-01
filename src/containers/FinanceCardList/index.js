import React from "react";
import { connect } from "react-redux";
//Components
import EditableFinanceCard from "../../components/EditableFinanceCard";
//Material-ui Components
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
//Styles
import useStyles from "./financeCardList.style.js";
//Helper Methods
import { isEmpty } from "../../utils";

const FinanceCardList = (props) => {
  const classes = useStyles();
  let { fCards, filteredFCards, searchedValue } = props;
  return (
    <div className={classes.listWrapper}>
      {/** Need to check both fCards and filteredFCards in order to display cards.
       * if both of the state variables were empty => show "No Finance Card Found!"
       * if searchedValue is not empty , but filteredFCards is empty => "No Finance Card Found!"
       */}
      {(isEmpty(fCards) && isEmpty(filteredFCards)) ||
      (searchedValue !== "" && isEmpty(filteredFCards)) ? (
        <Typography>No Finance Card Found!</Typography>
      ) : (
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {!isEmpty(filteredFCards)
            ? filteredFCards.map((card, index) => (
                <EditableFinanceCard key={index} card={card} />
              ))
            : fCards.map((card, index) => (
                <EditableFinanceCard key={index} card={card} />
              ))}
        </GridList>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fCards: state.fCards,
  filteredFCards: state.filteredFCards,
  searchedValue: state.searchedValue,
});

export default connect(mapStateToProps)(FinanceCardList);
