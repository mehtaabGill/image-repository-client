<template>
  <input
    type="text"
    name="search"
    id="search"
    v-model="search"
    placeholder="search images..."
  />
  <button @click="updateImagesBySearch">Search</button>
</template>

<script lang="typescript">
import { defineComponent } from "vue";

import store from "@/store";

export default defineComponent({
  name: "SearchBar",
  data: () => {
    return {
      search: null,
    };
  },
  methods: {
    updateImagesBySearch() {
        if(!this.search) {
            alert('Invalid search query!');
        } else {
            store.commit("updateImagesBySearch", this.search);
        }
    },
  },
});
</script>
