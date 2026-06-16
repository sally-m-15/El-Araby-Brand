<template>
  <div class="app-layout min-h-screen bg-[#F9F9FA]" dir="rtl">
    
    <div v-if="route.path.startsWith('/marketer')" class="w-full bg-[#E9CBF2]">
      <Navbar />
      <div class="border-b border-border bg-white">
        <SubNavbar />
      </div>
    </div>

    <transition name="slide-down">
      <div 
        v-if="route.path.startsWith('/marketer') && showStickyNavbar" 
        class="w-full fixed top-0 left-0 z-50 bg-[#E9CBF2] shadow-md"
      >
        <Navbar />
      </div>
    </transition>

    <main>
      <router-view />
    </main>

    <footer class="bg-gray-800 text-white">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from "@/components/marketer/navbar/Navbar.vue";
import SubNavbar from "@/components/marketer/navbar/SubNavbar.vue";
import Footer from '@/components/marketer/footer/Footer.vue';

const route = useRoute();

// المتغير المسؤول عن إظهار الـ Navbar الثابت بعد تخطي الشاشة الأولى
const showStickyNavbar = ref(false);

const handleScroll = () => {
  // 🎯 هنا بنقول له: لو المستخدم نزل سكرول وعدى مسافة 150 بكسل (يعني الفيوبورد الأول بدأ يختفي)
  if (window.scrollY > 300) {
    showStickyNavbar.value = true;  // اظهر الـ Navbar الرئيسي لوحده وثبته فوق
  } else {
    showStickyNavbar.value = false; // لو رجع لأول الصفحة خالص اخفيه ورجع الوضع الطبيعي الأبسط
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* أنيميشن ناعم جداً لظهور واختفاء الناف بار الثابت من الأعلى */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>