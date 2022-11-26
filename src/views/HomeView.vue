<template>
  <div>
    <header class="header-comp">
      <header-comp />
    </header>
    <section class="brands">
      <brand-comp class="brand-comp" />
    </section>

    <section class="section-service">
      <v-row class="service-row">
        <v-col cols="5" class="service-info">
          <h1 class="heading mt-16">
            Why use <span>Wela</span> food services ??
          </h1>
          <div v-for="(service, i) in services" :key="i">
            <service-box-comp :services="services[i]" class="mb-12" />
            <!-- <service-box-comp /> -->
          </div>
        </v-col>
        <v-col cols="7" class="service-image">
          <div class="service-image__img">
            <img src="../assets/images/photos/dispatch-rider.png" alt="" />
          </div>

          <img src="../assets/images/photos/wavy-1.svg" alt="" />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp';
import BrandComp from '@/components/BrandComp';
import ServiceBoxComp from '@/components/ServiceBoxComp';
export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    BrandComp,
    ServiceBoxComp,
  },

  data() {
    return {
      services: [
        {
          img: require('@/assets/images/icons/charge.svg'),
          imgBg: 'yellowbg',
          heading: 'Fast Delivery Process',
          content:
            'Have ingredients delivered to you within minutes from our store ranging from African to Continental cuisines ',
        },

        {
          img: require('@/assets/images/icons/heart.svg'),
          imgBg: 'bluebg',
          heading: 'Clean & Healthy Foods',
          content: 'Wela foods only deals with clean & germ free food products',
        },
      ],
    };
  },
};
</script>

<style scoped>
.header-comp {
  padding: 0 13rem;
}

.brands {
  padding: 0 13rem;
}

.brand-comp {
  margin-top: 13rem;
  margin-bottom: 10rem;
}

.section-service {
  position: relative;
  padding: 0 0 0 13rem;
}

.service-row {
  justify-content: space-between;
}

.service-info {
  margin: 0;
  padding: 0;
}

.service-image {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: var(--color-accent-2);
}

.service-image img {
  width: 20.47rem;
  height: 18.62rem;
  position: absolute;
  right: -1.5rem;
  top: -1rem;
}

.service-image div {
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60rem;
  width: 45rem;
}

.service-image__img img {
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.heading {
  width: 75%;
  font-size: 7.5rem;
  font-weight: 800;
  font-family: var(--font-heading);
  line-height: 9rem;
  margin-top: 4rem;
}

.heading span {
  color: var(--color-accent);
}
</style>
