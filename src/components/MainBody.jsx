import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Divider, IconButton } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const MainBody = () => {
  return (
    <div className="MainBody bg-white ml-[160px] mr-40 ">
      <div className="mainbody_top flex flex-row justify-between items-center mt-4 mx-3">
        <div className="mainbody_top_right flex flex-row items-center">
          Recent Form
        </div>
        <div className="mainbody_top_center flex flex-row items-center justify-between ml-8">
          <div className="py-1 rounded-md text-16 flex flex-row items-center">
            Owned by Anyone <ArrowDropDownIcon />
          </div>
          <div className="flex flex-row items-center ">
            <IconButton>
              <StorageIcon className="text-[16px] text-black" />
            </IconButton>
            <IconButton>
              <SortByAlphaIcon />
            </IconButton>
            <IconButton>
              <FolderOpenIcon className="text-[16px] text-black" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* --------------------- */}
      <div className="mainbody_docs flex flex-wrap justify-start mt-5 ml-3 ">
        <div className="docs_card flex flex-col box-border w-52 mb-5 hover:border-[#6E2594] border-2 rounded-sm">
          <img
            src="https://i.ibb.co/ggfWYvp/1-JL1-V2s-ZIk-u2mwd-Vz-A9-6-Br6uwpe-S-k-YTOJ4k-T2vm5c-400-1.png"
            alt=""
            className="box-border h-36 w-52"
          />
          <Divider />
          <div className="doc_card_content ml-6 mr-2 my-4 text-black">
            <p>Library</p>
            <div className="doc_content flex flex-row justify-between text-[12px] text-gray-400">
              <div className="content_left">
                <StorageIcon className="text-[12px] text-white font-bold bg-[#6E2594] p-1 mr-1 rounded-sm" />
                Opened 6th Jan
              </div>
              <MoreVertIcon className="text-[16px] text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
