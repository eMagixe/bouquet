<template>
  <div>
    <v-table class="d-none d-md-block">
      <thead>
        <tr>
          <th class="text-left">Фото</th>
          <th class="text-left">Наименование</th>
          <th class="text-left">Цена</th>
          <th class="text-left">Цвет</th>
          <th class="text-left">Количество</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <transition-group name="list">
          <tr v-for="item in props.bouquet" :key="item._id">
            <td width="200">
              <v-img
                class="align-end ma-2"
                height="100"
                :src="require(`@/assets/images/flowers/${item.image}`)"
                cover
              >
              </v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price * item.count }} руб.</td>
            <td>{{ item.color }}</td>
            <td>{{ item.count }} шт.</td>
            <td>
              <v-btn
                class="delete"
                @click="deleteFlower(item)"
                color="red"
                icon="mdi-minus"
                size="small"
              ></v-btn>
            </td>
          </tr>
        </transition-group>
      </tbody>
    </v-table>
    <div class="d-block d-md-none">Мобилка</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
let props = defineProps({
  bouquet: Object,
});

const deleteFlower = (item) => {
  if (item.count > 1) item.count--;
  else props.bouquet.delete(item);
};
</script>

<style>
.delete {
  opacity: 0.1;
  transition: opacity 0.5s ease-in;
  color: red;
}
.delete:hover {
  opacity: 1;
  transition: opacity 0.25s ease-in;
}
.list-enter-active,
.list-leave-active {
  opacity: 1;
  transition: opacity 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: opacity 1s ease;
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
