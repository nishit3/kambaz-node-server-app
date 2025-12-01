import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function CoursesDao(db) {
  function findAllCourses() {
    // Return _id, name, and description for Dashboard
    return model.find({}, { _id: 1, name: 1, description: 1, imageName: 1, number: 1 });
  }

  function findCourseById(courseId) {
    return model.findById(courseId);
  }

  function createCourse(course) {
    const newCourse = { ...course, _id: uuidv4() };
    return model.create(newCourse);
  }

  function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
  }

  function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  }

  return {
    findAllCourses,
    findCourseById,
    createCourse,
    deleteCourse,
    updateCourse,
  };
}
