var express = require('express');
var router = express.Router();

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Task = require('../models/Tasks');

/* GET /api/tasks listing. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function (err, tasks) {
    if (err) return next(err);
    res.json(tasks);
  });
});

/* POST /api/tasks */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Task.create(req.body, function (err, task) {
    if (err) return next(err);
    res.json(task);
  });
});

/* GET /tasks/id */
// http://localhost:5000/api/tasks/5566a21e1e3a211aa1c63495
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function (err, task) {
    if (err) return next(err);
    res.json(task);
  });
});

/* PUT /tasks/:id */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, task) {
    if (err) return next(err);
    res.json(task);
  });
});

/* PATCH /tasks/:id */
router.patch('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, task) {
    if (err) return next(err);
    res.json(task);
  });
});

/* DELETE /tasks/:id */
router.delete('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndRemove(req.params.id, req.body, function (err, task) {
    if (err) return next(err);
    res.json(task);
  });
});

module.exports = router;
