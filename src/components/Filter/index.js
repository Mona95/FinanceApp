import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./filter.style.js";
import { connect } from "react-redux";
import { filterFCards } from "../../actions/actions";

function Filter(props) {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleFilterFCards = (e) => {
    setSearchValue(e.target.value);
    props.filterFCards(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Expense, Income or Currency"
        value={searchValue}
        onChange={handleFilterFCards}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  filterFCards: (searchStr) => dispatch(filterFCards(searchStr)),
});

export default connect(null, mapDispatchToProps)(Filter);
