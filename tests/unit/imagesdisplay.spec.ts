import { shallowMount } from "@vue/test-utils";
import ImageContainer from "@/components/ImageContainer.vue";

describe("ImageContainer.vue", () => {
  test("renders image element with correct src attribute", () => {
    const mockImageURL =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png";

    const wrapper = shallowMount(ImageContainer, {
      props: {
        imageURL: mockImageURL,
      },
    });

    expect(wrapper.find("img").attributes()["src"]).toBe(mockImageURL);
  });
});
