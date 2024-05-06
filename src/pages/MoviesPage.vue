<template>
  <div class="row q-ml-lg q-pt-lg">
    <div class="col">
      <div class="text-h5">Peliculas Populares</div>
    </div>
    <div class="col-1 q-mr-md cursor-pointer text-grey">Explorar mas</div>
  </div>
  <div class="q-pa-md">
    <q-scroll-area class="scrollarea">
      <div class="row no-wrap q-mt-sm">
        <div
          class="q-mx-sm card-movie"
          v-for="cardData in recentReleases"
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
      <div class="text-h5">Peliculas mejor valoradas</div>
    </div>
    <div class="col-1 q-mr-md cursor-pointer text-grey">Explorar mas</div>
  </div>
  <div class="q-pa-md">
    <q-scroll-area class="scrollarea">
      <div class="row no-wrap q-mt-sm">
        <div
          class="q-mx-sm"
          style="width: 220px; height: 300px"
          v-for="cardData in recentReleases"
          :key="cardData"
          v-show="cardData.Poster != 'N/A' ? true : false"
        >
          <CardComponent :cardData="cardData" />
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>
<style>
.scrollarea {
  height: 355px;
  max-width: 100%;
}
</style>
<script>
import { defineComponent } from "vue";
import CardComponent from "components/CardComponent.vue";
import { ref } from "vue";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "MoviesPage",
  setup() {
    return {
      ratingModel: 8,
      movies: {},
      recentReleases: [
        {
          Title: "Lisa Frankenstein",
          Year: "2024",
          Rated: "PG-13",
          Released: "09 Feb 2024",
          Runtime: "101 min",
          Genre: "Comedy, Horror, Romance",
          Director: "Zelda Williams",
          Writer: "Diablo Cody",
          Actors: "Kathryn Newton, Liza Soberano, Jenna Davis",
          Plot: "A coming of RAGE love story about a teenager and her crush, who happens to be a corpse. After a set of horrific circumstances bring him back to life, the two embark on a journey to find love, happiness - and a few missing body parts.",
          Language: "English",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNjJkZDExMGQtNGE2YS00YzJiLWJiNjEtNmYwZjIxZGMxNTZiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "6.1/10" }],
          Metascore: "N/A",
          imdbRating: "6.1",
          imdbVotes: "14,218",
          imdbID: "tt21188080",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "$9,774,285",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "The Idea of You",
          Year: "2024",
          Rated: "R",
          Released: "02 May 2024",
          Runtime: "115 min",
          Genre: "Drama, Romance",
          Director: "Michael Showalter",
          Writer: "Robinne Lee, Michael Showalter, Jennifer Westfeldt",
          Actors: "Anne Hathaway, Nicholas Galitzine, Ella Rubin",
          Plot: "Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
          Language: "English",
          Country: "United States",
          Awards: "1 nomination",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYWRkZjJiODEtM2IwZi00ZjM1LWEyOTUtOThjMDk3YThjZDUzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
          Ratings: [],
          Metascore: "N/A",
          imdbRating: "N/A",
          imdbVotes: "206",
          imdbID: "tt9466114",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "Madame Web",
          Year: "2024",
          Rated: "PG-13",
          Released: "14 Feb 2024",
          Runtime: "116 min",
          Genre: "Action, Adventure, Sci-Fi",
          Director: "S.J. Clarkson",
          Writer: "Matt Sazama, Burk Sharpless, Claire Parker",
          Actors: "Dakota Johnson, Sydney Sweeney, Isabela Merced",
          Plot: "Cassandra Webb is a New York metropolis paramedic who begins to demonstrate signs of clairvoyance. Forced to challenge revelations about her past, she needs to safeguard three young women from a deadly adversary who wants them des...",
          Language: "English",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYWJkY2Q4NmYtOGRlMi00YTg5LWE2ZmQtY2NkYzk3YTRmNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg",
          Ratings: [
            { Source: "Internet Movie Database", Value: "3.8/10" },
            { Source: "Rotten Tomatoes", Value: "12%" },
          ],
          Metascore: "N/A",
          imdbRating: "3.8",
          imdbVotes: "54,574",
          imdbID: "tt11057302",
          Type: "movie",
          DVD: "15 Mar 2024",
          BoxOffice: "$43,817,106",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "Dune",
          Year: "2021",
          Rated: "PG-13",
          Released: "22 Oct 2021",
          Runtime: "155 min",
          Genre: "Action, Adventure, Drama",
          Director: "Denis Villeneuve",
          Writer: "Jon Spaihts, Denis Villeneuve, Eric Roth",
          Actors: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
          Plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
          Language: "English, Mandarin",
          Country: "United States, Canada",
          Awards: "Won 6 Oscars. 173 wins & 294 nominations total",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
          Ratings: [
            { Source: "Internet Movie Database", Value: "8.0/10" },
            { Source: "Rotten Tomatoes", Value: "83%" },
            { Source: "Metacritic", Value: "74/100" },
          ],
          Metascore: "74",
          imdbRating: "8.0",
          imdbVotes: "835,661",
          imdbID: "tt1160419",
          Type: "movie",
          DVD: "22 Oct 2021",
          BoxOffice: "$108,897,830",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
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
          Title: "D' Terrifying Night Movie",
          Year: "2024",
          Rated: "N/A",
          Released: "N/A",
          Runtime: "N/A",
          Genre: "Horror",
          Director: "Jongeorge Stephenson",
          Writer: "Jongeorge Stephenson",
          Actors: "N/A",
          Plot: "N/A",
          Language: "English",
          Country: "United Kingdom",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTI5ZTE4YjctYTBkNC00NWM0LTkwYmEtMjA3ZDBmMDE1MmNiXkEyXkFqcGdeQXVyMTUyMjA2NjQ1._V1_SX300.jpg",
          Ratings: [],
          Metascore: "N/A",
          imdbRating: "N/A",
          imdbVotes: "N/A",
          imdbID: "tt19785008",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "Romeo è Giulietta",
          Year: "2024",
          Rated: "N/A",
          Released: "14 Feb 2024",
          Runtime: "105 min",
          Genre: "Comedy",
          Director: "Giovanni Veronesi",
          Writer: "Giovanni Veronesi, Pietro Valsecchi, Pilar Fogliati",
          Actors: "Sergio Castellitto, Pilar Fogliati, Geppi Cucciari",
          Plot: "",
          Language: "Italian",
          Country: "Italy",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMmY2ODEzY2MtZGQ4OS00NDczLTgxYWEtNjdhYzBmODk4ZmViXkEyXkFqcGdeQXVyNDAxNzI3NDE@._V1_SX300.jpg",
          Ratings: [],
          Metascore: "N/A",
          imdbRating: "N/A",
          imdbVotes: "83",
          imdbID: "tt30811313",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "The LGBTQ+ Films: G",
          Year: "2024",
          Rated: "N/A",
          Released: "01 Feb 2024",
          Runtime: "N/A",
          Genre: "Short, Drama",
          Director: "Danny Thykær",
          Writer: "Albert Bendix, Danny Thykær",
          Actors: "Albert Bendix, Aleksander Varadian, Regitze Ingleby",
          Plot: "Gregers is getting ready for a hookup with Noah in his apartment It is the first time they meet. Everything starts out perfectly, they kiss, but a misunderstanding causes the night to end in a way none of the two men had anticipated.",
          Language: "Danish, Norwegian",
          Country: "Denmark",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTJmODgwOTUtMTVjNi00ZjBhLWExYjEtZWJiNTdlNjg5ZmViXkEyXkFqcGdeQXVyODg3MzU0MQ@@._V1_SX300.jpg",
          Ratings: [],
          Metascore: "N/A",
          imdbRating: "N/A",
          imdbVotes: "N/A",
          imdbID: "tt20195530",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "M*A*S*H: The Comedy That Changed Television",
          Year: "2024",
          Rated: "N/A",
          Released: "01 Jan 2024",
          Runtime: "89 min",
          Genre: "Talk-Show",
          Director: "John Scheinfeld",
          Writer: "N/A",
          Actors: "Alan Alda, Allan Arbus, G.W. Bailey",
          Plot: "Join the men and women who made M*A*S*H as they celebrate one of the most beloved, enduringly popular, often quoted and influential comedies ever created.",
          Language: "English",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BODYxNTdkYjktZDExNS00ZDE3LTllYjctNWM0N2FmOGE5YjU2XkEyXkFqcGdeQXVyMDAwMDAwMw@@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "8.3/10" }],
          Metascore: "N/A",
          imdbRating: "8.3",
          imdbVotes: "169",
          imdbID: "tt30324905",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title:
            "Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord",
          Year: "2024–",
          Rated: "TV-14",
          Released: "09 Jan 2024",
          Runtime: "N/A",
          Genre: "Animation, Action, Comedy",
          Director: "N/A",
          Writer: "Satori Tanabata",
          Actors: "Fairouz Ai, Taku Yashiro, Azumi Waki",
          Plot: "Despite wanting a quiet reborn life, this former college girl levels up to the max as the villainess.",
          Language: "Japanese, Hindi",
          Country: "Japan",
          Awards: "1 win",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMGIzOTMwMzUtYzFlYy00YTkyLThmMzktYTBlZTZkMzNlNzMwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "7.0/10" }],
          Metascore: "N/A",
          imdbRating: "7.0",
          imdbVotes: "531",
          imdbID: "tt30495119",
          Type: "series",
          totalSeasons: "1",
          Response: "True",
        },
        {
          Title: "Dr. A. P. J. Abdul Kalam",
          Year: "2024",
          Rated: "N/A",
          Released: "11 Oct 2024",
          Runtime: "N/A",
          Genre: "Biography, Drama",
          Director: "Prince Jagadeesh Daneti",
          Writer: "Prince Jagadeesh Daneti",
          Actors: "Mohammad Ali",
          Plot: "Dr. A. P. J. Abdul Kalam is a Pole Star for the global citizens and Indians, in the sky of ambiguity and competition. Righteousness, Knowledge transfer, giving wings to dreams and simple living are the tools he gifted to the world for happy and successful living. This film is the inspirational journey of the Legend, Missile Man and 11th People's President of India, who became a Demi-god in the hearts of Millions of his admirers. He rules and guides his admirers even after death, thus becoming 'The Immortal President'.",
          Language: "Telugu, Tamil, Gujarati, Kannada, Hindi",
          Country: "United States",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZWViMDVmZDAtMDY5NC00MGI3LWE3M2YtMTFlNjg2NjJlZTllXkEyXkFqcGdeQXVyODE0NzM4NjU@._V1_SX300.jpg",
          Ratings: [],
          Metascore: "N/A",
          imdbRating: "N/A",
          imdbVotes: "N/A",
          imdbID: "tt15845656",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "Mr. K",
          Year: "2024",
          Rated: "N/A",
          Released: "N/A",
          Runtime: "N/A",
          Genre: "Comedy, Drama, Mystery",
          Director: "Tallulah Hazekamp Schwab",
          Writer: "Tallulah Hazekamp Schwab",
          Actors: "N/A",
          Plot: "After spending the night in a remote hotel, Mr K is stuck in a claustrophobic nightmare, when he discovers that he can leave the building.",
          Language: "English",
          Country: "N/A",
          Awards: "N/A",
          Poster: "N/A",
          Ratings: [],
          Metascore: "N/A",
          imdbRating: "N/A",
          imdbVotes: "N/A",
          imdbID: "tt7972570",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
        {
          Title: "Rob N Roll",
          Year: "2024",
          Rated: "N/A",
          Released: "19 Jan 2024",
          Runtime: "98 min",
          Genre: "Action, Comedy, Crime",
          Director: "Albert Kai-Kwong Mak",
          Writer: "Ryker Chan, Albert Kai-kwong Mak, Uen-Ching Man",
          Actors: "Aaron Kwok, Richie Jen, Ka-Tung Lam",
          Plot: "Decadent middle-aged brother, Murong Hui plan to rob but accidentally by the violent bandits Mei Blue sky trouble, three temporary team, huge money to see, but by others first, at the same time female detective Jiang sister will a...",
          Language: "Cantonese, Mandarin, Shanghainese, Chaozhou, Chinese",
          Country: "China, Hong Kong",
          Awards: "N/A",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDUwMTMwYTYtZmI1Zi00YTI0LWI2MWUtZWJjYTEwMWFmYmVjXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg",
          Ratings: [{ Source: "Internet Movie Database", Value: "6.2/10" }],
          Metascore: "N/A",
          imdbRating: "6.2",
          imdbVotes: "323",
          imdbID: "tt30958950",
          Type: "movie",
          DVD: "N/A",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True",
        },
      ],
    };
  },
  components: {
    CardComponent,
  },
  methods: {},
  mounted() {},
});
</script>
