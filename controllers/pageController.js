// INDEX PAGE ROUTE
exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: 'index',
    });
}

// ABOUT PAGE ROUTE
exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
}

// ABOUT PAGE ROUTE
exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
}