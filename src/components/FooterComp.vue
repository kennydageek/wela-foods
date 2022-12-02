<template>
  <div class="footer-wrapper">
    <h1 class="footer__heading">A New Diet Model</h1>
    <social-icon class="social-icon" />

    <v-row class="footer-top-row">
      <v-col cols="12" sm="6" class="first-col mt-sm-10">
        <p class="first-col__heading">Wela</p>
        <p class="first-col__paragraph">
          We are a global food organization offering food prduce and tutorials
        </p>

        <footer-contact />
      </v-col>
      <v-col cols="12" sm="5" class="second-col mt-10">
        <p class="second-col__heading">Newsletter</p>
        <p class="second-col__paragraph">
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </p>

        <div class="input-wrapper">
          <img src="../assets/images/icons/sms.svg" alt="" />
          <input type="text" name="" id="" placeholder="Enter your email" />
          <button class="footer-btn">Submit</button>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import socialIcon from './SocialIcons.vue';
import FooterContact from './FooterContact.vue';
export default {
  components: {
    socialIcon,
    FooterContact,
  },
};
</script>

<style scoped>
.footer-wrapper {
  position: relative;
  padding: 7rem 9rem 2rem;
  background-color: #fff;
}

.footer__heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 4rem;
  margin-bottom: 10rem;
}

.social-icon {
  margin-bottom: 10rem;
}

.footer-top-row {
  margin-bottom: 3rem;
}

.first-col {
  /* background: blue; */
}

.first-col__heading {
  font-family: 'neue machina';
  color: var(--color-accent);
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
}

.first-col__paragraph {
  color: #9a9ea6;
  font-size: 1.4rem;
  margin-bottom: 2.4rem;
}

.second-col {
  /* background: purple; */
}

.second-col__heading {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0;
}

.second-col__paragraph {
  font-size: 1.8rem;
  color: #9a9ea6;
  margin-bottom: 3rem;
}

.input-wrapper {
  display: flex;
  /* justify-content: space-between; */
  background-color: #f0f1f2;
  border-radius: 3rem;
  min-height: 4.8rem;
  padding: 1rem 1.2rem;
  /* padding: 1.2rem 0.6rem 1.2rem 2.4rem; */
  gap: 0.8rem;
}

.input-wrapper img {
  align-self: center;
  width: 1.6rem;
  height: 1.6rem;
}

.input-wrapper input {
  width: 100%;
  height: 100%;
  padding-top: 1.8rem;
  /* align-self: center; */
}

.input-wrapper input:focus {
  border: none;
  outline: none;
}

.input-wrapper input::placeholder {
  color: #9a9ea6;
  font-size: 1.5rem;
  /* ma-top: 2rem; */
}

.footer-btn {
  padding: 1.2rem 3rem;
  border-radius: 3rem;
  color: #fff;
  /* margin: 1.2rem 0; */
  background-color: var(--color-primary);
}

@media screen and (max-width: 968.99px) {
  .footer-wrapper {
    padding: 7rem 6rem 2rem;
  }
}

@media screen and (max-width: 599.99px) {
  .footer-wrapper {
    padding: 7rem 1rem 2rem;
  }
}
</style>
