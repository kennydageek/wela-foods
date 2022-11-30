<template>
  <div class="footer-bottom-wrapper">
    <hr />
    <div class="link-wrapper">
      <div class="links" v-for="(link, i) in links" :key="i">
        <a :href="link.url">{{ link.text }}</a>
      </div>
    </div>
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
  min-height: 30rem;
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
</style>
