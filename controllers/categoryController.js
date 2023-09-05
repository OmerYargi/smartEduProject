const Category = require('../models/Category.js');

// Yeni kurs oluşturmak için kullanılır.
exports.createCategory = async (req, res) => {
    const category = await Category.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            category,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};
