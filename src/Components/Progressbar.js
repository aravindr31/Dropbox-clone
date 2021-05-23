import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStateProviderValue } from "../StateProvider";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={10} mr={1.5}>
        <Typography
          variant="body2"
          color="textPrimary"
          style={uploadingStyle.upload}
        >
          Uploading
        </Typography>
      </Box>
      <Box width="90%" m={"auto"}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={10} ml={1.5}>
        <Typography variant="body2" color="textPrimary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const uploadingStyle = {
  upload: {
    fontSize: "18px",
    color: " #626262",
    fontWeight: " 400",
  },
};

export default function Progressbar() {
  const classes = useStyles();
  const [progress, setProgress] = useState();
  const [{ progressLevel }, dispatch] = useStateProviderValue();
  useEffect(() => {
    setProgress(progressLevel * 100);
  }, [progressLevel]);
  useEffect(() => {
    if (progressLevel == 1) {
      console.log("setting back to 0");
      dispatch({
        type: "SET_PROGRESS_LEVEL",
        progressLevel: 0,
      });
    }
  }, [progressLevel]);
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}
