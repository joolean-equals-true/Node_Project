module.exports = app => {
  const course = require("../controllers/course.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  //change
  router.post("/", course.create)
  // Retrieve all course;
  //chagne
  router.get("/", course.findAll);
  // Retrieve all published course
  //change
  router.get("/:Course_Number", course.findOne);
  // Update a Tutorial with id
  //change
  router.put("/:Course_Number", course.update);
  // Delete a Tutorial with id
  //change
  router.delete("/:Course_Number", course.delete);
  // Delete all Tutorials
  app.use('/course-t4/courses', router);
};