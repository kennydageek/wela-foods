<template>
  <div class="register-wrapper">
    <h1 class="heading">Get the Front-row seat to <span>Wela</span></h1>
    <p class="paragraph">
      You get to experience the softwae firsthand, and for free.
    </p>

    <p class="countdown-timer">22hrs:40mins:12secs left</p>
    <div class="cta">
      <wf-base-button
        :large="true"
        :primary="true"
        text="Request access"
        class="mr-6"
      />
      <wf-base-button :large="true" :tertiary="true" text="Contact team" />
    </div>

    <img src="../assets/images/photos/wavy-3.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.register-wrapper {
  position: relative;
  background-color: #f0f6f1;
  border-radius: 4rem;
  padding: 10rem;
}
.register-wrapper img {
  width: 18rem;
  height: 18rem;
  position: absolute;
  right: 0;
  bottom: -1.5rem;
}

.heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.85);
}

.heading span {
  color: var(--color-accent);
}

.paragraph {
  font-size: 2.4rem;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 5rem;
}

.countdown-timer {
  font-size: 3.5rem;
  font-weight: 800;
  font-family: 'neue machina';
  color: var(--color-accent);
  margin-bottom: 5rem;
}

.cta {
  display: flex;
  /* justify-content: space-between; */
  width: 35rem;
}
</style>
