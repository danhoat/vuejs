<template>
  <form @submit.prevent="handleSubmit">
    <label>
      First Name:
      <input type="text" v-model="formData.firstName" />
    </label>
    <label>
      Last Name:
      <input type="text" v-model="formData.lastName" />
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, defineProps, reactive } from 'vue';

interface FormData {
  firstName: string;
  lastName: string;
}

export default defineComponent({
  name: 'CustomForm',
  props: defineProps({
    formData: {
      type: Object as () => FormData,
      required: true
    }
  }),
  setup(props) {
    // Define reactive state for form data
    const formData = reactive(props.formData);

    // Define a function to handle form submissions
    const handleSubmit = () => {
      // Perform form validation logic here
      if (formData.firstName.length === 0 || formData.lastName.length === 0) {
        alert('Please enter both first and last name');
        return;
      }

      // Perform form submission logic here
      alert(`Form submitted with data: ${JSON.stringify(formData)}`);
    };

    // Return the component's properties and methods
    return {
      formData,
      handleSubmit
    };
  }
});
</script>