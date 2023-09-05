const Course = require('../models/Course');
const Category = require('../models/Category');

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
        const categorySlug = req.query.categories;
        const category = await Category.findOne({ slug: categorySlug });
        let filter = {};
        if (categorySlug) {
            filter = { category: category._id };
        }

        const courses = await Course.find(filter);
        const categories = await Category.find();
        res.status(200).render('courses', {
            courses,
            categories,
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
        const course = await Course.findOne({ slug: req.params.slug });
        res.status(200).render('course', {
            course,
            page_name: 'course',
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};
