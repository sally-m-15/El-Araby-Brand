import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { registerMarketer, registerMerchant } from '@/services/auth/register'
import { loginMarketer, loginMerchant } from '@/services/auth/login'
import { responseSuccess, handleApiError } from '@/services/api/axiosClient'
import { useRouter } from 'vue-router'
import { useCategoriesStore } from '@/stores/home/useCategoriesStore.js'
import { forgotPassword } from '@/services/auth/forgotPassword'

const ROLES = {
  MERCHANT: 'merchant',
  MARKETER: 'marketer',
  ADMIN: 'admin',
  USER: 'user',
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)

  const token = ref(localStorage.getItem('token'))
  const role = ref(localStorage.getItem('role'))
  const router = useRouter()
  const isLoading = ref(false)
  const categoriesStore = useCategoriesStore()
  const isAuthenticated = computed(() => !!token.value)

  const saveAuthData = (userData, userToken) => {
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', userToken)
    localStorage.setItem('role', userData.role)
  }

  const setAuth = (userData, userToken) => {
    user.value = userData
    token.value = userToken
    role.value = userData.role
    saveAuthData(userData, userToken)
  }

  const clearAuthData = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }
  const redirectToLogin = (currentRole, email) => {
    if (currentRole === ROLES.MERCHANT) {
      router.push({
        name: 'merchant-login',
        query: { email },
      })
      return
    }

    router.push({
      name: 'marketer-login',
      query: { email },
    })
  }

  const handleAuthSuccess = (response) => {
    const userData = response.data?.user
    const userToken = response.data?.token

    if (!userData || !userToken) return

    setAuth(userData, userToken)
    redirectBasedOnRole(userData.role)
  }

  const createRegisterPayload = (formData, currentRole) => ({
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    password: formData.password,
    password_confirmation: formData.confirmPassword,
    phone: formData.phone,
    country: formData.country,
    governate: formData.governorate,
    city: formData.city,
    address: formData.address || 'العنوان الافتراضي',
    role: currentRole === ROLES.MERCHANT ? ROLES.ADMIN : ROLES.USER,
    is_activated: 0,
    category_id: currentRole === ROLES.MARKETER ? categoriesStore.formattedCategoryIds || [] : null,
    code: currentRole === ROLES.MARKETER ? formData.referralCode : null,
  })

  const handleRegister = async (formData, currentRole) => {
    try {
      isLoading.value = true

      const payload = createRegisterPayload(formData, currentRole)
console.log(payload);
      console.log('🚀 الـ Payload النهائي المبعوت فعلياً هو:', payload)

      const response =
        currentRole === ROLES.MARKETER
          ? await registerMarketer(payload)
          : await registerMerchant(payload)
      console.log('FULL RESPONSE', response)
      responseSuccess(response)
      redirectToLogin(currentRole, formData.email)
    } catch (error) {
      console.error('❌ الإيرور اللي حصل بالظبط هو:', error)
      handleApiError(error)
    } finally {
      isLoading.value = false
    }
  }

  const handleLogin = async (credentials, currentRole) => {
    try {
      isLoading.value = true

      const response =
        currentRole === ROLES.MARKETER
          ? await loginMarketer(credentials)
          : await loginMerchant(credentials)

      handleAuthSuccess(response)
      responseSuccess(response)
    } catch (error) {
      console.error('❌ إيرور في تسجيل الدخول:', error)
      handleApiError(error)
    } finally {
      isLoading.value = false
    }
  };

  const handleForgotPassword = async (email) => {
  try {
    isLoading.value = true

    const response = await forgotPassword({
      email,
    })

    responseSuccess(response)

    router.push({
    name: 'verify-code',
      query: { email },
    })
  } catch (error) {
    handleApiError(error)
  } finally {
    isLoading.value = false
  }
}

  const logout = () => {
    user.value = null
    token.value = null
    role.value = null
    clearAuthData()
    router.push('/select-role')
  }

  return {
    user,
    token,
    role,
    isLoading,
    isAuthenticated,
    handleRegister,
    handleLogin,
    handleForgotPassword,
    setAuth,
    logout,
  }
})
