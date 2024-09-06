<template>
    <div class="text-input-field">
      <label>{{ label }}</label>
      <InputText class="input-field" v-model="modelValue" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import InputText from 'primevue/inputtext';
  
  export default defineComponent({
    components: {
      InputText,
    },
    props: {
      label: String,
      modelValue: String,
    },
    emits: ['update:modelValue'],
  });
  </script>
  
  <style scoped>
  .text-input-field {
    margin-bottom: 16px;
  }
  </style>
  