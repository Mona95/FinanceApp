import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@keyframes blinker": {
    "0%": { opacity: 0 },
    "49%": { opacity: 0 },
    "50%": { opacity: 1 },
  },
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
    animationName: "$blinker",
    animationDuration: "0.4s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
}));

export default useStyles;
