<template>
  <v-layout full-height>
    <v-navigation-drawer width="350" color="grey-1" permanent>
      <v-container>
        <FlowerCard
          @add="addFlower"
          :item="flower"
          v-for="(flower, index) in flowers"
          :key="index"
        />
      </v-container>
    </v-navigation-drawer>
    <v-app-bar height="48" color="grey" elevation="0"></v-app-bar>
    <v-app-bar
      location="bottom"
      height="48"
      color="grey-lighten-2"
      elevation="0"
    ></v-app-bar>
    <v-main>
      <v-container v-if="bouquet.size > 0">
        <BouquetCard :bouquet="bouquet" />
        Итого к оплате: <b>{{ order.bouquet_price }}</b> руб.
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import FlowerCard from "./FlowerCard.vue";
import BouquetCard from "./BouquetCard.vue";
import { getFlowers } from "../api";
import { ref, reactive, watch } from "vue";

let flowers = ref([]);
let bouquet = ref(new Set());
let order = reactive({});

watch(bouquet.value, () => {
  order.bouquet_price = 0;
  for (let item of bouquet.value.values()) {
    order.bouquet_price += item.price * item.count;
  }
});

let addFlower = (flower) => {
  if (bouquet.value.has(flower)) flower.count++;
  else {
    flower.count = 1;
    bouquet.value.add(flower);
  }
};

getFlowers().then((data) => {
  flowers.value = data;
});
</script>
