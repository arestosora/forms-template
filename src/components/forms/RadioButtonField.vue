<template>
  <div class="radio-button-field">
    <label>{{ label }}</label>
    <div class="radio-group">
      <div v-for="(choice, index) in options" :key="index" class="radio-item">
        <RadioButton v-model="localValue" :value="choice" />
        <label class="radio-label">{{ choice }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import RadioButton from 'primevue/radiobutton';

export default defineComponent({
  components: {
    RadioButton,
  },
  props: {
    label: String,
    options: Array,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const localValue = ref(props.modelValue);

    watch(localValue, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return {
      localValue,
    };
  },
});
</script>

  
  <style scoped>
  .radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .radio-item {
    display: flex;
    align-items: center;
  }
  
  .radio-label {
    margin-left: 8px;
    margin-top: 6px;
  }
  </style>
  