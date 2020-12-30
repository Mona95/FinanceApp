import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    bottom: "-20px",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "2px 0px 2px #fff",
    textTransform: "uppercase",
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
});

export default useStyles;
