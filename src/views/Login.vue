<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Welcome</ion-card-title>
            <ion-card-subtitle>Login to your account</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <form @submit.prevent="handleLogin">
              <ion-item>
                <ion-label position="stacked">Email</ion-label>
                <ion-input v-model="email" type="email" placeholder="Enter your email"></ion-input>
              </ion-item>
              <ion-button expand="block" type="submit" class="ion-margin-top">Login</ion-button>
            </form>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('');

    const handleLogin = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, { email: email.value });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    return { email, handleLogin };
  },
};
</script>
