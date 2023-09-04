const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body);
    try {
        // 201: Bir istek gönderilirken
        // 400: bad request: Bir istek gönderiyorsun ama hatalı
        // res.status(201).json({
        //     status: 'success',
        //     course,
        // });

        // Üst tarafta yoruma alınmış satırı kullanmak istemezsen bunu kullan.
        res.send('Yeni Kurs Oluşturuldu');
    } catch {
        // TRY Kullanmak istemezsen:

        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};
