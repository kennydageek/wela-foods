<template>
  <div>
    <v-row class="header-wrapper">
      <v-col cols="6" class="heading-wrapper">
        <h1 class="heading">
          You are what<br />
          you...<span>Eat</span>
        </h1>
        <p class="heading__paragraph">
          Wela is a food technology company that provides logistics services to
          both vendors and consumers. This potentially allows users to order
          Ingredients as well as to learn how to cook
        </p>
        <div class="heading-cta">
          <wf-base-button
            :large="true"
            :primary="true"
            text="Get Started"
            class="mr-6"
          />
          <wf-base-button :large="true" :secondary="true" text="View Plans" />
        </div>
      </v-col>
      <v-col cols="4" class="carousel-wrapper">
        <carousel-comp />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CarouselComp from './CarouselComp';
export default {
  name: 'HeaderComp',
  components: {
    CarouselComp,
  },
};
</script>

<style scoped>
.header-wrapper {
  justify-content: space-between;
}
.heading-wrapper {
  align-self: center;
}

.heading {
  font-weight: 800;
  /* font-size: 9.2rem; */
  font-size: 7rem;
  /* line-height: 12rem; */
  line-height: 8rem;
  color: #000;
}

.heading span {
  color: var(--color-accent);
}

.heading__paragraph {
  color: #000;
  opacity: 67%;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 3rem;
  /* margin: 5.2rem 0; */
  margin: 4rem 0;
}

.heading-cta {
  display: flex;
}

.carousel-wrapper {
  border-radius: 20px;
  /* height: 600px; */
  padding: 0;
  margin: 0;
  /* justify-self: flex-end; */
}
</style>
