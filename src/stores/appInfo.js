import { defineStore } from "pinia";

export const useAppInfoStore = defineStore("appInfo", {
  state: () => ({
    isDarkMode: false,
  }),
  getters: {},
  actions: {},
});
