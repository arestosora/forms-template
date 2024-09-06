<template>
    <div class="text-area-field">
      <label>{{ label }}</label>
      <Textarea class="input-field" v-model="modelValue" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Textarea from 'primevue/textarea';
  
  export default defineComponent({
    components: {
      Textarea,
    },
    props: {
      label: String,
      modelValue: String,
    },
    emits: ['update:modelValue'],
  });
  </script>
  
  <style scoped>
  .text-area-field {
    margin-bottom: 16px;
  }
  
  .input-field {
    width: 100%;
    min-height: 100px;
  }
  </style>
  