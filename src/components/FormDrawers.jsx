/* eslint-disable no-unused-vars */
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, IconButton, List, ListItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
const FormDrawers = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          <List>
            <ListItem>
              <img
                src="https://i.ibb.co/4tqDmY1/logo31.png"
                alt="Byapon"
                className="w-36 my-5"
              />
            </ListItem>
            <Divider />
            <List>
              <ListItem className="gap-2 mr-3 hover:bg-[#F4F4F9] hover:rounded-r-3xl">
                <LanguageIcon />
                <a href="http://byapon.com">Our Website</a>
              </ListItem>
              <ListItem className="gap-2 mr-3 hover:bg-[#F4F4F9] hover:rounded-r-3xl">
                {" "}
                <FacebookIcon />
                <a href="www.facebook.com/ByaponSM">Our Facebook</a>
              </ListItem>
              <ListItem className="gap-2 mr-3 hover:bg-[#F4F4F9] hover:rounded-r-3xl">
                {" "}
                <TwitterIcon />
                <a href="https://twitter.com/byaponSM">Our X Twitter</a>
              </ListItem>
              <ListItem className="gap-2 mr-3 hover:bg-[#F4F4F9] hover:rounded-r-3xl">
                <YouTubeIcon />
                <a href="https://www.youtube.com/@byaponYSM">Our Youtube</a>
              </ListItem>
              <ListItem className="gap-2 mr-3 hover:bg-[#F4F4F9] hover:rounded-r-3xl">
                <TelegramIcon />
                <a href="https://t.me/byaponSYM">Our Telegram</a>
              </ListItem>
            </List>
            <Divider />
          </List>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default FormDrawers;
