<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Productos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="product in products" :key="product.id">
          <ion-label>
            <h2>{{ product.name }}</h2>
            <p>{{ formatCurrency(product.price) }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';

const store = useStore();
const products = computed(() => store.getters.products);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(value);
};
</script>
