<template>
  <div>
    <label for="image">
      <input
        type="file"
        name="image"
        id="image"
        @change="onFileChange"
        class="hidden"
      />
      <div
        v-if="UPLOAD_STATE === 'READY'"
        class="focus:outline-none bg-blue-500 text-white rounded-md px-10 py-2 max-w-xs"
        id="upload-image-button"
      >
        Upload Image
      </div>

      <div
        v-else-if="UPLOAD_STATE === 'UPLOADING'"
        class="focus:outline-none bg-blue-300 text-white rounded-md px-10 py-2 max-w-xs cursor-not-allowed"
      >
        Uploading...
      </div>
    </label>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import api from "@/api";

export default defineComponent({
  name: "ImageUploader",
  data: () => {
    return {
      image: "",
      UPLOAD_STATE: "READY",
    };
  },
  methods: {
    async onFileChange(event) {
      try {
        this.UPLOAD_STATE = "UPLOADING";
        this.image = event.target.files[0];
        await this.uploadFile();
      } catch (err) {
        this.$toast.error(`Image Upload Error: ${err}`);
      } finally {
        this.UPLOAD_STATE = "READY";
      }
    },

    async uploadFile() {
      try {
        const formData = new FormData();
        formData.append("image", this.image);

        const response = await api.post("/api/add-image", formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        if (response.status === 200) {
          window.location.reload();
        } else {
          this.$toast.error(`Image Upload Error: ${response.data.errors}`);
        }
      } catch (err) {
        this.$toast.error(`Image Upload Error: ${err}`);
      }
    },
  },
});
</script>
