import { shallowMount } from "@vue/test-utils";
import ImageUploader from "@/components/ImageUploader.vue";

describe("ImageUploader.vue", () => {
  test("renders hidden file input and upload image button", () => {
    const wrapper = shallowMount(ImageUploader);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("#image")).toBeDefined();
    expect(wrapper.text()).toContain("Upload Image");
  });
});
