<template>
  <SearchBar />
  <ImagesDisplay class="mx-8 my-8"></ImagesDisplay>
</template>

<script lang="typescript">
import { defineComponent } from "vue";

import store from "@/store";
import api from "@/api";

import ImagesDisplay from "@/components/ImagesDisplay.vue";
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
  name: "Home",
  components: {
    ImagesDisplay,
    SearchBar
  },
  mounted: async () => {
    try {
      const response = await api.get("/api/fetch-all-images");
      if (response.status === 200) {
        store.commit("setImages", response.data);
      } else {
        store.commit("setImages", []);
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  },
});
</script>
