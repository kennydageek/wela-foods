<template>
  <v-row>
    <v-col cols="5">
      <h1 class="heading">Download <span>Wela</span> mobile application</h1>
      <p class="paragraph">
        Join thousands of user around the waiting to use our mobile app
      </p>

      <wf-base-button :large="true" :secondary="true" text="Coming soon" />
    </v-col>
    <v-col cols="6">
      <img src="../assets/images/photos/mobileapp.svg" alt="" />
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.heading {
  margin-top: 8rem;
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 7rem;
  line-height: 7.5rem;
}

.heading span {
  color: var(--color-accent);
}

.paragraph {
  margin-top: 3rem;
  font-size: 2.5rem;
  line-height: 4.7rem;
  color: #4b5563;
}

img {
  width: 80rem;
  height: 80rem;
}
</style>
