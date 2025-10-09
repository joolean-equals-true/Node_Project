const db = require("../models");
const Course = db.course;
const Op = db.Sequelize.Op;
// Create and Save a new course

exports.create = (req, res) => {
  // Validate request

  // Create a course
  //ADD ATTRIBUTES HERE
  const course = {
    Dept: req.body.Dept,
    Course_Number: req.body.Course_Number,
    Level: req.body.Level,
    Hours: req.body.Hours,
    Name: req.body.Name,
    Description: req.body.Description
  };
  // Save course in the database

  Course.create(course).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course."
      });
    });
};
// Retrieve all courses from the database.
exports.findAll = (req, res) => {
  
  Course.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });
};
// Find a single course with an id
exports.findOne = (req, res) => {
  const Course_Number = req.params.Course_Number;
  console.log(Course_Number)
  Course.findByPk(Course_Number)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find course with id=${Course_Number}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving course with id=" + Course_Number
      });
    });
};
// Update a course by the id in the request
exports.update = (req, res) => {
  const Course_Number = req.params.Course_Number;
  Course.update(req.body, {
    where: { Course_Number: Course_Number }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "course was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update course with id=${Course_Number}. Maybe course was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating course with id=" + id
      });
    });
};
// Delete a course with the specified id in the request
exports.delete = (req, res) => {
  const Course_Number = req.params.Course_Number;
  Course.destroy({
    where: { Course_Number: Course_Number }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "course was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete course with id=${Course_Number}. Maybe course was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete course with id=" + Course_Number
      });
    });
};
// Delete all courses from the database.
