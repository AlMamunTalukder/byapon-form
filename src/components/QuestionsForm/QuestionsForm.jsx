import { useState } from "react";
import { MenuItem, Select, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SubjectIcon from "@mui/icons-material/Subject";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Radio from "@mui/material/Radio";
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
            style={{ width: "100%" }}
          >
            {questions[i].open ? (
              <div className="saved_questions">
                {/* Display question number and text */}
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {questions[i].questionText}
                </Typography>

                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: "13px",
                              fontWeight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {ques.options[j].optionText}
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

          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Questions"
                  value={ques.questionText}
                ></input>
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                >
                  <MenuItem id="text" value="text">
                    {" "}
                    <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                  </MenuItem>
                  <MenuItem id="checkbox" value="checkbox">
                    {" "}
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />{" "}
                    Checkbox
                  </MenuItem>
                  <MenuItem id="radio" value="radio">
                    {" "}
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />{" "}
                    Multiple Choice
                  </MenuItem>
                  <MenuItem>Paragraph</MenuItem>
                </Select>
              </div>

{ques.options.map((op,j)=>(

<div className="add_question_body" key={j}>
{
  (ques.questionType!="text")?
  <input type={ques.questionType} style={{marginRight:'10px'}}/>
}

</div>


))}






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
