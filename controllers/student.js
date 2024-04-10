import Student from "../models/Student";
import studentVaidator from "../validations/student";

export const getAll = async (req, res) => {
    try {

        const data = await Student.find({});

        if (!data) return res.status(404).json({ message: "Không tìm thấy sinh viên" });

        return res.status(200).json({ message: "Lấy dữ liệu thành công", data });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
}

export const getStudentById = async (req, res) => {
    try {

        const data = await Student.findById(req.params.id);

        if (!data) return res.status(404).json({ message: "Không tìm thấy sinh viên" });

        return res.status(200).json({ message: "Lấy dữ liệu thành công", data });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
}

export const create = async (req, res) => {
    try {

        const { error } = studentVaidator.validate(req.body, { abortEarly: true });

        if (error) return res.status(400).json({ message: error.details[0].message });

        const data = await Student.create(req.body);

        if (!data) return res.status(400).json({ message: "Thêm mới thất bại" });

        return res.status(201).json({ message: "Tạo mới sinh viên thành công", data });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
}

export const update = async (req, res) => {
    try {

        const { error } = studentVaidator.validate(req.body, { abortEarly: true });

        if (error) return res.status(400).json({ message: error.details[0].message });

        const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!data) return res.status(400).json({ message: "Cập nhật thất bại" });

        return res.status(200).json({ message: "Cập nhật thành công", data });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
}

export const remove = async (req, res) => {
    try {

        const data = await Student.findByIdAndDelete(req.params.id);

        if (!data) return res.status(404).json({ message: "Xóa thất bại" });

        return res.status(200).json({ message: "Xóa thành công", data });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
} 
