<template>
  <div class="my-auto max-w-sm">
    <img :src="imageURL" alt="image" />
  </div>
</template>

<script lang="typescript">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["imageURL"],
  setup(props) {
    console.log(props.imageURL);
  },
});
</script>
