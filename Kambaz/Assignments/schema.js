import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    points: Number,
    dueDate: Date,
    availableDate: Date,
    availableUntilDate: Date,
  }
);

export default assignmentSchema;
