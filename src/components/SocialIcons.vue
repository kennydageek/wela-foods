<template>
  <v-row class="social-row">
    <v-col
      cols="3"
      class="social-wrapper"
      v-for="(social, i) in socials"
      :key="i"
    >
      <div class="icon-title">
        <img class="social__icon" :src="social.iconUrl" alt="" />
        <p class="social__name">{{ social.social }}</p>
      </div>
      <img
        class="rarr d-none d-md-flex"
        src="@/assets/images/icons/rarr.svg"
        alt=""
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          iconUrl: require('@/assets/images/icons/twitter.svg'),
          social: 'Twitter',
        },
        {
          iconUrl: require('@/assets/images/icons/YoutubeBig.svg'),
          social: 'Youtube',
        },
        {
          iconUrl: require('@/assets/images/icons/instagram.svg'),
          social: 'Instagram',
        },
      ],
    };
  },
};
</script>

<style scoped>
.social-row {
  justify-content: space-between;
  gap: 3rem;
}

.social-wrapper {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

.icon-title {
  display: flex;
  align-self: center;
}

.social__icon,
.social__name,
.rarr {
  align-self: center;
}

.social__icon {
  /* width: 2.4rem; */
  height: 2.4rem;
}

.social__name {
  font-weight: 600;
  font-size: 2rem;
  line-height: 0.3rem;
  margin-bottom: 0;
  margin-top: 0.7rem;
  margin-left: 1rem;
  align-self: center;
}

@media screen and (max-width: 969.99px) {
  .social-row {
    justify-content: flex-start;
  }
}
</style>
