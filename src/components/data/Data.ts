import uniqid from "uniqid";
import {
  PersonalModel,
  ExperienceModel,
  EducationModel,
} from "../../models/interface-models";

export const Personal: PersonalModel = {
  Name: "",
  Title: "",
  Phone: "",
  Email: "",
  Location: "",
  Description: "",
  id: uniqid(),
};

export const Experience: ExperienceModel = {
  Company: "",
  Position: "",
  "Start Date": "",
  "End Date": "",
  Description: "",
  id: uniqid(),
};

export const Education: EducationModel = {
  Course: "",
  University: "",
  "Start Date": "",
  "End Date": "",
  Description: "",
  id: uniqid(),
};
