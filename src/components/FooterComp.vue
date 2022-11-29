<template>
  <div class="footer-wrapper">
    <h1 class="footer__heading">A New Diet Model</h1>
    <!-- <div v-for="(social, i) in socials" :key="i"> -->
    <social-icon />
    <!-- </div> -->
  </div>
</template>

<script>
import socialIcon from './SocialIcons.vue';
export default {
  components: {
    socialIcon,
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
</style>
