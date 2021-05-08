<template>
  <ImagesDisplay class="mx-8 my-8"></ImagesDisplay>
</template>

<script>
import { defineComponent } from "vue";
import ImagesDisplay from "@/components/ImagesDisplay";

export default defineComponent({
  name: "Home",
  components: {
    ImagesDisplay,
  },
});
</script>
