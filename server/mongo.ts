import mongoose from "mongoose";
import "dotenv/config";
import { Personal, Experience, Education } from "./models/model";
import { personalData, experienceData, educationData } from "./data/default";
import "dotenv/config";

mongoose.connect(process.env.DATABASE_URL as string);

Personal.insertMany(personalData)
  .then(() => {
    console.log("Personal Data Saved Successfully");
  })
  .catch((error: Error) => {
    console.log(error);
  });

Experience.insertMany(experienceData)
  .then(() => {
    console.log("Experience Data Saved Successfully");
  })
  .catch((error: Error) => {
    console.log(error);
  });

Education.insertMany(educationData)
  .then(() => {
    console.log("Education Data Saved Successfully");
  })
  .catch((error: Error) => {
    console.log(error);
  });
