// 验证手机号
export const validMobile = (value) => {
  return /^(?:(?:\+|00)86)?1\d{10}$/.test(String(value));
};
// 验证身份证
export const validId = (value) => {
  return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
    String(value)
  );
};
// 验证座机号
export const validTel = (value) => {
  return /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(
    String(value)
  );
};
// 验证邮箱
export const validEmail = (value) => {
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
    String(value)
  );
};
