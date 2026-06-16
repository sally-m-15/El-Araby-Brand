<template>
    <div class="flex flex-col items-center gap-10">
        <HomeSlider/>
        <LatestProducts />
        <CategoriesSection />
        <CategoryProductsSection />
        <BestSellersProducts />
        <NewArrivalsSection />
    </div>
</template>

<script setup>
import BestSellersProducts from '@/components/marketer/dashboard/home/BestSellersProducts.vue';
import CategoriesSection from '@/components/marketer/dashboard/home/CategoriesSection.vue';
import CategoryProductsSection from '@/components/marketer/dashboard/home/CategoryProductsSection.vue';
import HomeSlider from '@/components/marketer/dashboard/home/HomeSlider.vue';
import LatestProducts from '@/components/marketer/dashboard/home/LatestProducts.vue';
import NewArrivalsSection from '@/components/marketer/dashboard/home/NewArrivalsSection.vue';









</script>

<style lang="scss" scoped>

</style>

