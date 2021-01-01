import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginRight: "24px !important",
  },
  addButton: {
    display: "inline-block",
    marginLeft: "24px !important",
    top: 14,
    width: "-webkit-fill-available",
  },
  addIcon: {
    position: "absolute",
    left: 20,
  },
  paper: {
    boxShadow: "none",
  },
}));

export default useStyles;
