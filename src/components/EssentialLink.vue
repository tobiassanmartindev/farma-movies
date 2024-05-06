<template>
  <div>
    <q-splitter v-model="splitterModel" class="">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-white bg-black tabs"
          aria-label="Navegación"
        >
          <q-route-tab class="q-mt-xl" to="/movies" name="movies">
            <q-icon name="mdi-movie-open-outline" size="2em" />
          </q-route-tab>
          <q-route-tab class="q-mt-xl" to="/series" name="series">
            <q-icon name="mdi-animation-play-outline" size="2em" />
          </q-route-tab>
          <q-route-tab class="q-mt-xl" to="/search" name="search">
            <q-icon name="mdi-magnify" size="2em" />
          </q-route-tab>
          <q-route-tab class="q-mt-xl" to="/login" name="exit">
            <q-icon name="mdi-logout" size="2em" @click="logOut" />
          </q-route-tab>
          <q-route-tab
            class="q-mt-xl"
            to="/detail"
            v-show="false"
            name="detail"
          >
            <q-icon name="mdi-movie-open-outline" size="2em" />
          </q-route-tab>
        </q-tabs>
      </template>

      <template v-slot:after>
        <div class="bg-dark text-white" style="height: 1000px">
          <router-view></router-view>
        </div>
        <FooterComponent />
      </template>
    </q-splitter>
  </div>
</template>
<style>
.q-splitter--vertical > .q-splitter__panel {
  height: 100vh;
}
.tabs {
  padding-top: 100%;
}
.q-splitter__separator {
  background-color: #1d1d1d;
}
</style>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import FooterComponent from "components/FooterComponent.vue";
import { useLoginStore } from "src/stores/loginStore";

export default defineComponent({
  name: "EssentialLink",
  setup() {
    return {
      tab: ref("search"),
      splitterModel: ref(5),
    };
  },
  data() {
    return {
      store: useLoginStore(),
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("authorized");
    },
  },
  components: {
    FooterComponent,
  },

  /* props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  }, */
});
</script>
