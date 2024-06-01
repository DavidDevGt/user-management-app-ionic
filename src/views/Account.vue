<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Profile</ion-card-title>
            <ion-card-subtitle>Manage your account details</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <form @submit.prevent="updateProfile">
              <ion-item>
                <ion-label position="stacked">Name</ion-label>
                <ion-input v-model="profile.name" type="text" placeholder="Enter your name"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Email</ion-label>
                <ion-input v-model="profile.email" type="email" placeholder="Enter your email"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Website</ion-label>
                <ion-input v-model="profile.website" type="url" placeholder="Enter your website"></ion-input>
              </ion-item>
              <ion-button expand="block" type="submit" class="ion-margin-top">Update Profile</ion-button>
            </form>
            <ion-button expand="block" color="danger" class="ion-margin-top" @click="signOut">Log Out</ion-button>
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
  name: 'AccountPage',
  setup() {
    const profile = ref({ name: '', website: '' });

    const updateProfile = async () => {
      try {
        const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/profile`, profile.value);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const signOut = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/logout`);
      } catch (error) {
        console.error(error);
      }
    };

    return { profile, updateProfile, signOut };
  },
};
</script>
