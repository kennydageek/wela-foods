<template>
  <v-app id="app">
    <notification-bar class="notification-bar" />
    <v-main class="main-app">
      <v-row class="navigation" no-gutters>
        <v-col class="nav-logo">
          <img src="../src/assets/images/icons/logo.svg" alt="" />
        </v-col>
        <v-col class="nav-link">
          <a
            v-for="link in links"
            :key="link.text"
            :href="link.url"
            class="nav-link__link"
            >{{ link.text }}</a
          >
        </v-col>
        <v-col class="nav-cta">
          <a href="#" class="nav-cta nav-link__link">pricing</a>
          <wf-base-button
            text="Get Started"
            :small="true"
            :primary="true"
            class="btn-cta"
          />
        </v-col>
      </v-row>
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

  data() {
    return {
      links: [
        {
          text: 'Services',
          url: '#',
        },
        {
          text: 'Calorie Calculator',
          url: '#',
        },
        {
          text: 'FAQs',
          url: '#',
        },

        {
          text: 'Contact us',
          url: '#',
        },
      ],
    };
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
  --font-primary: Quicksand, sans-serif;
  --font-heading: Montserrat, sans-serif;
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
  font-family: var(--font-heading);
  /* padding: 0 6rem; */
  /* padding: 3rem 13rem 0; */
}

.main-app {
  /* background: blue; */
  width: 85%;
  margin: 3rem auto;
  /* margin: 10px 40px; */
}

.navigation {
  /* background: red; */
  justify-content: space-between;
  margin-top: 38px;
}

.nav-logo,
.nav-link,
.nav-cta {
  flex-grow: 1;
  align-self: center;
}

.nav-logo {
  width: 25%;
}

.nav-link {
  /* flex-grow: 1; */
  display: flex;
  justify-content: space-between;
  width: 35%;
  background: white;
  padding: 2rem 4.7rem !important;
  border-radius: 40px;
}

.nav-link__link {
  display: block;
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-primary) !important;
}

.nav-cta {
  display: flex;
  width: 25%;
  justify-content: flex-end;
  /* flex-grow: 0; */
}

.nav-cta .nav-link__link {
  align-self: center;
}

.btn-cta {
  margin-left: 2rem;
}

.notification-bar {
  /* position: absolute; */
  /* width: 100%; */
}
</style>
