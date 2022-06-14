import uniqid from 'uniqid';

export const DefaultPersonal = {
  Name: "John Doeman",
  Title: "Software Developer",
  Phone: "01234 567890",
  Email: "doeman@gmail.com",
  Location: "Bristol, UK",
  Description:
    "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
  id: uniqid(),
};

export const DefaultExperience = [
  {
    Company: "A Software Company",
    Position: "Software Engineer",
    "Start Date": "2018",
    "End Date": "Present",
    Description:
      "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
    id: uniqid(),
  },
  {
    Company: "My First Company",
    Position: "Graduate Engineer",
    "Start Date": "2017",
    "End Date": "2018",
    Description:
      "Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.",
    id: uniqid(),
  },
  {
    Company: "University",
    Position: "Tutor",
    "Start Date": "2015",
    "End Date": "2017",
    Description: "Enim elit aliquip fugiat anim proident.",
    id: uniqid(),
  },
];

export const DefaultEducation = [
  {
    Course: "CS50: Introduction to Computer Science",
    University: "Harvard University",
    "Start Date": "2020",
    "End Date": "Present",
    Description: "",
    id: uniqid(),
  },
  {
    Course: "Fullstack JavaScript",
    University: "The Odin Project",
    "Start Date": "2019",
    "End Date": "Present",
    Description: "",
    id: uniqid(),
  },
];
