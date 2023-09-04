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