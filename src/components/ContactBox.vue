<template>
  <div class="contactbox-wrapper">
    <img src="../assets/images/photos/onyema.png" alt="" />
    <div class="content">
      <p class="name">Onyema</p>
      <p class="email">onyema@brainfriendsupport.com</p>
      <div class="phone">0812 407 6934</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contactbox-wrapper {
  display: flex;
  padding: 1rem;
  background-color: #fff;
  border-radius: 6.3rem;
  width: 40rem;
  transition: background-color 0.5s ease-in-out;
}

.contactbox-wrapper:hover {
  background-color: var(--color-primary);
}

.contactbox-wrapper:hover .content {
  color: #fff;
  /* opacity: 0.67; */
}

.contact-wrapper img {
  width: 8rem;
  height: 8rem;
}

.content {
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
