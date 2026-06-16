<template>
  <div class="dashboard-layout min-h-screen flex bg-[#F9F9FA]" dir="rtl">
    
    <aside class="w-64 min-h-screen fixed right-0 top-0 z-40 bg-white border-l border-gray-100 shadow-sm">
      <DashboardSidebar />
    </aside>

    <div class=" pr-64 flex flex-col">
      
      <header class="w-full h-16 bg-white border-b border-gray-100 flex items-center px-6 sticky top-0 z-30">
        <DashboardHeader />
      </header>

      <main class="p-6">
        <router-view />
      </main>

    </div>

  </div>
</template>

<script setup>
import DashboardSidebar from '@/components/marketer/dashboard/layout/DashboardSidebar.vue';
import DashboardHeader from '@/components/marketer/dashboard/layout/DashboardHeader.vue';
</script>