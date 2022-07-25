<template>
  <v-card class="mx-auto mb-4" max-width="400">
    <v-img
      class="align-end"
      height="200"
      :src="require(`@/assets/images/flowers/${props.item.image}`)"
      cover
    >
    </v-img>
    <v-card-title>{{ props.item.name }}</v-card-title>
    <v-card-subtitle class="pt-4">{{ props.item.description }}</v-card-subtitle>
    <v-card-text>
      <div>Цена: {{ props.item.price }} р.</div>
      <div>Высота: {{ props.item.height }} см.</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="emit('add', props.item)"
        color="gray"
        icon="mdi-plus"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

let props = defineProps({
  item: Object,
});

let emit = defineEmits({
  add(item) {
    if (item) return true;
    else return false;
  },
});
</script>
