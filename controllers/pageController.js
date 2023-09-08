// INDEX PAGE ROUTE
exports.getIndexPage = (req, res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name: 'index',
    });
};

// ABOUT PAGE ROUTE
exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

// SIGNUP PAGE ROUTE
exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
};

// Login PAGE ROUTE
exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login',
    });
};
