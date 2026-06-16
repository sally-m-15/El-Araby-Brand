import { object, string } from 'yup';

export const forgotPasswordSchema = object({
  email: string()
    .email('البريد الإلكتروني غير صحيح')
    .required('البريد الإلكتروني مطلوب'),
});