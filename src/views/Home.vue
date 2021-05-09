<template>
  <center>
    <h1 class="font-bold text-3xl my-6">Image Repository</h1>
    <SearchBar class="mt-12" />
    <ImageUploader class="my-12" />
  </center>
  <ImagesDisplay class="mx-8 my-8"></ImagesDisplay>
</template>

<script>
import { defineComponent } from "vue";

import store from "@/store";

import ImagesDisplay from "@/components/ImagesDisplay.vue";
import SearchBar from "@/components/SearchBar.vue";
import ImageUploader from "@/components/ImageUploader.vue";

export default defineComponent({
  name: "Home",
  components: {
    ImagesDisplay,
    SearchBar,
    ImageUploader,
  },
  async mounted() {
    store.commit("reloadImages");
  },
});
</script>
