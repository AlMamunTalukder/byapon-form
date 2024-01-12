import { useState } from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SubjectIcon from "@mui/icons-material/Subject";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Radio from "@mui/material/Radio";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CloseIcon from "@mui/icons-material/Close";
const QuestionsForm = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital?",
      questionType: "radio",
      options: [
        { optionText: "Cumilla" },
        { optionText: "Dhaka" },
        { optionText: "Chittagong" },
        { optionText: "Rajshahi" },
        { optionText: "Sylet" },
      ],
      open: true,
      required: false,
    },
  ]);

  const questionUI = () => {
    return questions.map((ques, i) => (
      <div key={i}>
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "add_border" : ""}
        >
          <AccordionSummary
            aria-controls="panelia-content"
            id="panelia-header"
            elevation={1}
            className="w-full"
          >
            {questions[i].open ? (
              <div className="saved_questions">
                <Typography className="text-[15px] font-normal tracking-wide leading-6 pb-2 text-[#202124]">
                  {i + 1}. {questions[i].questionText}
                </Typography>

                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div className="flex">
                      <FormControlLabel
                        className="ml-[5px] mb-[5px]"
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            className="text-primary mr-1"
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography className=" font-sans text-[13px] font-normal tracking-wide leading-5 text-[#202124]">
                            {op.optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>

          <div className="question_boxes flex flex-row justify-center">
            <AccordionDetails className="add_question bg-white rounded-lg px-6 py-[22px] capitalize flex flex-col pt-0 w-[93%] ml-[10px]">
              <div className="add_question_top flex flex-row items-center justify-between">
                <input
                  type="text"
                  className="question box-border mt-[10px] font-sans text-base font-normal flex-1 leading-10 w-2/5 bg-white border-none outline-none text-black h-10 p-2 focus:border-b focus:to-purple-800 focus:bg-[#F4F4F9] "
                  placeholder="Questions"
                  value={ques.questionText}
                ></input>
                <CropOriginalIcon className="text-[#5f6368]" />
                <Select className="select text-[#5f6368] text-[13px] h-10 w-[230px] border-2 border-[#F4F4F9] rounded bg-transparent">
                  <MenuItem id="text" value="text" className="text-black">
                    <SubjectIcon className="mr-3" /> Paragraph
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="checkbox"
                    className="text-black"
                  >
                    <CheckBoxIcon className="mr-3 text-[#70757a]" checked />
                    Checkbox
                  </MenuItem>
                  <MenuItem id="radio" value="radio" className="text-black">
                    <Radio className="mr-3 text-[#70757a]" checked />
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>

              {ques.options.map((op, j) => (
                <div className="add_question_body flex items-center" key={j}>
                  {ques.questionType != "text" ? (
                    <input type={ques.questionType} className="mr-3 " />
                  ) : (
                    <ShortTextIcon className="mr-3" />
                  )}
                  <div>
                    <input
                      type="text"
                      className="text-input outline-none border-none h-10 w-[490px] font-sans text-[13px] font-normal tracking-wide text-[#202124] focus:border-b-2 focus:border-purple-500 bg-white"
                      value={ques.options[j].optionText}
                      placeholder="option"
                    />
                  </div>

                  <CropOriginalIcon className="text-[#5f6368]" />
                  <IconButton aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
              <div className="add_footer">
                <div className="add_question_bottom_left">
                  <Button
                    size="small"
                    className="normal-case text-[#4285f4] text-[13px] font-semibold"
                  >
                    {/* <FcRightUp className="border-[#4285f4] border-[2px] p-[2px] mr-2" /> */}
                    Answer Key
                  </Button>
                </div>
              </div>
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    ));
  };
  return (
    <div>
      <div className="question_form bg-[#F4F4F9] h-full pb-[30px]">
        <br />
        <div className="section m-auto w-1/2">
          <div className="question_title_section">
            <div className="question_form_top bg-white rounded-lg px-[30px] py-[25px] border-t-8 border-[#673AB7] space-y-4">
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
          {questionUI()}
        </div>
      </div>
    </div>
  );
};

export default QuestionsForm;
