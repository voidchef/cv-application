import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  id: String,
  Name: String,
  Title: String,
  Phone: String,
  Email: String,
  Location: String,
  Description: String,
});

const experienceSchema = new mongoose.Schema({
  id: String,
  Company: String,
  Position: String,
  "Start Date": String,
  "End Date": String,
  Description: String,
});

const educationSchema = new mongoose.Schema({
  id: String,
  Course: String,
  University: String,
  "Start Date": String,
  "End Date": String,
  Description: String,
});

export const Personal = mongoose.model("personal", personalSchema);
export const Experience = mongoose.model("experience", experienceSchema);
export const Education = mongoose.model("education", educationSchema);
