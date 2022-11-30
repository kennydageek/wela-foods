<template>
  <div class="footer-flex">
    <div class="footer-contact-wrapper" v-for="(item, i) in items" :key="i">
      <img :src="item.src" alt="" />
      <div class="details">
        <p class="details__heading">{{ item.heading }}</p>
        <p class="details__contact">{{ item.contact }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/icons/phone.svg'),
          heading: 'Have a question?',
          contact: '3104372766',
        },
        {
          src: require('@/assets/images/icons/mail.svg'),
          heading: 'Contact us at',
          contact: 'wela@outlook.com',
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-flex {
  display: flex;
  /* justify-content: space-between; */
}

.footer-contact-wrapper {
  display: flex;
}

.footer-contact-wrapper:not(:first-of-type) {
  margin-left: 4rem;
}

img {
  align-self: center;
}

.details {
  align-self: center;
  margin-left: 1rem;
}

.details__heading {
  color: #9a9ea6;
  margin-bottom: 0;
  font-size: 1.2rem;
}

.details__contact {
  color: var(--color-primary);
  font-size: 1.6rem;
  margin-bottom: 0;
  font-weight: 600;
}
</style>
