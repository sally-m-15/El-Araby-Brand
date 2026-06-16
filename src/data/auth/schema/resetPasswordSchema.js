import { object, string, ref } from 'yup'

export const resetPasswordSchema = object({
  password: string()
    .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل')
    .required('كلمة المرور مطلوبة'),

  confirmPassword: string()
    .required('تأكيد كلمة المرور مطلوب')
    .oneOf(
      [ref('password')],
      'كلمة المرور غير متطابقة'
    ),
})