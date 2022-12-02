<template>
  <div class="contact-wrapper">
    <h1 class="heading">Didn't find answers? Contact Support</h1>
    <contact-box :contact="contacts" />
  </div>
</template>

<script>
import ContactBox from './ContactBox.vue';
export default {
  components: {
    ContactBox,
  },
  data() {
    return {
      contacts: [
        {
          name: 'Onyema',
          email: 'onyema@brainfriendsupport.com',
          phone: '0812 407 6934',
          image: require('@/assets/images/photos/onyema.png'),
        },

        {
          name: 'Dino',
          email: 'dino@brainfriendsupport.com',
          phone: '0812 407 6934',
          image: require('@/assets/images/photos/dino.png'),
        },

        {
          name: 'Philip',
          email: 'philip@brainfriendsupport.com',
          phone: '0812 407 6934',
          image: require('@/assets/images/photos/philip.png'),
        },

        {
          name: 'Adefikayo',
          email: 'adefikayo@brainfriendsupport.com',
          phone: '0812 407 6934',
          image: require('@/assets/images/photos/adefikayo.png'),
        },
        {
          name: 'Vera',
          email: 'vera@brainfriendsupport.com',
          phone: '0812 407 6934',
          image: require('@/assets/images/photos/vera.png'),
        },
        {
          name: 'Lizzy',
          email: 'lizzy@brainfriendsupport.com',
          phone: '0812 407 6934',
          image: require('@/assets/images/photos/lizzy.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact-wrapper {
  background-color: #fff;
  padding: 5rem 5rem 0 5rem;
  border-radius: 4rem;
}

.heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
  color: #000;
  margin-bottom: 8rem;
}

@media screen and (max-width: 968.99px) {
  .contact-wrapper {
    padding: 5rem 3rem 0 3rem;
  }
}
</style>
