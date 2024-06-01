<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Productos</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openProductModal">Añadir Producto</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="product in products" :key="product.id">
          <ion-label>
            <h2>{{ product.name }}</h2>
            <p>{{ formatCurrency(product.price) }}</p>
          </ion-label>
          <ion-buttons slot="end">
            <ion-button @click="editProduct(product)">Editar</ion-button>
            <ion-button color="danger" @click="deleteProduct(product.id)">Eliminar</ion-button>
          </ion-buttons>
        </ion-item>
      </ion-list>
      <ion-modal :is-open="isProductModalOpen" @didDismiss="closeProductModal">
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ isEditing ? 'Editar Producto' : 'Añadir Producto' }}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="closeProductModal">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="productForm.name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Precio</ion-label>
            <ion-input type="number" v-model="productForm.price"></ion-input>
          </ion-item>
          <ion-footer>
            <ion-toolbar>
              <ion-button expand="full" @click="saveProduct">{{ isEditing ? 'Guardar Cambios' : 'Añadir Producto' }}</ion-button>
            </ion-toolbar>
          </ion-footer>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButtons, IonButton, IonModal, IonInput, IonFooter } from '@ionic/vue';

const store = useStore();
const products = computed(() => store.getters.products);
const isProductModalOpen = ref(false);
const isEditing = ref(false);
const productForm = ref({
  id: null,
  name: '',
  price: 0
});

const openProductModal = () => {
  isEditing.value = false;
  productForm.value = {
    id: null,
    name: '',
    price: 0
  };
  isProductModalOpen.value = true;
};

const closeProductModal = () => {
  isProductModalOpen.value = false;
};

const editProduct = (product) => {
  isEditing.value = true;
  productForm.value = { ...product };
  isProductModalOpen.value = true;
};

const saveProduct = () => {
  if (isEditing.value) {
    store.dispatch('setProducts', products.value.map(p => p.id === productForm.value.id ? productForm.value : p));
  } else {
    productForm.value.id = Date.now();
    store.dispatch('setProducts', [...products.value, productForm.value]);
  }
  closeProductModal();
};

const deleteProduct = (productId) => {
  store.dispatch('setProducts', products.value.filter(p => p.id !== productId));
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(value);
};
</script>
