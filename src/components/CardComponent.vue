<template>
  <q-card
    class="my-card cursor-pointer"
    square
    style="height: 280px"
    flat
    bordered
    @click="store.detailCard(cardData.imdbID)"
    tabindex="0"
    role="link"
    :aria-label="`Ver detalles de la película ${cardData.Title}`"
  >
    <q-img
      :src="cardData.Poster"
      class="card-poster"
      :alt="`Poster de la película ${cardData.Title}`"
    />
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-subtitle2 ellipsis">{{ cardData.Title }}</div>
      </div>
    </q-card-section>
    <q-card-section
      v-show="this.$route.path != '/search' ? true : false"
      class="rating"
    >
      <q-rating
        v-model="computedRating"
        size="1em"
        icon-selected="star"
        icon-half="star_half"
        color="teal"
        readonly
      />
      {{
        (cardData.imdbRating / 2).toFixed(1) == "NaN"
          ? "N/A"
          : (cardData.imdbRating / 2).toFixed(1)
      }}
    </q-card-section>
  </q-card>
</template>
<style></style>
<script>
import { defineComponent, computed } from "vue";
import { useCardStore } from "../stores/cardStore";

export default defineComponent({
  name: "CardComponent",
  props: {
    cardData: Object,
  },
  setup(props) {
    const computedRating = computed(() => props.cardData.imdbRating / 2);
    return {
      computedRating,
    };
  },
  data() {
    return {
      store: useCardStore(),
    };
  },
});
</script>

<style scoped>
.ellipsis {
  margin-top: -6px;
  margin-left: -12px;
}
</style>

<style>
.card-poster {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 0.4s ease;
}
.my-card {
  border: 0px;
}
.my-card:hover .card-poster {
  border: 1px solid #fff;
  transform: scale(1.05);
}
.card-movie {
  width: 220px;
  height: 300px;
}

.rating {
  margin-top: -35px;
  margin-left: -12px;
}
</style>
