<template>
  <v-carousel
    cycle
    :show-arrows="false"
    hide-delimiters
    height="550"
    class="v-caroussel"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <wf-info-box
        :heading="item.heading"
        :url="item.url"
        :secondary="true"
        :small="true"
        :none="true"
        class="info-box"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          heading: 'Veggies',
          url: require('@/assets/images/photos/veggies.png'),
          src: require('@/assets/images/photos/carousel-1.png'),
        },
        {
          heading: 'Pepper',
          url: require('@/assets/images/photos/veggies.png'),
          src: require('@/assets/images/photos/carousel-1.png'),
        },
        {
          heading: 'Pasta',
          url: require('@/assets/images/photos/veggies.png'),
          src: require('@/assets/images/photos/carousel-1.png'),
        },
        {
          heading: 'Swallow',
          url: require('@/assets/images/photos/veggies.png'),
          src: require('@/assets/images/photos/carousel-1.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-caroussel {
  border-radius: 2rem;
  background-size: cover;
}

.info-box {
  position: absolute;
  left: 3rem;
  bottom: 6rem;
}
</style>
