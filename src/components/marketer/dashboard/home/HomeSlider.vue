<template>
  <div class="slider-container w-full max-w-7xl mx-auto px-2 py-4">
    <swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ clickable: true, el: '.custom-pagination' }"
      class="rounded-md overflow-hidden shadow-lg"
    >
      <swiper-slide v-for="slide in bannesList" :key="slide.id">
        <div class="relative w-full h-75 md:h-100">
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="custom-pagination flex justify-center gap-2 mt-4"></div>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <div 
        v-for="(thumb, index) in bannesList" 
        :key="'thumb-' + thumb.id"
        class="border rounded-md p-2 cursor-pointer transition hover:scale-105 overflow-hidden h-20 md:h-40"
      >
        <img :src="thumb.image" class="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import banner1 from '../../../../assets/images/banner1.png';
import banner2 from '../../../../assets/images/banner2.png';
import banner3 from '../../../../assets/images/banner3.png';

const activeIndex = ref(0);

const bannesList = ref([
  { id: 1, title: 'الرئيسية', image: banner1 },
  { id: 2, title: 'التسويق بالعمولة', image: banner2 },
  { id: 3, title: 'ضاعف أرباحك', image: banner3 },
]);
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: transparent;
  border: 2px solid #000;
  opacity: 1;
}
:deep(.swiper-pagination-bullet-active) {
  background: #000;
}
</style>