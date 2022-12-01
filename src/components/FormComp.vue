<template>
  <v-row class="form-row">
    <v-col cols="12" md="5" class="mb-10">
      <h1 class="heading">
        Want to be the first to try out <span>Wela?</span>
      </h1>
    </v-col>

    <v-col cols="12" md="5">
      <div class="form-div">
        <p class="form-div__heading">
          Please Enter Your Details in the Form Below
        </p>
        <form>
          <wf-base-input
            type="text"
            placeholder="e.g: Daniel"
            id="firstname"
            label="First Name"
            class="input"
            value=""
          />
          <wf-base-input
            type="text"
            placeholder="e.g: Daniel"
            id="lastname"
            label="Last Name"
            class="input"
          />
          <wf-base-input
            type="email"
            placeholder="e.g: Danielara@gmail.com"
            id="email"
            label="Email Address"
            class="input"
          />
          <wf-base-input
            type="text"
            placeholder="e.g: +234 834 5434 4564"
            id="number"
            label="Phone Number"
            class="input"
          />

          <wf-base-input
            type="text"
            placeholder="e.g: surulere, Lagos"
            id="location"
            label="Location"
            class="input"
          />

          <div class="checkbox-div">
            <img
              v-if="checked"
              @click="checked = !checked"
              src="../assets/images/icons/Checkbox.svg"
              alt=""
            />
            <input
              v-if="!checked"
              @click="checked = true"
              type="checkbox"
              name=""
              id="checkbox"
            />
            <p class="checkbox-text">
              Opt in to receive more information about what <span>Wela</span> is
              upto
            </p>
          </div>

          <button class="btn__cta" type="submit">Request Access</button>
        </form>
        <img
          src="../assets/images/photos/wavy-4.svg"
          alt=""
          class="d-none d-sm-flex"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style scoped>
.form-row {
  justify-content: space-between !important;
}

.heading {
  margin-top: 16rem;
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 6rem;
  line-height: 7rem;
}

.heading span {
  color: var(--color-accent);
}

.form-div {
  padding: 3rem 4rem;
  background-color: #fff;
  border-radius: 1.6rem;
  position: relative;
  overflow: hidden;
}

.form-div img {
  position: absolute;
  right: -2rem;
  bottom: -1.5rem;
  width: 18rem;
  height: 18rem;
}

.form-div__heading {
  font-family: 'neue machina';
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

.input:not(:last-of-type) {
  margin-bottom: 4rem;
}

.input:last-of-type {
  margin-bottom: 5rem;
}

.checkbox-div {
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.checkbox-div img {
  width: 2rem;
  height: 2rem;
}

#checkbox {
  align-self: center;
  height: 2rem;
  width: 2rem;
}

.checkbox-text {
  align-self: center;
  margin-bottom: 0;
}

.checkbox-text span {
  color: var(--color-accent);
}

.btn__cta {
  padding: 1.3rem 7rem;
  background-color: var(--color-primary);
  border-radius: 0.8rem;
  font-family: 'neue machina';
  color: #fff;
  font-weight: 800;
  font-size: 2rem;
}

@media screen and (max-width: 968.99px) {
  .heading {
    margin-top: 0;
    text-align: center;
  }
}
</style>
