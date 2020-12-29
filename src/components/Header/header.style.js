import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    flexGrow: 1,
  },
  appIcon: {
    marginRight: theme.spacing(2),
    fontSize: 35,
  },
  totalInfo: {
    marginRight: theme.spacing(2),
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

export default useStyles;
