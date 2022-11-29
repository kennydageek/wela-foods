<template>
  <div>
    <header class="header-comp">
      <header-comp />
    </header>
    <section class="brands">
      <brand-comp class="brand-comp" />
    </section>

    <section class="section-service">
      <section-service-comp
        :bgColor="bgColor[0]"
        :image="serviceImages[0]"
        :waves="waves[0]"
      >
        <template #heading>
          <h1 class="heading mt-16">
            Why use <span :class="txtColor[0]">Wela</span> food services ??
          </h1>
        </template>

        <template #service-box>
          <div v-for="(service, i) in services" :key="i">
            <service-box-comp :services="services[i]" class="mb-12" />
          </div>
        </template>

        <template #waves>
          <img src="../assets/images/photos/wavy-1.svg" alt="" class="waves" />
        </template>
      </section-service-comp>
    </section>

    <section class="section-service">
      <section-service-comp :bgColor="bgColor[1]" :image="serviceImages[1]">
        <template #heading>
          <h1 class="heading mt-16">
            <span :class="txtColor[1]">Wela</span> foods has you covered
          </h1>
        </template>

        <template #service-box>
          <div v-for="(plan, i) in plans" :key="i">
            <service-box-comp :services="plans[i]" class="mb-12" />
          </div>
        </template>

        <template #waves>
          <img
            src="../assets/images/photos/wavy-2.svg"
            class="bottom-waves"
            alt=""
          />
        </template>
      </section-service-comp>
    </section>

    <section class="section-faq">
      <faq-comp />
    </section>

    <section class="section-contact">
      <contact-comp />
    </section>

    <section class="section-register">
      <RegisterComp />
    </section>

    <section class="section-form">
      <form-comp />
    </section>

    <section class="section-mobile">
      <mobile-comp />
    </section>

    <section class="section-metrics">
      <metrics-comp />
    </section>

    <section class="section-footer">
      <footer-comp />
    </section>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp';
import BrandComp from '@/components/BrandComp';
import SectionServiceComp from '@/components/SectionServiceComp';
import ServiceBoxComp from '@/components/ServiceBoxComp';
import FaqComp from '@/components/FaqComp';
import ContactComp from '@/components/ContactComp.vue';
import RegisterComp from '@/components/RegisterComp.vue';
import FormComp from '@/components/FormComp';
import MobileComp from '@/components/MobileComp';
import MetricsComp from '@/components/MetricsComp';
import FooterComp from '@/components/FooterComp';
export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    BrandComp,
    SectionServiceComp,
    ServiceBoxComp,
    FaqComp,
    ContactComp,
    RegisterComp,
    FormComp,
    MobileComp,
    MetricsComp,
    FooterComp,
  },

  data() {
    return {
      waves: [
        require('@/assets/images/photos/wavy-1.svg'),
        require('@/assets/images/photos/wavy-2.svg'),
      ],
      plans: [
        {
          img: require('@/assets/images/icons/Play.svg'),
          imgBg: 'greybg',
          heading: 'Seamless tutorial videos ',
          content:
            'We offer different video tutorials on youtube to teach people how to cook',
        },

        {
          img: require('@/assets/images/icons/Supergroup.svg'),
          imgBg: 'greenbg',
          heading: 'Affordable family plans',
          content:
            'We offer affordable plans that accomodates your entire household',
        },
      ],

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
      bgColor: ['bgColor', 'bgColor-2'],
      txtColor: ['primarytxt', 'secondarytxt'],
      serviceImages: [
        require('@/assets/images/photos/dispatch-rider.png'),
        require('@/assets/images/photos/family-plan.png'),
      ],
    };
  },
};
</script>

<style scoped>
.primarytxt {
  color: var(--color-accent);
}

.secondarytxt {
  color: var(--color-primary);
}

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

.section-faq {
  margin-top: 20rem;
  padding: 0 13rem;
}

.section-contact {
  padding: 0 13rem;
  margin-top: 18rem;
}

.section-register {
  padding: 0 13rem;
  margin-top: 11rem;
}

.section-form {
  margin-top: 15rem;
  padding: 0 13rem;
}

.section-mobile {
  margin-top: 30rem;
  padding: 0 0 0 13rem;
}

.section-metrics {
  padding: 0 13rem;
  margin-top: 25rem;
}

.section-footer {
  margin-top: 18rem;
  padding: 0 0 0 13rem;
  /* background-color: #fff; */
}
</style>
