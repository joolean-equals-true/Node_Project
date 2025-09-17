var config = require('./dbconfig')
const sql = require('mysql2')
let course = require('./courses')
let pool = sql.createConnection(config)
async function getCourses(){
    return new Promise((resolve, reject) =>{
        console.log('getting courses...')
        pool.query("Select * from fall2025", (err, rows) => {
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function getCoursesByNumber(num){
    return new Promise((resolve, reject) => {
          console.log("running: " + "Select * from fall2025 where `Course Number` = '" + num + "'")
        pool.query("Select * from fall2025 where `Course Number` = '" + num + "'", (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function getCoursesByName(name){
    return new Promise((resolve, reject) => {
      
        pool.query("Select * from fall2025 where name = '" + name + "'", (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}


async function addCourse(course){
    return new Promise((resolve, reject) => {
        pool.query("Insert into fall2025 values ('" + course.Dept + "', '" + course.Course_Number + "', " + course.level + ", '" + course.hours + "', '" + course.name + "', '" + course.description + "')", (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function updateCourseByName(name, course){
    return new Promise((resolve, reject) => {
        pool.query("Update fall2025 set Dept = '" + course.Dept + "', `Course Number` = '" + course.Course_Number + "', level = " + course.level + ", hours = '" + course.hours + "', name = '" + course.name + "', description = '" + course.description + "' Where name = '" + name + "' ", (err, rows) => {
                if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function updateCourseByNumber(num, course){
    return new Promise((resolve, reject) => {
        pool.query("Update fall2025 set Dept = '" + course.Dept + "', `Course Number` = '" + course.Course_Number + "', level = " + course.level + ", hours = '" + course.hours + "', name = '" + course.name + "', description = '" + course.description + "' Where `Course Number` = '" + num + "' ", (err, rows) => {
                if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function deleteCourseByNumber(num){
    return new Promise((resolve, reject) =>{
        pool.query("Delete from fall2025 where `Course Number` = '" + num +"'", (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function deleteCourseByName(name){
    return new Promise((resolve, reject) =>{
        pool.query("Delete from fall2025 where name = '" + name + "'", (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

module.exports = {
    getCourses: getCourses,
    getCoursesByName: getCoursesByName,
    getCoursesByNumber: getCoursesByNumber,
    updateCourseByName: updateCourseByName,
    updateCourseByNumber: updateCourseByNumber,
    addCourse: addCourse,
    deleteCourseByNumber : deleteCourseByNumber,
    deleteCourseByName: deleteCourseByName
}
