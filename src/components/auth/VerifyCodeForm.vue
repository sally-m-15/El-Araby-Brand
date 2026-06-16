<template>
  <div>
    <!-- كتابة رمز لتغير الباسورد -->
     
    <Form @submit="submitVerification" class="flex flex-col items-center mt-10 gap-2">
      <div class="flex gap-2 " dir="ltr">
        <input
          v-for="(n, index) in 6"
          :key="index"
          :ref="(el) => (inputs[index] = el)"
          v-model="code[index]"
          @input="handleInput(index, $event)"
          @keydown.backspace="handleBackspace(index)"
          maxlength="1"
          type="text"
          class="w-12 h-14 border-2 text-xs md:text-lg rounded-xl text-center font-bold focus:border-primary-light outline-none transition-all"
        />
      </div>
      <div class="w-full flex flex-col gap-4">
        <BaseButton type="submit" :disabled="!isFormValid"> تحقق من الرمز </BaseButton>

        <button
          type="button"
          @click="resendCode"
          :disabled="!canResend"
          class="text-primary text-md disabled:cursor-not-allowed cursor-pointer"
        >
          {{ canResend ? 'لم يصلك الرمز؟ إعادة إرسال' : `إعادة الإرسال خلال ${timer} ثانية` }}
        </button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import BaseButton from '../common/auth/BaseButton.vue'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const code = ref(['', '', '', '', '', ''])
const inputs = ref([])
const timer = ref(60)
const canResend = ref(false)

const router = useRouter()

const handleInput = (index, event) => {
  const value = event.target.value.replace(/\D/g, '')

  code.value[index] = value

  if (value && index < 5) {
    inputs.value[index + 1]?.focus()
  }
}

const handleBackspace = (index) => {
  if (!code.value[index] && index > 0) {
    inputs.value[index - 1]?.focus()
  }
}

const isFormValid = computed(() => code.value.every((item) => item !== ''))

const submitVerification = () => {
  const otp = code.value.join('')
  router.push({
    name: 'reset-password',
  })
  console.log(otp)
}

const resendCode = async () => {
  try {
    console.log('تم الإرسال')

    timer.value = 60
    startTimer()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  startTimer()
})

const startTimer = () => {
  canResend.value = false

  const interval = setInterval(() => {
    timer.value--

    if (timer.value <= 0) {
      clearInterval(interval)
      canResend.value = true
    }
  }, 1000)
}
</script>

<style lang="scss" scoped></style>
