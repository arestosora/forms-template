<template>
  <div class="calendar-field">
    <label>{{ label }}</label>
    <Calendar class="input-field" v-model="localValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Calendar from 'primevue/calendar';

export default defineComponent({
  components: {
    Calendar,
  },
  props: {
    label: String,
    modelValue: {
      type: [Date, String],
      required: true,
    },
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
.calendar-field {
  margin-bottom: 16px;
}
</style>
