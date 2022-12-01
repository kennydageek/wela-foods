<template>
  <v-row class="root">
    <v-col
      cols="4"
      sm="6"
      class="contactbox-wrapper"
      v-for="(item, i) in contact"
      :key="i"
    >
      <img :src="item.image" />
      <div class="content">
        <p class="name">{{ item.name }}</p>
        <p class="email">{{ item.email }}</p>
        <div class="phone">{{ item.phone }}</div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    contact: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.contactbox-wrapper {
  display: flex;
  padding: 1rem;
  background-color: #fff;
  border-radius: 6.3rem;
  width: 35rem;
  transition: background-color 0.5s ease-in-out;
  margin-bottom: 4rem;
}

.contactbox-wrapper:hover {
  background-color: var(--color-primary);
}

.contactbox-wrapper:hover .content {
  color: #fff;
  /* opacity: 0.67; */
}

.contact-wrapper img {
  align-self: center;
  width: 8rem;
  height: 8rem;
}

.content {
  align-self: center;
  margin-left: 2rem;
}

.name {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.7rem;
}

.email {
  font-size: 1.8rem;
  margin-bottom: 0.1rem;
  color: rgba(0, 0, 0, 0.67);
}

.phone {
  font-size: 1.6rem;
  font-weight: 600;
}

.contactbox-wrapper:hover .content .email {
  color: #fff;
}
</style>
