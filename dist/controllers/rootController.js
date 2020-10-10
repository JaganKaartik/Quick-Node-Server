"use strict";
const rootController = (req, rep) => {
    rep.render('pages/index');
};
module.exports = rootController;
