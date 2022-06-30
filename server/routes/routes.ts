import express, { Request, Response } from "express";
import "dotenv/config";
import { expressjwt } from "express-jwt";
import { generateToken } from "../utils/jwt.utils";
import { Personal, Experience, Education } from "../models/model";

const router = express.Router();

router.get("/auth", (req: Request, res: Response) => {
  try {
    const token = generateToken();
    res.json({ token, message: "Authenticated" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get(
  "/getAll",
  expressjwt({
    secret: process.env.TOKEN_SECRET as string,
    algorithms: ["HS256"],
  }),
  async (req: Request, res: Response) => {
    try {
      const personal = await Personal.find();
      const experience = await Experience.find();
      const education = await Education.find();
      res.json({ personal, experience, education });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.get(
  "/getOne/:group/:id",
  expressjwt({
    secret: process.env.TOKEN_SECRET as string,
    algorithms: ["HS256"],
  }),
  async (req: Request, res: Response) => {
    try {
      const { group, id } = req.params;

      let data;
      if (group === "personal") data = await Personal.findById(id);
      else if (group === "experience") data = await Experience.findById(id);
      else if (group === "education") data = await Education.findById(id);

      res.json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.post(
  "/post/:group",
  expressjwt({ secret: process.env.TOKEN_SECRET!, algorithms: ["HS256"] }),
  async (req: Request, res: Response) => {
    const { group } = req.params;

    let data: any;
    if (group === "experience") {
      data = new Experience({
        Company: req.body.Company,
        Position: req.body.Position,
        ["Start Date"]: req.body["Start Date"],
        ["End Date"]: req.body["End Date"],
        Description: req.body.Description,
      });
    } else if (group === "education") {
      data = new Education({
        Course: req.body.Course,
        University: req.body.University,
        ["Start Date"]: req.body["Start Date"],
        ["End Date"]: req.body["End Date"],
        Description: req.body.Description,
      });
    }

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.patch(
  "/update/:group/:id",
  expressjwt({ secret: process.env.TOKEN_SECRET!, algorithms: ["HS256"] }),
  async (req, res) => {
    try {
      const { group, id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      let result;
      if (group === "personal")
        result = await Personal.findByIdAndUpdate(id, updatedData, options);
      else if (group === "experience")
        result = await Experience.findByIdAndUpdate(id, updatedData, options);
      else if (group === "education")
        result = await Education.findByIdAndUpdate(id, updatedData, options);

      res.send(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.delete(
  "/delete/:group/:id",
  expressjwt({ secret: process.env.TOKEN_SECRET!, algorithms: ["HS256"] }),
  async (req, res) => {
    try {
      const { group, id } = req.params;

      if (group === "experience") await Experience.findByIdAndDelete(id);
      else if (group === "education") await Education.findByIdAndDelete(id);

      res.send(`Document has been deleted..`);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

module.exports = router;
