<template>
  <div class="btn-wrapper">
    <button
      ref="baseButton"
      v-on="$listeners"
      :class="{
        'btn-lg': large,
        'btn-sm': small,
        'btn-primary': primary,
        'btn-secondary': secondary,
        'btn-tertiary': tertiary,
      }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    text: {
      type: String,
      required: true,
    },
    large: Boolean,
    small: Boolean,
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
  },
};
</script>

<style scoped>
button {
  border-radius: 36px;
  outline: none;
  font-weight: 800;
  font-size: 10px;
  /* background: red; */
  padding: 15px 20px;
}

.btn {
}

.btn-sm {
  font-size: 11px;
  font-weight: 600;
  min-width: 100px;
  padding: 20px 34px;
}

.btn-lg {
  font-size: 16px;
  font-weight: 800px;
  line-height: 15px;
  min-width: 170px;
  padding: 25px 34px;
}

.btn-primary {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  color: #fff;
}

.btn-secondary {
  border-color: #ffdaae;
  background-color: #ffdaae;
  color: var(--color-accent);
  font-size: 1.8rem !important;
}

.btn-tertiary {
  background-color: #fff;
  color: var(--color-primary);
  font-size: 1.8rem !important;
}
</style>
