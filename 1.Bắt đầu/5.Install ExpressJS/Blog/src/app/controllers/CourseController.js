const Course = require("../models/Course")

class CourseController {
    //GET search
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then((course) => {
                res.render('courses/show', { course })
            })
            .catch(next)
    }

    create(req, res) {
        res.render('courses/create')
    }

    //cap nhat
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', { course }))
            .catch(next)
    }

    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    // Xóa mềm khóa học
    delete(req, res, next) {
        Course.deleteById(req.params.id)  // Sử dụng deleteById
            .then(() => res.redirect('back'))
            .catch(next);
    }

    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                console.log(`Đã xóa vĩnh viễn khóa học ${req.params.id}`);
                res.redirect("back");
            })
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(result => {
                console.log('Restore thành công:', result);
                res.redirect('back');
            })
            .catch(err => {
                console.error('Lỗi khi restore:', err);
                next(err);
            });
    }

}


module.exports = new CourseController