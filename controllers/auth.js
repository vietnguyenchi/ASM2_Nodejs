import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { loginValidator, registerValidator } from '../validations/auth';

export const register = async (req, res) => {
    try {

        const { error } = registerValidator.validate(req.body, { abortEarly: true });

        if (error) return res.status(400).json({ message: error.details[0].message });

        const existUser = await User.findOne({ email: req.body.email });

        if (existUser) return res.status(400).json({ message: 'Tài khoản email đã tồn tại' });

        const hassPass = await bcryptjs.hash(req.body.password, 10);

        const user = await User.create({ ...req.body, password: hassPass });

        user.password = undefined;

        return res.status(201).json({ message: "Đăng ký thành công", user: user });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
}

export const login = async (req, res) => {
    try {

        const { error } = loginValidator.validate(req.body, { abortEarly: true });

        if (error) return res.status(400).json({ message: error.details[0].message });

        const existUser = await User.findOne({ email: req.body.email });

        if (!existUser) return res.status(400).json({ message: "Email không tồn tại" });

        const isMatch = bcryptjs.compare(req.body.password, existUser.password);

        if (!isMatch) return res.status(400).json({ message: "Mật khẩu không đúng" });

        const token = await jwt.sign({ _id: existUser._id }, "123456", { expiresIn: "1d" });

        existUser.password = undefined;

        return res.status(200).json({ message: "Đăng nhập thành công", existUser, token });

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
}