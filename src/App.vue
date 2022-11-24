<template>
  <v-app id="app">
    <notification-bar class="notification-bar" />
    <v-main class="main-app">
      <wf-nav-bar class="nav-bar" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NotificationBar from '@/components/NotificationBar';
export default {
  name: 'app',
  components: {
    NotificationBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&family=Quicksand:wght@300;400;500;600;700&display=swap');

:root {
  --bg-color: #f9f8f5;
  --color-primary: #068667;
  --color-accent: #ff6b00;
  --color-accent-2: #ffbf63;
  --font-primary: 'founders grotesk', sans-serif;
  --font-heading: 'neue machina', sans-serif;
}

@font-face {
  font-family: 'founders grotesk';
  src: url('@/assets/fonts/foundersgrotesk-regular-webfont.woff2')
      format('woff2'),
    url('@/assets/fonts/foundersgrotesk-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'neue machina';
  src: url('@/assets/fonts/neuemachina-light-webfont.woff2') format('woff2'),
    url('@/assets/fonts/neuemachina-light-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'neuemachinaregular';
  src: url('@/assets/fonts/neuemachina-regular-webfont.woff2') format('woff2'),
    url('@/assets/fonts/neuemachina-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'neue machina';
  src: url('@/assets/fonts/neuemachina-ultrabold-webfont.woff2') format('woff2'),
    url('@/assets/fonts/neuemachina-ultrabold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
  font-family: var(--font-primary);
  font-size: 16px;
}

#app {
  background: var(--bg-color);
  /* font-family: var(--font-heading); */
  /* padding: 0 6rem; */
  /* padding: 3rem 13rem 0; */
}

.main-app {
  /* background: blue; */
  width: 85%;
  margin: 2rem auto;
  /* margin: 10px 40px; */
}

.notification-bar {
  /* position: absolute; */
  /* width: 100%; */
}

.nav-bar {
  margin-top: 1rem;
  margin-bottom: 4.6rem;
}
</style>
