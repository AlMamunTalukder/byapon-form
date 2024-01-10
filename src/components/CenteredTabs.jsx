// import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import makeStyles from "@mui/styles/makeStyles";

const CenteredTabs = () => {
  const labelStyle = {
    textTransform: "capitalize",
    fontSize: "14px",
    color: "#5f6368",
    fontWeight: "bold",
  };
  return (
    <Paper className="flex-grow flex flex-row justify-center">
      <Tabs className="h-3">
        <Tab label="Questions" style={labelStyle} />
        <Tab label="Responses" style={labelStyle} />
        <Tab label="Setting" style={labelStyle} />
      </Tabs>
    </Paper>
  );
};

export default CenteredTabs;
