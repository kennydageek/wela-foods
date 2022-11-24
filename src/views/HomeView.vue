<template>
  <div>
    <header-comp />
    <brand-comp class="brand-comp" />
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp';
import BrandComp from '@/components/BrandComp';
export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    BrandComp,
  },
};
</script>

<style scoped>
.brand-comp {
  margin-top: 13rem;
  margin-bottom: 10rem;
}
</style>
