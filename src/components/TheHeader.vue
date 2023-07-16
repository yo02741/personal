<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

import { storeToRefs } from "pinia";
import { useAppInfoStore } from "@/stores/appInfo";

const route = useRoute();
const appInfoStore = useAppInfoStore();
const { isDarkMode } = storeToRefs(appInfoStore);

const isMobileMenuOpen = ref(false);
const list = ref([
  { label: "About", value: "about" },
  { label: "Practice", value: "practice" },
  { label: "Contact", value: "contact" },
]);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

watch(route, () => {
  isMobileMenuOpen.value = false;
});
</script>

<template>
  <header class="bg-white-100 .shadow-black fixed top-0 w-full bg-[#ffffffaa]">
    <section
      class="mx-auto flex max-w-4xl items-center justify-center p-4 sm:justify-between"
    >
      <h1
        class="cursur-pointer font-mono text-2xl font-bold transition-all duration-500 dark:text-white"
      >
        <RouterLink to="/">CHEN.YO</RouterLink>
      </h1>
      <ul class="hidden h-full items-center gap-x-4 sm:flex">
        <li
          v-for="item in list"
          :key="item.value"
          class="border-b-2 border-transparent transition-all duration-500 hover:border-solid hover:border-slate-950 dark:text-white dark:hover:border-white"
        >
          <RouterLink :to="item.value">
            {{ item.label }}
          </RouterLink>
        </li>
        <li>
          <button class="dark:text-white" @click="isDarkMode = !isDarkMode">
            {{ isDarkMode ? "Dark" : "Light" }}
          </button>
        </li>
      </ul>

      <div class="absolute right-4">
        <button
          class="flex h-[32px] w-[32px] items-center justify-center pb-2 text-3xl font-semibold sm:hidden"
          @click="toggleMobileMenu"
        >
          &#9776;
        </button>

        <Transition>
          <div
            v-if="isMobileMenuOpen"
            class="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-white"
          >
            <button
              class="absolute right-4 top-4 h-[32px] w-[32px] text-2xl font-semibold"
              @click="toggleMobileMenu"
            >
              &#10005;
            </button>
            <ul class="flex flex-col items-center gap-y-4">
              <li
                v-for="item in list"
                :key="item.value"
                class="border-b-2 border-transparent transition-all duration-500 hover:border-solid hover:border-slate-950"
              >
                <RouterLink :to="item.value">
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </section>
  </header>
</template>
