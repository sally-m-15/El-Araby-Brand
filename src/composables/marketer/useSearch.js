import { ref } from "vue";

export function useSearch() {
  const search = ref("");
  const suggestions = ref([]);
// داتا وهميه
  const products = [
    { id: 1, name: "طقم 3 قطع 01" },
    { id: 2, name: "ترنج 3 قطع 019" },
    { id: 3, name: "ترنج 3 قطع 020" },
    { id: 4, name: "فستان صيفي" },
    { id: 5, name: "بنطلون جينز" },
  ];

  const getSuggestions = () => {
    if (!search.value.trim()) {
      suggestions.value = [];
      return;
    }

    suggestions.value = products.filter((product) =>
      product.name.includes(search.value)
    );
  };

  return {
    search,
    suggestions,
    getSuggestions,
  };
}