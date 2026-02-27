import express from "express";
import { addstudent, deletestudent, getallstudents, toggleattendance } from "../controller/studentcontroller.js";

const router = express.Router();

router.post("/", addstudent)
router.get("/", getallstudents );
router.put("/:id/attdence", toggleattendance)
router.delete("/:id", deletestudent)

export default router;