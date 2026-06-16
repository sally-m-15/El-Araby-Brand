import { object, string, ref, boolean, array } from "yup";

export const registerSchema = (role) => object({
  firstName: string().required("الاسم الأول مطلوب"),
  lastName: string().required("الاسم الأخير مطلوب"),
  
  email: string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),

  phone: string().required("رقم الهاتف مطلوب"),

  country: string().required("الدولة مطلوبة"),

  governorate: string().required("المحافظة مطلوبة"),

  city: string().required("المدينة مطلوبة"),

  password: string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),

  confirmPassword: string()
    .required("تأكيد كلمة المرور مطلوب")
    .oneOf(
      [ref("password")],
      "كلمة المرور غير متطابقة"
    ),

    categories:
      role === "marketer"
        ? array().required("الفئة مطلوبة")
        : array(),
  
  acceptTerms: boolean()
    .oneOf([true], "يجب الموافقة على الشروط والأحكام")
    .required("يجب الموافقة على الشروط والأحكام"),
});