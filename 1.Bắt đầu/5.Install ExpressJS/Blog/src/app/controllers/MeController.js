const Course = require("../models/Course");

class MeController {
    //GET stored courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).lean(),
            Course.countDocumentsWithDeleted({deleted:true})
        ])
        .then(([courses, deletedCount]) => {
            res.render("me/stored-courses", { courses, deletedCount }); // Đúng cú pháp
        })
        .catch(next);
    }

    //GET trashed courses
    trashCourses(req, res, next) {
        Course.findDeleted({ deletedAt: { $ne: null } }).lean()
            .then(courses => {
                res.render("me/trash-courses", { courses });
            })
            .catch(next);
    }
}

module.exports = new MeController;
