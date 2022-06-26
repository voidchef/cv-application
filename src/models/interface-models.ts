export interface PersonalModel {
  id: string;
  Name: string;
  Title: string;
  Phone: string;
  Email: string;
  Location: string;
  Description: string;
}

export interface ExperienceModel {
  id: string;
  Company: string;
  Position: string;
  "Start Date": string;
  "End Date": string;
  Description?: string;
}

export interface EducationModel {
  id: string;
  Course: string;
  University: string;
  "Start Date": string;
  "End Date": string;
  Description?: string;
}

export interface State {
  personal: PersonalModel[];
  experience: ExperienceModel[];
  education: EducationModel[];
}
