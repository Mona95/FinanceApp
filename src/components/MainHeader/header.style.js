import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    flexGrow: 1,
    minHeight: 80,
  },
  appIcon: {
    marginRight: theme.spacing(2),
    fontSize: 35,
    marginBottom: 5,
    color: "yellow",
  },
  totalInfo: {
    marginRight: theme.spacing(4),
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  incomeInfo: {
    color: "#63c66f",
  },
  expenseInfo: {
    color: "#dd5f67",
  },
  baseInfo: {
    color: "lightgray",
  },
}));

export default useStyles;
