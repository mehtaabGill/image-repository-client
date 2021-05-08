<template>
  <div class="grid grid-cols-3 gap-4 justify-items-center">
    <ImageContainer
      v-for="image in images"
      :imageURL="`${imageBaseURL}/${image}`"
      :key="image"
    ></ImageContainer>
  </div>
</template>

<script lang="typescript">
import config from "@/config";

import ImageContainer from "@/components/ImageContainer.vue";

import { mapState } from "vuex";

export default {
  name: "ImagesDisplay",
  data: () => {
    return {
      imageBaseURL: `${config.BASE_API_URL}/images/static`,
    };
  },
  computed: mapState(["images"]),
  components: {
    ImageContainer,
  },
};
</script>
