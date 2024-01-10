import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExtensionIcon from "@mui/icons-material/Extension";
import PaletteIcon from "@mui/icons-material/Palette";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CenteredTabs from "./CenteredTabs";
import QuestionsForm from "./QuestionsForm/QuestionsForm";
const FormHeader = () => {
  return (
    <>
      <div className="flex  py-1 justify-between sticky items-center bg-white text-black h-16">
        <div className="info flex ml-2 items-center gap-3">
          <img
            src="https://i.ibb.co/x7TJmkM/image.png"
            alt=""
            className="h-10 w-10"
          />
          {/* <Input className=" " placeholder="Untitled Form"></Input> */}
          <input
            className="bg-transparent border-none border-b focus:border-b focus:border-black focus:outline-none"
            type="text"
            placeholder="Untitled Form"
          />
          <FolderOpenOutlinedIcon />
          <StarBorderIcon />
          <p>All Changes saved in Drive</p>
        </div>

        <div className="right space-x-3">
          <IconButton>
            <ExtensionIcon
              className="text-[16px] text-gray-500"
              placeholder="Add On"
            />
          </IconButton>
          <IconButton>
            <PaletteIcon className="text-[16px] text-gray-500" />
          </IconButton>
          <IconButton>
            <VisibilityIcon className="text-[16px] text-gray-500" />
          </IconButton>
          <IconButton>
            <UndoIcon className="text-[16px] text-gray-500" />
          </IconButton>
          <IconButton>
            <RedoIcon className="text-[16px] text-gray-500" />
          </IconButton>
          <button className="btn btn-primary">Send</button>
          <IconButton>
            <MoreVertIcon className="text-[16px] text-gray-500" />
          </IconButton>
          <IconButton>
            <Avatar src="https://i.ibb.co/nmmF9WR/image.png" />
          </IconButton>
        </div>
      </div>
      <div className="flex gap-5 flex-row justify-center bg-white text-black">
        <CenteredTabs />
      </div>
      <QuestionsForm />
    </>
  );
};

export default FormHeader;
