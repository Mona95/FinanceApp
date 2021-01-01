import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    marginTop: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    boxShadow: "none",
  },
  divider: {
    marginTop: "10px !important",
  },
}));

export default useStyles;
