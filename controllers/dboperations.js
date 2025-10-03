var config = require('../deploy/config/dbconfig')
const sql = require('mysql2')
let course = require('../models/courses')
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
        pool.query("Select * from fall2025 where `Course Number` = ? ",(num), (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function getCoursesByName(name){
    return new Promise((resolve, reject) => {
      
        pool.query("Select * from fall2025 where name = ",(name), (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function getCoursesByHours(hours){
    return new Promise((resolve, reject) => {
      
        pool.query("Select * from fall2025 where hours = ?",(hours), (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function getCoursesByLevel(level){
    return new Promise((resolve, reject) => {
      
        pool.query("Select * from fall2025 where level = ?", (level), (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function getCoursesByDept(dept){
    return new Promise((resolve, reject) => {
      
        pool.query("Select * from fall2025 where dept = ?", (dept), (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function addCourse(course){
            values = [course.Dept, course.Course_Number, course.level, course.hours, course.name, course.description]
    return new Promise((resolve, reject) => {
        pool.query("Insert into fall2025 (Dept, `Course Number`, level, hours, name, description ) values (?, ?, ?, ?, ?, ?)", values, (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function updateCourseByName(name, course){
    values = [course.Dept, course.Course_Number, course.level, course.hours, course.name, course.description, name]
    return new Promise((resolve, reject) => {
        pool.query("Update fall2025 set Dept = ?, `Course Number` = ?, level = ?, hours = ?, name = ?, description = ? Where name = ?", values, (err, rows) => {
                if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function updateCourseByNumber(num, course){
    values = [course.Dept, course.Course_Number, course.level, course.hours, course.name, course.description, num]
    return new Promise((resolve, reject) => {
        pool.query("Update fall2025 set Dept = ?, `Course Number` = ?, level = ?, hours = ?, name = ?, description = ? Where `Course Number` = ?", values, (err, rows) => {
                if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function deleteCourseByNumber(num){
    return new Promise((resolve, reject) =>{
        pool.query("Delete from fall2025 where `Course Number` = ?",(num), (err, rows) =>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function deleteCourseByName(name){
    return new Promise((resolve, reject) =>{
        pool.query("Delete from fall2025 where name = ?",(name), (err, rows) =>{
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
    getCoursesByDept: getCoursesByDept,
    getCoursesByHours: getCoursesByHours,
    getCoursesByLevel: getCoursesByLevel,
    updateCourseByName: updateCourseByName,
    updateCourseByNumber: updateCourseByNumber,
    addCourse: addCourse,
    deleteCourseByNumber : deleteCourseByNumber,
    deleteCourseByName: deleteCourseByName
}
