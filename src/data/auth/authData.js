
export const registrationFields = [
  {
    id: 'firstName',
    name: 'الاسم الأول',
    type: 'text',
    role: 'all',
     autocomplete:"name"
  },
  {
    id: 'lastName',
    name: 'الاسم الأخير',
    type: 'text',
    role: 'all',
     autocomplete:"name"
  },
  {
    id: 'email',
    name: 'البريد الإلكتروني',
    type: 'email',
    role: 'all',
     autocomplete:"email",
     icon: 'fa-regular-envelope',
     placeholder:"example@mail.com"
  },
  {
    id: 'phone',
    name: 'رقم الموبايل',
    type: 'text',
    role: 'all',
     autocomplete:"tel"
  },
  {
    id: 'country',
    name: 'الدولة',
    type: 'select',
    role: 'all',
  },
  {
    id: 'governorate',
    name: 'المحافظة',
    type: 'select',
    role: 'all',
  },
  {
    id: 'city',
    name: 'المدينة',
    type: 'select',
    role: 'all',
  },
  {
    id: 'password',
    name: 'كلمة المرور',
    type: 'password',
    role: 'all',
    autocomplete:"new-password",
    icon: 'fa-regular-eye'
  },
  {
    id: 'confirmPassword',
    name: 'تأكيد كلمة المرور',
    type: 'password',
    role: 'all',
    autocomplete:"new-password",
    icon: 'fa-regular-eye'
  },
  {
    id: 'categories',
    name: 'الفئات',
    type: 'category-select',
    role: 'marketer',
  },
  {
    id: 'referralCode',
    name: 'كود الإحالة',
    type: 'text',
    role: 'marketer',
  },
];
