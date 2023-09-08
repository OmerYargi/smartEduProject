const User = require('../models/User');
const bcrypt = require('bcrypt');

// Yeni kullanıcı oluşturmak için kullanılır.
exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};

// Eskiden oluşturulmuş kullanıcı var mı yok mu. Giriş sayfası
exports.loginUser = async (req, res) => {
    try {
        // Form üzerinden verileri alıyoruz
        const { email, password } = req.body;
        // Form üzerinden gelen mail adresi var mı yok mu kontrol ediyoruz.
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).send('kullanici yok');
        }
        // Database üzerinden gelen user.password ile form üzerinden gelen password karşılaştırması yapılıyor.
        const same = await bcrypt.compare(password, user.password);
        if (same) {
            res.status(200).send('login');
        } else {
            res.status(400).send('Şifre Hatalı');
        }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};
