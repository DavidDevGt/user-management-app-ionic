<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Información de la Empresa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ companyConfig.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <img :src="companyConfig.logo" alt="Logo de la Empresa" v-if="companyConfig.logo" />
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';

const store = useStore();
const companyConfig = computed(() => store.getters.companyConfig);
</script>
