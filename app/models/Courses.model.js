module.exports = (sequelize, Sequelize) => {
  const course = sequelize.define("course", {
    //FIcL OUT ATTIBUTES HERE
    Dept: {
      type: Sequelize.STRING
    },
    Course_Number: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Level: {
      type: Sequelize.INTEGER
    },
    Hours: {
      type: Sequelize.INTEGER
    },
    Name: {
      type: Sequelize.STRING
    },
    Description: {
      type: Sequelize.STRING
    }
  });
  return course;
};