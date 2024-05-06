<template>
  <div class="q-pa-md">
    <q-input
      dark
      v-model="searchQuery"
      placeholder="Buscar una pelicula o serie"
      color="teal"
    />
    <div v-show="statusSearch === false">Nada encontrado</div>
    <!-- {{ statusSearch }} -->
    <div class="q-mt-md bg-dark resultSearch">
      <div class="row">
        <div
          class="q-mx-sm q-mb-xl card-movie"
          v-for="cardData in moviesfound"
          :key="cardData"
          v-show="cardData.Poster != 'N/A' ? true : false"
        >
          <CardComponent :cardData="cardData" v-if="statusSearch" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.resultSearch {
  height: 120vh;
}
</style>
<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";
import CardComponent from "components/CardComponent.vue";

export default defineComponent({
  name: "SearchPage",
  data() {
    return {
      moviesfound: [],
      searchQuery: "",
      statusSearch: "",
    };
  },
  components: {
    CardComponent,
  },
  methods: {
    searchSomething(newVal) {
      // console.log(newVal);
      api.get(`&s=${newVal}`).then((response) => {
        if (response.data.Response == "True") {
          this.moviesfound = response.data.Search;
          this.statusSearch = true;
        } else {
          this.statusSearch = false;
        }
      });
    },
  },
  watch: {
    searchQuery(newVal, oldVal) {
      // Aquí puedes realizar la búsqueda cada vez que searchQuery cambie
      this.searchSomething(newVal);
    },
  },
});
</script>
