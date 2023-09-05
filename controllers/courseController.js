const Course = require('../models/Course');

// Yeni kurs oluşturmak için kullanılır.
exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            course,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};

// Tüm kursları alıp sıralamak için kullanılır.
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).render('courses', {
            courses,
            page_name: 'courses',
        });

        // Postman üzerinden test yapmak için bu kod kullanıldı.
        // res.status(200).json({
        //     status: 'succes',
        //     courses,
        // });
    } catch (error) {
        res.send(error);
    }
};

exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById({ _id: req.params.id });
        res.status(200).render('course', {
            course,
            page_name: 'course',
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error,
        });
    }
};
