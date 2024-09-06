<template>
  <div class="dropdown-field">
    <label>{{ label }}</label>
    <Dropdown class="input-field" :options="options" v-model="localValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Dropdown from 'primevue/dropdown';

export default defineComponent({
  components: {
    Dropdown,
  },
  props: {
    label: String,
    options: Array as () => (string | number)[],
    modelValue: [String, Number],
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
.dropdown-field {
  margin-bottom: 16px;
}
</style>
