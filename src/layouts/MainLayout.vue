<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  // components: { EssentialLink },

  setup() {
    const leftDrawerOpen = ref(false);

    return {};
  },
});
</script>
