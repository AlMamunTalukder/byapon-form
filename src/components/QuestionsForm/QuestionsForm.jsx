import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

import FilterNoneIcon from "@material-ui/icons/FilterNone";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";

import { BsTrash } from "react-icons/bs";
import { IconButton } from "@material-ui/core";

import { BsFileText } from "react-icons/bs";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import { FcRightUp } from "react-icons/fc";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const QuestionsForm = () => {
  return (
    <div>
      <div className="question_form bg-[#F4F4F9] h-full pb-[30px]">
        <br />
        <div className="section m-auto w-1/2">
          <div className="question_title_section">
            <div className="question_form_top bg-white rounded-lg px-[30px] py-[25px] capitalize border-t-8 border-[#673AB7] space-y-4">
              <input
                type="text"
                className="question_form_top_name text-black box-border font-sans text-[32px] font-normal leading-10  w-full border-none outline-none border-b-[1px] border-b-blue-50 h-9 bg-white"
                placeholder="Untitled document"
              />
              <input
                type="text"
                className="question_form_top_desc bg-white text-black border-none outline-none"
                placeholder="Form Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsForm;
