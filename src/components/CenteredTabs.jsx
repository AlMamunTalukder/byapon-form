// import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import makeStyles from "@mui/styles/makeStyles";

const CenteredTabs = () => {
  return (
    <Paper className="flex-grow flex flex-row justify-center">
      <Tabs className="h-3">
        <Tab
          label="Questions"
          className="font-sans font-semibold h-3 text-capitalize text-[#5f6368] text-[12px]"
        ></Tab>
        <Tab label="Responses" className="h-3"></Tab>
        <Tab label="Setting" className="h-3"></Tab>
      </Tabs>
    </Paper>
  );
};

export default CenteredTabs;
