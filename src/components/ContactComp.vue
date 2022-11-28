<template>
  <div class="contact-wrapper">
    <h1 class="heading">Didn't find answers? Contact Support</h1>
    <contact-box />
  </div>
</template>

<script>
import ContactBox from './ContactBox.vue';
export default {
  components: {
    ContactBox,
  },
};
</script>

<style scoped>
.contact-wrapper {
  background-color: #fff;
  padding: 5rem;
  border-radius: 4rem;
}

.heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
  color: #000;
}
</style>
