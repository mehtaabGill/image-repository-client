<template>
  <div
    class="flex mx-auto m-2 p-2 border rounded-md border-gray-200 max-w-lg justify-between"
  >
    <input
      type="text"
      name="search"
      id="search"
      placeholder="search images..."
      class="focus:outline-none border rounded-md border-gray-100 w-10/12 p-1"
      v-model="search"
    />
    <button @click="updateImagesBySearch" class="focus:outline-none">
      <img src="/img/search.svg" alt="search" />
    </button>
  </div>
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
