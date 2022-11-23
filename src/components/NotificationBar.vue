<template>
  <div class="wrapper">
    <p>
      Introducing Wela food services.
      <a href="#" class="white--text">Join waitlist</a>
    </p>
    <div class="image-container">
      <img src="../assets/images/icons/🦆 emoji _rocket_.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationBar',
};
</script>

<style scoped>
.wrapper {
  background: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

p,
a {
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 0;
  padding: 10px 0;
  /* line-height: 30px; */
  color: #fff;
  align-self: center;
}

.image-container {
  width: 17px;
  height: 17px;
  align-self: center;
  margin-left: 9px;
}

.image-container img {
  width: 100%;
  height: 100%;
}
</style>
