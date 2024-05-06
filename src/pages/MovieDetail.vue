<template>
  <div v-if="store.card" class="card-detail q-pa-lg">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12 col-12 q-pl-lg">
        <q-card
          class="my-card no-border"
          square
          style="width: 90%; height: 380px"
          flat
          bordered
          aria-label="Poster"
        >
          <q-img :src="store.card.Poster" class="card-poster" />
        </q-card>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12 col-12 q-pl-xl">
        <div class="row">
          <div class="text-h3">{{ store.card.Title }}</div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-2">
            <div class="row">
              <q-rating
                aria-label="Calificacion"
                v-model="computedRating"
                size="1.5em"
                icon-selected="star"
                icon-half="star_half"
                color="teal"
                readonly
              />
              <div class="q-ml-sm">
                {{
                  (store.card.imdbRating / 2).toFixed(1) == "NaN"
                    ? "N/A"
                    : (store.card.imdbRating / 2).toFixed(1)
                }}
              </div>
            </div>
          </div>
          <div class="col">
            <q-breadcrumbs>
              <template v-slot:separator>
                <q-icon size="1em" name="mdi-circle-medium" />
              </template>

              <q-breadcrumbs-el
                class="text-white"
                :label="store.card.imdbVotes + ' Reviews'"
              />
              <q-breadcrumbs-el class="text-white" :label="store.card.Year" />
              <q-breadcrumbs-el
                class="text-white"
                :label="store.card.Runtime"
              />
            </q-breadcrumbs>
          </div>
        </div>
        <div class="row q-mt-md">
          <div class="col-10">
            {{ store.card.Plot }}
          </div>
        </div>
        <div class="info">
          <div class="row q-mt-lg">
            <div class="col-6">
              <div class="row">
                <div class="col-5">Fecha de lanzamiento</div>
                <div class="col-6">{{ store.card.Released }}</div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-5">Director</div>
                <div class="col-6">{{ store.card.Director }}</div>
              </div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <div class="col-6">
              <div class="row">
                <div class="col-5">Pais</div>
                <div class="col-6">{{ store.card.Country }}</div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-5">Premios</div>
                <div class="col-6">{{ store.card.Awards }}</div>
              </div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <div class="col-6">
              <div class="row">
                <div class="col-5">Actores</div>
                <div class="col-6">{{ store.card.Actors }}</div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-5">Escritores</div>
                <div class="col-6">{{ store.card.Writer }}</div>
              </div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <div class="col-6">
              <div class="row">
                <div class="col-5">Generos</div>
                <div class="col-6">
                  <q-badge
                    color="teal"
                    v-for="genre in store.card.Genre?.split(',')"
                    :key="genre"
                    class="q-mx-xs cursor-pointer"
                  >
                    {{ genre }}
                  </q-badge>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-5">Lenguaje</div>
                <div class="col-6">{{ store.card.Language }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center q-pb-xl q-mt-xl">
      <div v-if="urlTrailer != ''">
        <iframe
          width="853"
          height="480"
          :src="urlTrailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="responsive-iframe"
        ></iframe>
      </div>
      <div v-else>
        <q-spinner color="white" size="3em" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-detail {
  height: 78vh !important;
}
.card-poster:hover {
  border: 0px solid #fff !important;
  transform: scale(1) !important;
}
.card-poster {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}
.my-card {
  border: 0px;
}
</style>
<script>
import { defineComponent, computed } from "vue";
import { useCardStore } from "../stores/cardStore";
export default defineComponent({
  name: "MovieDetail",
  data() {
    return {
      videoId: "",
      apiKey: "",
      urlTrailer: "",
      store: useCardStore(),
    };
  },
  methods: {
    buscarTrailer() {
      const trailerTitulo = this.store.card.Title?.trim();
      if (trailerTitulo !== "") {
        const parametros = {
          q: trailerTitulo + " trailer",
          part: "snippet",
          type: "video",
          maxResults: 1,
          key: process.env.GOOGLE_APIKEY,
        };
        fetch(
          "https://www.googleapis.com/youtube/v3/search?" +
            new URLSearchParams(parametros)
        )
          .then((response) => response.json())
          .then((data) => {
            const videoId = data.items[0].id.videoId;
            const trailerURL = "https://www.youtube.com/embed/" + videoId;
            this.urlTrailer = trailerURL;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    },
  },
  computed: {
    computedRating() {
      return this.store.card.imdbRating / 2;
    },
  },
  mounted() {
    this.store.detailCard(this.$route.params.id);
    setTimeout(() => {
      this.buscarTrailer();
    }, 500);
  },
});
</script>
