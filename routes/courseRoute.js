const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').get(courseController.getAllCourses);
router.route('/').post(courseController.createCourse);
router.route('/:slug').get(courseController.getCourse);

module.exports = router;