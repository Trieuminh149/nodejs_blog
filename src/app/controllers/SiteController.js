require('module-alias/register');
const Course = require('@models/Course');


class SiteController {
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);  // ✅ Trả về dữ liệu JSON
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new SiteController();
