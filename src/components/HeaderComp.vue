<template>
  <div>
    <v-row class="header-wrapper">
      <v-col cols="12" sm="7" class="heading-wrapper">
        <h1 class="heading">
          You are what <br />
          you...<vue-typer
            :text="['Eat', `Don't Eat`]"
            erase-style="backspace"
            initial-action="erasing"
            :type-delay="500"
          ></vue-typer>
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
      <v-col cols="5" class="carousel-wrapper d-none d-sm-flex">
        <carousel-comp class="carousell" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CarouselComp from './CarouselComp';
import { VueTyper } from 'vue-typer';
export default {
  name: 'HeaderComp',
  components: {
    CarouselComp,
    VueTyper,
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
  /* font-weight: 800; */
  /* font-size: 9.2rem; */
  font-size: 9rem;
  font-family: 'neue machina';
  /* line-height: 12rem; */
  line-height: 10rem;
  color: #000;
}

.heading span {
  color: var(--color-accent) !important;
}

.heading__paragraph {
  color: rgba(0, 0, 0, 0.67);
  /* font-weight: 600; */
  font-size: 2.3rem;
  line-height: 3rem;
  /* width: 97%; */
  /* margin: 5.2rem 0; */
  margin: 4rem 0;
}

.heading-cta {
  display: flex;
}

::v-deep .typed {
  color: var(--color-accent) !important;
}
::v-deep .custom.caret {
  display: none;
}

.carousel-wrapper {
  position: relative;
  border-radius: 20px;
  width: 600px;
  height: 550px;
  padding: 0;
  margin: 0;
  /* justify-self: flex-end; */
}

.carousell {
  position: absolute;
  right: 0;
  width: 90%;
}

@media screen and (max-width: 960.99px) {
  .heading {
    font-size: 6rem;
  }
}
</style>
