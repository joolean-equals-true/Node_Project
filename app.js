var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var db = require('./dboperations')
var course = require('./courses')
var body_parser = require('body-parser')
var cors = require('cors')
var app = express();
var router = express.Router()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api', router)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));



/* 
//this will need to be changed later!!!


app.use('/', indexRouter);
app.use('/users', usersRouter);
*/


// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

*/

//get functions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Optionally clean up resources
  // Avoid restarting the app unless necessary
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  // Log and recover, do not crash
});

router.route('/courses').get((request, response) =>{
 if (request.query.name) {
    return db.getCoursesByName(request.query.name).then(data => response.json(data));
  } else if (request.query.number) {
    return db.getCoursesByNumber(request.query.number).then(data => response.json(data));
  }else if(request.query.hours){
    return db.getCoursesByHours(request.query.hours).then(data => response.json(data));
  } else if(request.query.level){
    return db.getCoursesByLevel(request.query.level).then(data => response.json(data));
  }
  else if(request.query.dept){
    return db.getCoursesByDept(request.query.dept).then(data => response.json(data));
  }else {
    return db.getCourses().then(data => response.json(data));
  }
});


//Post requests
router.route('/courses').post((request, response) => {
  
  
  let course_data = new course(request.body.dept, request.body.course_number, request.body.level, request.body.hours, request.body.name, request.body.description)
  db.addCourse(course_data).then((data) =>{
    response.status(201).json(data);
  })
})

//Put requests
router.route('/courses').put((request, response) => {
  let course_data = new course(request.body.dept, request.body.course_number, request.body.level, request.body.hours, request.body.name, request.body.description)
  if (request.query.name) {
    return db.updateCourseByName(request.query.name, course_data).then(data => response.json(data));
  } else if (request.query.number) {
    return db.updateCourseByNumber(request.query.number, course_data).then(data => response.json(data));
  }
})


//Delete
router.route('/courses').delete((request, response) =>{
   if (request.query.name) {
    return db.deleteCourseByName(request.query.name).then(data => response.json(data));
  } else if (request.query.number) {
    return db.deleteCourseByNumber(request.query.number).then(data => response.json(data));
  }
})


var port = process.env.PORT || 3467;
app.listen(port);
console.log('Courses API is running and listening to port: ' + port)







module.exports = app;
