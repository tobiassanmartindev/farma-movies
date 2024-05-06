<template>
  <router-view v-if="this.$route.path === '/login'" />
  <EssentialLink v-else />
</template>
<style>
body::-webkit-scrollbar {
  width: 12px;
}
body {
  font-family: Montserrat;
  scrollbar-width: thin;
  scrollbar-color: #686868 #424242;
}
</style>
<script>
import { defineComponent } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useLoginStore } from "./stores/loginStore";

export default defineComponent({
  name: "App",
  components: { EssentialLink },
  data() {
    return {
      store: useLoginStore(),
    };
  },
});
</script>
