<template>
  <div>
    <h2>Dynamic Form</h2>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index">
        <!-- Text Input Field -->
        <TextInputField v-if="field.type === 'TextInput'" :label="field.question" v-model="field.model" />

        <!-- Dropdown Field -->
        <DropdownField v-if="field.type === 'DropDown'" :label="field.question" :options="field.choices" v-model="field.model" />

        <!-- Calendar Field -->
        <CalendarField v-if="field.type === 'Calendar'" :label="field.question" v-model="field.model" />

        <!-- Checkbox Field -->
        <CheckboxField v-if="field.type === 'Checkbox'" :label="field.question" :options="field.choices" v-model="field.model" />

        <!-- Radio Button Field -->
        <RadioButtonField v-if="field.type === 'RadioButton'" :label="field.question" :options="field.choices" v-model="field.model" />

        <!-- Text Area Field -->
        <TextAreaField v-if="field.type === 'TextArea'" :label="field.question" v-model="field.model" />
      </div>
      <Button type="submit" label="Submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInputField from '@/components/forms/TextInputField.vue';
import DropdownField from '@/components/forms/DropdownField.vue';
import CalendarField from '@/components/forms/CalendarField.vue';
import CheckboxField from '@/components/forms/CheckboxField.vue';
import RadioButtonField from '@/components/forms/RadioButtonField.vue';
import TextAreaField from '@/components/forms/TextAreaField.vue'; 
import Button from 'primevue/button';
import { formFields } from '@/common/fields';
import type { Field } from '@/types/field';

export default defineComponent({
  components: {
    TextInputField,
    DropdownField,
    CalendarField,
    CheckboxField,
    RadioButtonField,
    TextAreaField,
    Button,
  },
  data() {
    return {
      fields: formFields as Field[],
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form data:", this.fields);
    },
  },
});
</script>

<style>
form {
  max-width: 600px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}


</style>
