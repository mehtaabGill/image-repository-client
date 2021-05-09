<template>
  <div
    class="flex mx-auto m-2 p-2 border rounded-md border-gray-200 max-w-lg justify-between"
    @keyup.enter="enterPressed"
  >
    <input
      type="text"
      name="search"
      id="search"
      placeholder="search images..."
      class="focus:outline-none border rounded-md border-gray-100 w-10/12 p-1"
      v-model="search"
    />

    <button
      @click="updateImagesBySearch"
      class="focus:outline-none"
      id="search-button"
    >
      <img src="/img/search.svg" alt="search" />
    </button>

    <button @click="clearSearch" class="focus:outline-none" id="clear-button">
      <img src="/img/reset.png" alt="reset search" width="17" />
    </button>
  </div>
</template>

<script>
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
      if (!this.search) {
        store.commit("reloadImages");
      } else {
        store.commit("updateImagesBySearch", this.search);
      }
    },

    clearSearch() {
      this.search = null;
      store.commit("reloadImages");
    },

    enterPressed() {
      this.updateImagesBySearch();
    },
  },
});
</script>
