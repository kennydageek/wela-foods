<template>
  <v-app id="app">
    <notification-bar class="notification-bar" />
    <v-main class="main-app">
      <wf-nav-bar class="nav-bar pt-10" />
      <wf-navigation-drawer />
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

@media screen and (max-width: 599.99px) {
  html {
    font-size: 58.25%;
  }
  .heading {
    /* font-size: 5rem; */
  }
}

body {
  font-size: 16px;
}

#app {
  position: relative;
  background: var(--bg-color);
  font-family: var(--font-primary);
  /* font-family: var(--font-heading); */
  /* padding: 0 6rem; */
  /* padding: 3rem 13rem 0; */
  overflow: hidden;
}

.main-app {
  /* margin: 2rem auto; */
  /* margin: 0 auto; */
  /* background: blue; */
  /* width: 85%; */
  /* position: relative; */
  /* margin: 10px 40px; */
}

.notification-bar {
  position: absolute;
  top: 0;

  width: 100%;
}

.nav-bar {
  padding: 0 13rem;
  /* margin-top: 1rem; */
  margin-bottom: 4.6rem;
}

@media screen and (max-width: 960.99px) {
  .nav-bar {
    padding: 0 6.4rem;
  }
}

@media screen and (max-width: 599.99px) {
  .nav-bar {
    padding: 0 3rem;
  }
}
</style>
