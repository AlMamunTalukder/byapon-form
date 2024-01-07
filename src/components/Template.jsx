import { Link, useNavigate } from "react-router-dom";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Divider, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import uuid from "react-uuid";
const Template = () => {
  const navigate = useNavigate();

  const createForm = () => {
    const uid = uuid();
    navigate(`/form/${uid}`);
  };
  const uid = uuid();
  return (
    <div className="bg-[rgb(234,236,239)] pb-10 pt-2">
      <div className="template_top flex flex-row items-center justify-between ml-44 mr-44 ">
        <div className="template_left">
          <span className="text-[16px] text-[#202124]">Start a New Form</span>
        </div>
        <div className="template_right flex flex-row items-center justify-center">
          <div className="gallery_button btn btn-sm rounded-md text-center border-none bg-transparent justify-between hover:bg-slate-200 text-[#202124]">
            Template Gallery
            <UnfoldMoreIcon />
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="template body flex text-black gap-6 ml-44">
        <div className="card" onClick={createForm}>
          <Link to={`/form/${uid}`}>
            <img
              src="https://i.ibb.co/WzwMFBq/forms-blank-googlecolors.png"
              alt=""
              className="w-44 hover:border-purple-300 hover:border-2 rounded-md"
            />
          </Link>
          <p>Blank Form</p>
        </div>
        <div className="worksheet">
          <a href="#">
            <img
              src="https://i.ibb.co/ggfWYvp/1-JL1-V2s-ZIk-u2mwd-Vz-A9-6-Br6uwpe-S-k-YTOJ4k-T2vm5c-400-1.png"
              alt=""
              className="w-44 hover:border-purple-300 hover:border-2 rounded-md"
            />
          </a>
          <p>Worksheet</p>
        </div>
        <div className="eventRegistration">
          <a href="#">
            <img
              src="https://i.ibb.co/0mSRGGq/1p-M0f-D5-FWTXCGw4h0g1-WSP8-Nj3m-S56l1-Ea-CZAec-p2uc-400-1.png"
              alt=""
              className="w-44 hover:border-purple-300 hover:border-2 rounded-md"
            />
          </a>
          <p>Event Registration</p>
        </div>
      </div>
    </div>
  );
};

export default Template;
