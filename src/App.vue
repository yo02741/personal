<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";

import { storeToRefs } from "pinia";
import { useAppInfoStore } from "@/stores/appInfo";
const { isDarkMode } = storeToRefs(useAppInfoStore());
</script>

<template>
  <div :class="{ dark: isDarkMode }">
    <TheHeader />
    <RouterView />
  </div>
</template>
