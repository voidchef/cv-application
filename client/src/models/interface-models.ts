export interface PersonalInterface{
  _id: string;
  _v: number;
  Name: string;
  Title: string;
  Phone: string;
  Email: string;
  Location: string;
  Description: string;
}

export interface ExperienceInterface {
  _id: string;
  _v: number;
  Company: string;
  Position: string;
  "Start Date": string;
  "End Date": string;
  Description?: string;
}

export interface EducationInterface {
  _id: string;
  _v: number;
  Course: string;
  University: string;
  "Start Date": string;
  "End Date": string;
  Description?: string;
}

export interface State {
  personal: PersonalInterface[];
  experience: ExperienceInterface[];
  education: EducationInterface[];
}
