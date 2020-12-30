import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginRight: "24px !important",
  },
  textField: {
    width: "20ch",
  },
  addButton: {
    width: "40ch",
    display: "inline-block",
    marginLeft: "24px !important",
    //padding: "10px !important",
    top: 14,
  },
  addIcon: {
    position: "absolute",
    left: 20,
  },
}));

export default useStyles;
