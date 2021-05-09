import { createStore } from "vuex";

import api from "@/api";

export default createStore({
  state: {
    images: <string[]>[],
  },
  mutations: {
    setImages(state, images: string[]) {
      state.images = images;
    },

    async updateImagesBySearch(state, search: string) {
      try {
        const response = await api.get(
          `/api/search-images?search=${encodeURIComponent(search)}`
        );
        if (response.status === 200) {
          state.images = response.data;
        } else {
          alert(response.data.errors);
        }
      } catch (err) {
        alert(err);
      }
    },

    async reloadImages(state) {
      try {
        const response = await api.get("/api/fetch-all-images");
        if (response.status === 200) {
          state.images = response.data;
        } else {
          alert(response.data.errors);
          state.images = [];
        }
      } catch (err) {
        alert(err);
        state.images = [];
      }
    },
  },
  getters: {
    getImages(state) {
      return state.images;
    },
  },
  modules: {},
  actions: {},
});
