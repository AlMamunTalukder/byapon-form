import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppIcon from "@mui/icons-material/Apps";
import FormDrawers from "./components/FormDrawers";

const Header = () => {
  return (
    <div className="flex  py-1 justify-between sticky items-center bg-white text-black h-16">
      <div className="info flex ml-2 items-center">
        <FormDrawers />
        <img
          src="https://i.ibb.co/x7TJmkM/image.png"
          alt=""
          className="h-10 w-10"
        />
        <p className="text-[22px] pl-1 text-[#5f6368] font-sans">Forms</p>
      </div>
      <div className="search flex-row items-center bg-[#f4f4f9] w-[700px] h-12 border-2 rounded-md mt-2">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          className="border-none h-10 bg-transparent outline-none w-[650px]"
        />
      </div>
      <div className="right">
        <IconButton>
          <AppIcon />
        </IconButton>
        <IconButton>
          <Avatar src="https://i.ibb.co/nmmF9WR/image.png" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
