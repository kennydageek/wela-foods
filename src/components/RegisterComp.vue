<template>
  <div class="register-wrapper">
    <h1 class="heading">Get the Front-row seat to <span>Wela</span></h1>
    <p class="paragraph">
      You get to experience the softwae firsthand, and for free.
    </p>

    <p class="countdown-timer">
      <vue-countdown-timer
        :start-time="'2022-11-30 00:00:00'"
        :end-time="'2022-12-5 12:59:59'"
        :interval="1000"
        label-position="begin"
        :end-text="'Event ended!'"
        :day-txt="null"
        :hour-txt="'hrs'"
        :minutes-txt="'mins'"
        :seconds-txt="'secs'"
      >
      </vue-countdown-timer>
    </p>
    <div class="cta mt-5">
      <wf-base-button
        :large="true"
        :primary="true"
        text="Request access"
        class="mr-6"
      />
      <wf-base-button
        class="mt-5"
        :large="true"
        :tertiary="true"
        text="Contact team"
      />
    </div>

    <img
      src="../assets/images/photos/wavy-3.svg"
      alt=""
      class="d-none d-sm-flex"
    />
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
  flex-wrap: wrap;
  /* justify-content: space-between; */
  width: 35rem;
}

i {
  font-style: normal !important;
}

@media screen and (max-width: 599.99px) {
  .heading {
    font-size: 40px;
  }
}
</style>
