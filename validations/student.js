import Joi from "joi";

const studentVaidator = Joi.object({
    name: Joi.string().required().empty().min(6).messages({
        "any.required": "Tên không được để trống",
        "string.empty": "Tên không được để trống",
        "string.min": "Tên không được it hơn {#limit} ký tự",
    }),
    age: Joi.number().required().empty().min(0).messages({
        "any.required": "Tuổi không được để trống",
        "number.empty": "Tuổi không được để trống",
        "number.min": "Tuổi phải lớn hơn {#limit}",
    }),
    email: Joi.string().required().empty().email().messages({
        "any.required": "Email không được để trống",
        "string.empty": "Email không được để trống",
        "string.email": "Email không đúng định dạng"
    }),
    phone: Joi.string().required().empty().messages({
        "any.required": "Số điện thoại không được để trống",
        "string.empty": "Số điện thoại không được để trống",
    })
})

export default studentVaidator;