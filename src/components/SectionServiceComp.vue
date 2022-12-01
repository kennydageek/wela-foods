<template>
  <v-row class="service-row mb-0">
    <v-col cols="5" sm="12" class="service-info">
      <slot name="heading"></slot>
      <slot name="service-box"></slot>
    </v-col>
    <v-col cols="7" sm="12" class="service-image" :class="bgColor">
      <div class="service-image__img">
        <img :src="image" alt="" />
      </div>

      <slot name="waves" class="d-sm-none"></slot>
    </v-col>
  </v-row>
</template>

<script>
// import ServiceBoxComp from '@/components/ServiceBoxComp';

export default {
  components: {
    // ServiceBoxComp,
  },

  props: {
    bgColor: {
      type: String,
      default: 'bgColor',
    },

    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.service-row {
  justify-content: space-between;
}

.service-info {
  margin: 0;
  padding: 0;
}

.bgColor {
  background: var(--color-accent-2);
}

.bgColor-2 {
  background: #1f3121;
}

.service-image {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 80rem;
}

.waves {
  width: 20.47rem;
  height: 18.62rem;
  position: absolute;
  right: -1.5rem;
  top: -1rem;
}

.service-image div {
  border-radius: 1rem;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60rem;
  width: 50rem;
}

.service-image__img img {
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.heading {
  width: 75%;
  font-size: 7rem;
  font-weight: 800;
  font-family: var(--font-heading);
  line-height: 8rem;
  margin: 4rem 0 2rem 0;
}

.heading span {
  /* color: var(--color-accent); */
  /* color: blue; */
}

.bottom-waves {
  position: absolute;
  bottom: -1.5rem;
  right: -6rem;
}
</style>
