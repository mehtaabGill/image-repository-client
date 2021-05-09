import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("renders search bar and button", () => {
    const wrapper = shallowMount(SearchBar);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("button")).toBeDefined();
    expect(wrapper.find("#search")).toBeDefined();
  });
});
