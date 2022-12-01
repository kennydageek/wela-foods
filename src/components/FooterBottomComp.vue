<template>
  <div class="footer-bottom-wrapper">
    <hr />
    <div class="link-wrapper">
      <div class="links" v-for="(link, i) in links" :key="i">
        <a :href="link.url">{{ link.text }}</a>
      </div>
    </div>

    <v-row class="footer-copy">
      <v-col class="footer-copy__first-col" cols="12" sm="6">
        <div class="img-div">
          <img src="../assets/images/icons/facebook.svg" alt="" />
          <img src="../assets/images/icons/youtube.svg" alt="" />
          <img src="../assets/images/icons/whatsapp.svg" alt="" />
        </div>
      </v-col>
      <v-col class="footer-copy__second-col" cols="12" sm="6"
        >© 2000-2021, All Rights Reserved</v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'About us',
          url: '#',
        },
        {
          text: 'Job',
          url: '#',
        },
        {
          text: 'Blog',
          url: '#',
        },
        {
          text: 'Press',
          url: '#',
        },
        {
          text: 'FAQ',
          url: '#',
        },
        {
          text: 'Careers',
          url: '#',
        },
        {
          text: 'Contact',
          url: '#',
        },
        {
          text: 'Privacy policy',
          url: '#',
        },
        {
          text: 'Sitemap',
          url: '#',
        },
        {
          text: 'Terms of use',
          url: '#',
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-bottom-wrapper {
  padding: 0 13rem 0 0;
  background-color: #fff !important;
}
hr {
  background-color: #dfdfe0;
  border: 0.3px solid #dfdfe0;
  height: 0.3px;
}

.link-wrapper {
  padding: 3rem 0 0 9rem;
  display: flex;
  gap: 6rem;
}

.links {
}

.links a {
  color: #9a9ea6;
  font-size: 1.6rem;
}

.footer-copy {
  padding: 0 13rem 0 9rem;
  margin-top: 3rem;
  margin-bottom: -1.99rem;
}

.footer-copy__first-col {
  /* background: red; */
}

.img-div {
  display: flex;
  gap: 3rem;
}

.footer-copy__second-col {
  font-size: 1.4rem;
  color: #9a9ea6;
  align-self: center;
  text-align: right;
}

@media screen and (max-width: 968.99px) {
  .link-wrapper {
    flex-wrap: wrap;
    /* padding: 0 1rem; */
    padding-right: 2rem;
  }
}
@media screen and (max-width: 599.99px) {
  .footer-bottom-wrapper {
    padding: 0 0 0;
  }

  .img-div {
    justify-content: center;
  }
  .footer-copy__second-col {
    text-align: center;
  }
}
</style>
