const Course = require("../models/Course");

class CourseController {
    /**
     * Hiển thị thông tin khóa học dựa vào slug
     * @route GET /courses/:slug
     */
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    /**
     * Hiển thị trang tạo khóa học
     * @route GET /courses/create
     */
    create(req, res) {
        res.render('courses/create');
    }

    /**
     * Hiển thị trang chỉnh sửa khóa học
     * @route GET /courses/:id/edit
     */
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', { course }))
            .catch(next);
    }

    /**
     * Lưu khóa học mới vào database
     * @route POST /courses/store
     */
    store(req, res, next) {
        // Tạo ảnh thumbnail từ YouTube video ID
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

        Course.findOne({}
            .sort({ _id: 'desc' })
            .then(latestCourse => {
                return res.json(latestCourse)
                req.body._id = 1
                const course = new Course(req.body);
                course.save()
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch(next);
            })
        )
        // Tạo đối tượng Course và lưu vào DB
    }

    /**
     * Cập nhật thông tin khóa học
     * @route PUT /courses/:id
     */
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    /**
     * Xóa mềm khóa học (chuyển vào thùng rác)
     * @route DELETE /courses/:id
     */
    delete(req, res, next) {
        Course.deleteById(req.params.id)  // Sử dụng deleteById để xóa mềm
            .then(() => res.redirect('back'))
            .catch(next);
    }

    /**
     * Xóa vĩnh viễn khóa học khỏi database
     * @route DELETE /courses/:id/force
     */
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                console.log(`🔴 Đã xóa vĩnh viễn khóa học ${req.params.id}`);
                res.redirect("back");
            })
            .catch(next);
    }

    /**
     * Khôi phục khóa học đã bị xóa mềm
     * @route PATCH /courses/:id/restore
     */
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                console.log(`✅ Restore thành công khóa học ${req.params.id}`);
                res.redirect('back');
            })
            .catch(next);
    }

    /**
     * Xử lý hành động hàng loạt (Xóa nhiều khóa học)
     * @route POST /courses/handle-form-actions
     */
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })  // Xóa mềm nhiều khóa học
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: '⚠ Hành động không hợp lệ!' });
        }
    }
}

// Xuất module `CourseController`
module.exports = new CourseController();
