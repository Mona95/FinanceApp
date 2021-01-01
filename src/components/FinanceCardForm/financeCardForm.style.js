import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    marginBottom: 17,
    fontSize: 14,
    marginTop: 26,
  },
  currencyCombo: {
    width: 168,
  },
  updateBtn: {
    border: "1px solid #249356",
    color: "#249356",
    "&:hover": {
      border: "1px solid #249356!important",
      color: "#249356!important",
    },
  },
  cancelBtn: {
    color: "lightslategray",
  },
});

export default useStyles;
