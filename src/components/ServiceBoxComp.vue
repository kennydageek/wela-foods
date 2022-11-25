<template>
  <div class="service-wrapper">
    <div class="title">
      <div>
        <img src="../assets/images/icons/charge.svg" />
      </div>
      <p class="heading">Fast Delivery Process</p>
    </div>

    <p class="content">
      Have ingredients delivered to you within minutes from our store ranging
      from African to Continental cuisines
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.service-wrapper {
  background: #fff;
  padding: 3.3rem 4.5rem;
  width: 50rem;
  max-width: 50rem;
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
  background-color: rgba(255, 230, 0, 0.09);
}

.title img {
  //   display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-self: center;
  //   background: red;
}

.heading {
  color: #000;
  font-weight: 800;
  font-size: 2.4rem;
  font-family: 'neue machina';
  margin-left: 2.9rem;
  align-self: center;
  margin-bottom: 0;
}

.content {
  margin-bottom: 0;
  font-size: 1.8rem;
  line-height: 2.6rem;
}
</style>
