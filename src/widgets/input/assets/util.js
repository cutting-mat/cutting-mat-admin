// 验证手机号
export const validMobile = (value) => {
    return /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/.test(String(value))
}
// 验证身份证
export const validId = (value) => {
    return /\d{17}[0-9Xx]|\d{15}/.test(String(value))
}
