import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    rollnum: {
      type: Number,
      required: true
    },
    present: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const stumodel = mongoose.model("stumodel", studentSchema);

export default stumodel;