<template>
  <div>
    <v-row class="navigation pt-10" no-gutters>
      <v-col cols="2" class="nav-logo">
        <img src="../../assets/images/icons/logo.svg" alt="" />
      </v-col>
      <v-col class="nav-link d-none d-md-flex">
        <a
          v-for="link in links"
          :key="link.text"
          :href="link.url"
          class="nav-link__link"
          >{{ link.text }}</a
        >
      </v-col>
      <v-col class="nav-cta d-none d-md-flex" cols="3">
        <a href="#" class="nav-cta nav-link__link">pricing</a>
        <wf-base-button
          text="Get Started"
          :small="true"
          :primary="true"
          class="btn-cta"
        />
      </v-col>

      <v-col class="d-flex d-md-none icon">
        <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </v-col>
    </v-row>

    <v-navigation-drawer class="py-10 px-5" v-model="drawer" absolute temporary>
      <v-list-item class="mb-10">
        <v-img src="@/assets/images/icons/logo.svg"></v-img>
      </v-list-item>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      drawer: null,
      items: [
        { title: 'Services', icon: 'mdi-view-dashboard' },
        { title: 'Calorie calculator', icon: 'mdi-forum' },
        { title: 'FAQs', icon: 'mdi-forum' },
        { title: 'Contact us', icon: 'mdi-forum' },
        { title: 'Pricing', icon: 'mdi-forum' },
      ],
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

<style scoped>
.navigation {
  /* background: red; */
  justify-content: space-between;
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

.icon {
  text-align: right;
  justify-content: flex-end;
}
</style>
