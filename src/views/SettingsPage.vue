<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Configuración de la Empresa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label position="floating">Nombre de la Empresa</ion-label>
        <ion-input v-model="configForm.name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Logo URL</ion-label>
        <ion-input v-model="configForm.logo"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="saveCompanyConfig">Guardar Configuración</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

const store = useStore();
const companyConfig = computed(() => store.getters.companyConfig);
const configForm = ref({ ...companyConfig.value });

const saveCompanyConfig = () => {
  store.dispatch('setCompanyConfig', configForm.value);
};
</script>
