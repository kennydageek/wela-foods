<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" :id="id" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  color: #475467;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: 800;
}

input {
  width: 100%;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 82, 255, 0.05);
  border-radius: 8px;
  padding: 1.6rem 2.4rem;
}

input::placeholder {
  color: #475467;
  font-size: 1.8rem;
  font-weight: 400;
}

input:active,
input:focus {
  outline: 0;
}
</style>
