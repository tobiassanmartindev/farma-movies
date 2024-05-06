<template>
  <div class="row q-ml-lg q-pt-lg">
    <div class="col">
      <div class="text-h5">Series populares</div>
    </div>
    <div class="col-1 q-mr-md cursor-pointer text-grey">Explorar mas</div>
  </div>
  <div class="q-pa-md">
    <q-scroll-area style="height: 355px; max-width: 100%">
      <div class="row no-wrap q-mt-sm">
        <div
          class="q-mx-sm card-movie"
          v-for="cardData in series"
          :key="cardData"
          v-show="cardData.Poster != 'N/A' ? true : false"
        >
          <CardComponent :cardData="cardData" />
        </div>
      </div>
    </q-scroll-area>
  </div>
  <div class="row q-ml-lg q-pt-lg">
    <div class="col">
      <div class="text-h5">Series mejor valoradas</div>
    </div>
    <div class="col-1 q-mr-md cursor-pointer text-grey">Explorar mas</div>
  </div>
  <div class="q-pa-md">
    <q-scroll-area style="height: 355px; max-width: 100%">
      <div class="row no-wrap q-mt-sm">
        <div
          class="q-mx-sm card-movie"
          v-for="cardData in series"
          :key="cardData"
          v-show="cardData.Poster != 'N/A' ? true : false"
        >
          <CardComponent :cardData="cardData" />
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>
<script>
import { defineComponent } from "vue";
// import { ref } from "vue";
import CardComponent from "components/CardComponent.vue";
import { api } from "src/boot/axios";
// import CardComponent from "components/CardComponent.vue";

export default defineComponent({
  name: "SeriesPage",
  setup() {
    return {
      // ratingModel: 8,
      // movies: {},
      series: [
        {
          Title: "Alexander: The Making of a God",
          Year: "2024–",
          Rated: "TV-14",
          Released: "31 Jan 2024",
          Runtime: "N/A",
          Genre: "Documentary, Drama, History",
          Director: "N/A",
          Writer: "N/A",
          Actors: "Souad Faress, Buck Braithwaite, Will Stevens",
          Plot: "Alexander was King of the ancient Greek city state Macedon and widely considered to be one of history's greatest and most successful military commanders. By the age of 30 he had created one of the largest empires in history.",
          Language: "English",
          Country: "United Kingdom",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjEzMmI0YzEtYzA4MS00OGNiLThhMDMtOWZlYjEwZWFmNTQ1XkEyXkFqcGdeQXVyNDg0NjMwNDY@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "5.4/10" }],
          Metascore: "N/A",
          imdbRating: "5.4",
          imdbVotes: "11,874",
          imdbID: "tt27494999",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
        {
          Title: "Fallout",
          Year: "2024–",
          Rated: "TV-MA",
          Released: "10 Apr 2024",
          Runtime: "N/A",
          Genre: "Action, Adventure, Drama",
          Director: "N/A",
          Writer: "Geneva Robertson-Dworet, Graham Wagner",
          Actors: "Ella Purnell, Aaron Moten, Walton Goggins",
          Plot: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
          Language: "English",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EwNjFhMmEtZDc4YS00OTUwLTkyODEtMzViMzliZWIyMzYxXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "8.7/10" }],
          Metascore: "N/A",
          imdbRating: "8.7",
          imdbVotes: "40,394",
          imdbID: "tt12637874",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
        {
          Title: "Baby Reindeer",
          Year: "2024",
          Rated: "TV-MA",
          Released: "11 Apr 2024",
          Runtime: "N/A",
          Genre: "Biography, Drama",
          Director: "N/A",
          Writer: "N/A",
          Actors: "Richard Gadd, Nava Mau, Jessica Gunning",
          Plot: "The story follows the writer and performer Richard Gadd's warped relationship with his female stalker and the impact it has on him as he is ultimately forced to face a deep, dark buried trauma.",
          Language: "English",
          Country: "United Kingdom",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZmQ0NDE5NjYtMGU4OS00NGMwLWJmOGYtZjVmYTFhMzA3ZGQ2XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "8.2/10" }],
          Metascore: "N/A",
          imdbRating: "8.2",
          imdbVotes: "22,709",
          imdbID: "tt13649112",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
        {
          Title: "Shogun",
          Year: "2024",
          Rated: "TV-MA",
          Released: "27 Feb 2024",
          Runtime: "N/A",
          Genre: "Adventure, Drama, History",
          Director: "N/A",
          Writer: "James Clavell (based on the novel by)",
          Actors: "Hiroyuki Sanada, Cosmo Jarvis, Anna Sawai",
          Plot: "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
          Language: "Japanese, English",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzhkNzVkNDYtNmE2Zi00ZTk1LTk2OWYtOTU5NWM5OWQ2Zjc0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "9.2/10" }],
          Metascore: "N/A",
          imdbRating: "9.2",
          imdbVotes: "60,908",
          imdbID: "tt2788316",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
        {
          Title: "The New Look",
          Year: "2024–",
          Rated: "TV-MA",
          Released: "14 Feb 2024",
          Runtime: "N/A",
          Genre: "Biography, Drama, History",
          Director: "N/A",
          Writer: "Todd A. Kessler",
          Actors: "Ben Mendelsohn, Juliette Binoche, David Kammenos",
          Plot: "Explores the rise of fashion designer Christian Dior, as he dethrones Coco Chanel and helps return spirit and life to the world with his iconic imprint of beauty and influence.",
          Language: "English",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZTQxNzRmMTAtMzkzOC00YjhhLThkNWQtN2M1Mjg3OTA4OWZjXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "7.3/10" }],
          Metascore: "N/A",
          imdbRating: "7.3",
          imdbVotes: "3,530",
          imdbID: "tt18177528",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
        {
          Title: "Constellation",
          Year: "2024–",
          Rated: "TV-MA",
          Released: "21 Feb 2024",
          Runtime: "N/A",
          Genre: "Sci-Fi, Thriller",
          Director: "N/A",
          Writer: "N/A",
          Actors: "Noomi Rapace, Jonathan Banks, James D'Arcy",
          Plot: "Jo returns to earth after a disaster in space and discovers that there are missing pieces in her life, so she sets out to expose the truth about the hidden secrets of space travel and recover what she has lost.",
          Language: "English",
          Country: "United States, United Kingdom, France",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDEzMjE3MTItMzYyNi00NTJmLWJiMjEtODgxYTcxZWJhNTAxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "7.0/10" }],
          Metascore: "N/A",
          imdbRating: "7.0",
          imdbVotes: "5,793",
          imdbID: "tt19395018",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
      ],
      serie: Object,
    };
  },
  methods: {
  },
  mounted() {
    // this.getSeries();
  },
  computed: {
    stars() {
      return this.serie.imdbRating / 2;
    },
  },
  components: {
    CardComponent,
  },
});
</script>
