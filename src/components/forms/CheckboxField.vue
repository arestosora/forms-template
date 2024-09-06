<template>
  <div class="checkbox-field">
    <label>{{ label }}</label>
    <div class="checkbox-group">
      <div v-for="(choice, idx) in options" :key="idx" class="checkbox-item">
        <Checkbox v-model="localValue" :value="choice" />
        <label class="checkbox-label">{{ choice }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Checkbox from 'primevue/checkbox';

export default defineComponent({
  components: {
    Checkbox,
  },
  props: {
    label: String,
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const localValue = ref([...props.modelValue || []]);
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
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.checkbox-item {
  display: flex;
  align-items: center;
}

.checkbox-label {
  margin-left: 8px;
  margin-top: 6px;
}
</style>
