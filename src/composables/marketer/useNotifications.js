import { ref } from "vue";

export function useNotifications() {

  const activeTab = ref("الشحنات");

  const tabs = [
    "الشحنات",
    "المحفظة",
    "منتجات",
    "الدعم",
    "عام"
  ];

  const notifications = ref([
    {
      id: 1,
      type: "الشحنات",
      message: "تم إضافة مخزون من 1 قطعة من المنتج بلوط 058"
    },
    {
      id: 2,
      type: "الشحنات",
      message: "تم إضافة مخزون من 1 قطعة من المنتج جاكت 049"
    },
    {
      id: 3,
      type: "المحفظة",
      message: "تم إضافة عمولة جديدة"
    }
  ]);

  return {
    activeTab,
    tabs,
    notifications
  };
}