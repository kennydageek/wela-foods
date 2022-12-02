<template>
  <div class="service-wrapper">
    <div class="title">
      <div :class="services.imgBg">
        <img :src="services.img" height="24" width="24" />
      </div>
      <p class="heading">{{ services.heading }}</p>
    </div>

    <p class="content">
      {{ services.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.yellowbg {
  background-color: rgba(255, 230, 0, 0.09);
}

.bluebg {
  background-color: #f0fff8;
}

.greybg {
  background-color: #fafafa;
}

.greenbg {
  background-color: #f0fff8;
}

.service-wrapper {
  background: #fff;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 45rem;
  border-radius: 1rem;
}

.title {
  display: flex;
  margin-bottom: 2.6rem;
}

.title div {
  position: relative;
  width: 4.9rem;
  height: 4.9rem;
  border-radius: 1.4rem;
  /* //   background-color: rgba(255, 230, 0, 0.09); */
}

.title img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-self: center;
}

.heading {
  color: #000;
  font-weight: 800;
  font-size: 20px;
  font-family: 'neue machina';
  margin-left: 2.9rem;
  align-self: center;
  margin-bottom: 0;
  text-transform: capitalize;
}

.content {
  margin-bottom: 0;
  font-size: 18px;
  line-height: 2.6rem;
}

@media screen and (max-width: 968.99px) {
  .service-wrapper {
    margin: 1rem auto;
    width: 90%;
  }
}
</style>
