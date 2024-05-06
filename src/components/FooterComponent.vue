<template>
  <div class="class bg-dark text-white q-pb-md">
    <q-separator class="bg-teal-10" />
    <div class="q-mt-lg q-ml-xl q-gutter-md q-pb-md">
      <div class="row text-h6">Farma Movies</div>
      <div class="row">
        Hecho con
        <q-icon
          class="q-ml-md"
          size="1.7rem"
          name="img:https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        />
      </div>
      <div class="row">
        Proveedor de datos
        <a
          class="q-ml-md text-white"
          target="_blank"
          href="https://www.omdbapi.com/"
          >OMDb API</a
        >
      </div>
      <div class="row">
        Power by
        <a target="_blank" href="https://quasar.dev/">
          <q-icon
            color="white"
            class="q-ml-sm"
            size="1.5rem"
            name="img:https://cdn.quasar.dev/logo-v2/svg/logo.svg"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import router from "src/router";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "FooterComponent",
  methods: {},
  data() {
    return {
      options: ["Español", "Ingles"],
      languageSelected: "",
    };
  },
});
</script>
