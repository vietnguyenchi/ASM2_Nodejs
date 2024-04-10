import Joi from "joi";

export const registerValidator = Joi.object({
    email: Joi.string().required().empty().email().messages({
        "any.required": "Email không được để trống",
        "string.empty": "Email không được để trống",
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().required().empty().min(6).messages({
        "any.required": "mật khẩu không được để trống",
        "string.empty": "mật khẩu không được để trống",
        "string.min": "mật khẩu không được ít hơn {#limit} ký tự",
    }),
    confirmPassword: Joi.string().required().empty().min(6).valid(Joi.ref("password")).messages({
        "any.required": "mật khẩu không được để trống",
        "string.empty": "mật khẩu không được để trống",
        "string.min": "mật khẩu không được ít hơn {#limit} ký tự",
        "any.only": "mật khẩu xác nhận không khớp"
    }),
})

export const loginValidator = Joi.object({
    email: Joi.string().required().empty().email().messages({
        "any.required": "Email không được để trống",
        "string.empty": "Email không được để trống",
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().required().empty().min(6).messages({
        "any.required": "mật khẩu không được để trống",
        "string.empty": "mật khẩu không được để trống",
        "string.min": "mật khẩu không được ít hơn {#limit} ký tự",
    }),
})
