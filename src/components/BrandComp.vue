<template>
  <div class="brand-wrapper">
    <div class="image-container" v-for="(item, i) in items" :key="i">
      <img :src="item.src" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/photos/terra.png'),
        },
        {
          src: require('@/assets/images/photos/ebooks.png'),
        },
        {
          src: require('@/assets/images/photos/levelup.png'),
        },
        {
          src: require('@/assets/images/photos/leafe.png'),
        },
        {
          src: require('@/assets/images/photos/hues.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.brand-wrapper {
  border: 1px solid #d9d9d9;
  border-left: none;
  border-right: none;
  padding: 3rem 10rem;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
}

.image-container {
  height: 7rem;
  align-self: center;
}

.image-container img {
  height: 100%;
}
</style>
