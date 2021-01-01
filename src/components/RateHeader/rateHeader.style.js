import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#e2e273",
    boxShadow: "none",
    fontSize: 14,
  },
  rateHeaderWrapper: {
    backgroundColor: "#e2e273",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  baseRate: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
  },
}));

export default useStyles;
