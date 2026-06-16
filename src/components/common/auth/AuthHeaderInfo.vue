<template>
  <!-- الجزء الخاص بعنوان صفحات auth -->
    <div class="flex flex-col items-center gap-4 text-center">
        <div
        v-if="route.name === 'marketer-forgotpassword' || route.name === 'merchant-forgotpassword' "
        class="w-24 h-24 rounded-full bg-[#113863] flex justify-center items-center ">
        <v-icon
        name="md-lock"
        scale="2"
        class="text-gray-200"
        />
        </div>
        <h1 class="font-font md:text-3xl text-lg">{{ title }}</h1>
        <p 
        v-if="showText"
        class="text-text-light font-font lg:text-lg text-md  pb-4">{{ text }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = computed(() => {
  if (route.name === 'marketer-register') {
    return 'التسجيل كمسوق'
  }

  if (route.name === 'merchant-register') {
    return 'التسجيل كتاجر'
  }

  if (route.name === 'marketer-login') {
    return 'تسجيل دخول مسوق'
  }

  if (route.name === 'merchant-login') {
    return 'تسجيل دخول تاجر'
  }

  if (route.name === 'forgot-password' 
  ) {
    return 'استعادة الحساب'
  }

  if (route.name === 'verify-code' 
  ) {
    return 'ادخل رمز التحقق'
  };

    if(route.name === 'reset-password') {
    return 'تعين كلمة مرور جديدة'
  }
  return ''
})

const text = computed(() => {
    if (route.name === 'marketer-register') {
    return 'يستغرق التسجيل أقل من دقيقة ولكنه يمنحك التحكم الكامل في طلباتك'
  }

  if (route.name === 'forgot-password' 
  ) {
    return 'سنرسل رمز التحقق الي بريدك الالكتروني لتعين كلمة مرور جديدة '
  }

  if (route.name === 'verify-code'
  ) {
    return 'لقد ارسلنا رمزا مكون من 6 ارقام الي بريدك الالكتروني لتعيين كلمة مرور جديدة'
  };

  if(route.name === 'reset-password') {
    return 'يرجي ادخال كلمة المرور الجديده وتأكيدها'
  }
})

const showText = computed(() => !!text.value)
</script>

<style lang="scss" scoped>

</style>