<template>
  <div
    class="info-box-wrapper"
    :class="{
      'info-lg': large,
      'info-md': medium,
      'info-sm': small,
    }"
  >
    <img
      :src="url"
      :class="{
        'img-md': large,
        'img-sm': small,
      }"
      alt=""
    />
    <div class="info-text">
      <p
        class="heading"
        :class="{
          'color-sec': secondary,
          'font-lg': large,
        }"
      >
        {{ heading }}
      </p>
      <p
        class="footer"
        :class="{
          display: none,
        }"
      >
        {{ footer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    heading: {
      type: String,
      required: true,
    },
    footer: {
      type: String,
      required: false,
    },

    large: Boolean,
    small: Boolean,
    medium: Boolean,
    secondary: Boolean,
    none: Boolean,
  },
};
</script>

<style scoped>
.info-box-wrapper {
  background-color: #fff;
}

.info-sm {
  display: flex;
  width: 70%;
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(3px);
}

.info-md {
  display: flex;
  width: 100%;
  padding: 1.2rem;
  border-radius: 10px;
}

.img-sm {
  width: 5rem;
  height: 5rem;
  align-self: center;
}

.img-md {
  width: 4.4rem;
  height: 4.4rem;
}

.info-text {
  margin-left: 1.6rem;
  align-self: center;
}

.heading {
  margin-bottom: 0;
  font-weight: 800;
}

.font-lg {
  font-size: 1.8rem;
}

.display {
  display: none;
}

.color-sec {
  color: var(--color-accent);
}

.footer {
  font-size: 1.4rem;
  color: rgba(8, 6, 19, 0.68);
}
</style>
