<template>
  <!-- الاشعارات -->
  <div class="relative flex gap-6">

    <!-- Notification Icon -->
    <div
      @mouseenter="hoveredIcon = 'notification'"
      @mouseleave="hoveredIcon = null"
      class="w-10 h-10 relative group flex justify-center items-center bg-white rounded-full"
    >
      <v-icon name="fa-regular-bell" scale="1" />

      <span
        class="absolute bottom-7 left-6 w-5 h-5 text-white text-xs rounded-full bg-badge-bg flex justify-center items-center"
      >
        1
      </span>

      <!-- Dropdown -->
      <div
        v-if="hoveredIcon === 'notification'"
        @mouseenter="hoveredIcon = 'notification'"
        @mouseleave="hoveredIcon = null"
        class="absolute top-full right-0 bg-white rounded-md shadow-lg z-50"
      >
        <!-- Tabs -->
        <div class="flex border-b w-md px-10 items-center justify-between pt-4">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="text-md text-gray-500"
          >
            <span
              class="inline-block pb-2"
              :class="activeTab === tab ? 'border-b-2 border-red-500 text-black' : ''"
            >
              {{ tab }}
            </span>
          </button>
        </div>

        <!-- Notifications -->
        <div class="max-h-80 overflow-y-auto">
          <div
            v-for="notification in filteredNotifications"
            :key="notification.id"
            class="p-4 px-8 border-b border-border hover:bg-gray-50 cursor-pointer"
          >
            {{ notification.message }}
          </div>

          <div
            v-if="!filteredNotifications.length"
            class="p-6 text-center text-gray-500"
          >
            لا توجد إشعارات
          </div>
        </div>
      </div>
    </div>

    <!-- Favorite Icon -->
    <div
      class="w-10 h-10 relative flex justify-center items-center bg-white rounded-full"
    >
      <v-icon name="fa-regular-heart" scale="1" />

      <span
        class="absolute bottom-7 left-6 w-5 h-5 text-white text-xs rounded-full bg-badge-bg flex justify-center items-center"
      >
        3
      </span>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useNotifications } from '@/composables/marketer/useNotifications';

const hoveredIcon = ref(null);

const {
  activeTab,
  tabs,
  notifications
} = useNotifications();

const filteredNotifications = computed(() => {
  return notifications.value.filter(
    notification => notification.type === activeTab.value
  );
});
</script>