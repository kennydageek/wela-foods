<template>
  <div>
    <header-comp />
    <brand-comp class="brand-comp" />
    <service-box-comp />
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
};
</script>

<style scoped>
.brand-comp {
  margin-top: 13rem;
  margin-bottom: 10rem;
}
</style>
