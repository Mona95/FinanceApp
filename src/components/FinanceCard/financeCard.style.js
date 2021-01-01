import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "2px 0px 2px #fff",
    textTransform: "uppercase",
    background: "#DBDDE7",
    borderRadius: 15,
  },
  pos: {
    marginBottom: 15,
    fontSize: 14,
  },
  deleteBtn: {
    color: "#c71621",
  },
  editBtn: {
    color: "#249356",
  },
  graphImg: {
    height: 150,
    width: 180,
    zIndex: "0",
    opacity: 0.1,
    position: "absolute",
    right: -41,
  },
  arrowDownIcon: {
    fontWeight: "bold",
    color: "red",
    position: "relative",
    right: 0,
    top: 6,
  },
  arrowUpIcon: {
    fontWeight: "bold",
    color: "green",
    position: "relative",
    right: 0,
    top: 6,
  },
  currencyIcon: {
    fontWeight: "bold",
    color: "#d2d286",
    position: "relative",
    right: 0,
    top: 7,
  },
});

export default useStyles;
