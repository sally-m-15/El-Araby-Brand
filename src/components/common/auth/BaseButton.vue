<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      disabled
        ? 'bg-text cursor-not-allowed'
        : 'bg-button hover:bg-button-hover cursor-pointer'
    ]"
    class="col-span-2 w-full text-white py-2 mt-4 rounded-md"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  type: {
    default: 'button',
  },
  disabled: {
    default: false,
  },
})

const route = useRoute()

const buttonText = computed(() => {
  if (
    route.name === 'marketer-register' 
  ) {
    return 'اشتراك'
  }
if (    route.name === 'merchant-register') {
    return 'تسجيل'
}

  if (
    route.name === 'marketer-login' ||
    route.name === 'merchant-login'
  ) {
    return 'تسجيل الدخول'
  }

  if(route.name === 'forgot-password'
  ) {
    return 'طلب رمز الاستعادة'
  };

  if(route.name === 'verify-code'
  ) {
    return 'تحقق من الرمز'
  }

    if(route.name === 'reset-password'
  ) {
    return 'تحديث كلمة المرور'
  }

  return 'إرسال'
})
</script>