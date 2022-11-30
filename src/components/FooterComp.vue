<template>
  <div class="footer-wrapper">
    <h1 class="footer__heading">A New Diet Model</h1>
    <social-icon class="social-icon" />

    <v-row>
      <v-col cols="5" class="first-col">
        <p class="first-col__heading">Wela</p>
        <p class="first-col__paragraph">
          We are a global food organization offering food prduce and tutorials
        </p>

        <footer-contact />
      </v-col>
      <v-col cols="5" class="second-col">;lldldlddldl</v-col>
    </v-row>
  </div>
</template>

<script>
import socialIcon from './SocialIcons.vue';
import FooterContact from './FooterContact.vue';
export default {
  components: {
    socialIcon,
    FooterContact,
  },
};
</script>

<style scoped>
.footer-wrapper {
  padding: 7rem 9rem 2rem;
  background-color: #fff;
}

.footer__heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 4rem;
  margin-bottom: 10rem;
}

.social-icon {
  margin-bottom: 10rem;
}

.first-col {
  /* background: blue; */
}

.first-col__heading {
  font-family: 'neue machina';
  color: var(--color-accent);
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
}

.first-col__paragraph {
  color: #9a9ea6;
  font-size: 1.4rem;
  margin-bottom: 2.4rem;
}

.second-col {
  background: purple;
}
</style>
