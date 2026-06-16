
export const routes = [

  {
    path: '/',
    redirect: '/select-role',
  },
{
path: '/select-role',
name: 'select-role',
component: () => import('@/pages/auth/SelectRoleView.vue')
},
    {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/pages/auth/ForgotPasswordView.vue'),
  },
  {
    path: '/verify-code',
    name: 'verify-code',
    component: () => import('@/pages/auth/VerifyCodeView.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/pages/auth/ResetPasswordView.vue'),
  },

  {
    path: '/marketer',
    children: [
      {
        path: 'login',
        name: 'marketer-login',
        component: () => import('@/pages/marketer/auth/LoginView.vue'),
      },
      {
        path: 'register',
        name: 'marketer-register',
        component: () => import('@/pages/marketer/auth/RegisterView.vue'),
      },
      {
        path: 'forgotpassword',
        name: 'marketer-forgotpassword',
        component: () => import('@/pages/auth/ForgotPasswordView.vue'),
      },
      {
        path: 'verify-code',
        name: 'marketer-verifyCode',
        component: () => import('@/pages/auth/VerifyCodeView.vue'),
      },
    ],
  },

  {
    path: '/merchant',
    children: [
      {
        path: 'login',
        name: 'merchant-login',
        component: () => import('@/pages/merchant/auth/LoginView.vue'),
      },
      {
        path: 'register',
        name: 'merchant-register',
        component: () => import('@/pages/merchant/auth/RegisterView.vue'),
      },
      {
        path: 'forgotpassword',
        name: 'merchant-forgotpassword',
        component: () => import('@/pages/auth/ForgotPasswordView.vue'),
      },
      {
        path: 'verify-code',
        name: 'merchant-verifyCode',
        component: () => import('@/pages/auth/VerifyCodeView.vue'),
      },
    ],
  },
];