import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCardStore = defineStore("card", {
  state: () => ({
    card: {},
  }),
  actions: {
    increment() {
      this.counter++;
    },
    detailCard(idCard) {
      api.get(`/?apikey=258a0a0b&i=${idCard}`).then((r) => {
        this.card = r.data;
        this.router.push(`/movies/${idCard}`);
      });
    },
  },
});
