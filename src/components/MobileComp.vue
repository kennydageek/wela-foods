<template>
  <v-row>
    <v-col cols="12" md="5">
      <h1 class="heading">Download <span>Wela</span> mobile application</h1>
      <p class="paragraph">
        Join thousands of user around the waiting to use our mobile app
      </p>

      <div class="cta">
        <wf-base-button :large="true" :secondary="true" text="Coming soon" />
      </div>
    </v-col>
    <v-col cols="6" sm="12" md="6">
      <img
        src="../assets/images/photos/mobileapp.svg"
        class="d-none d-sm-flex"
        alt=""
      />
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

@media screen and (max-width: 968.99px) {
  .heading {
    margin-top: 0;
    text-align: center;
  }

  .paragraph {
    text-align: center;
  }
  .cta {
    margin: 0 auto;
    width: 17rem;
  }

  img {
    width: 100%;
  }
}
</style>
