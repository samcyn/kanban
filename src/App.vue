<script setup lang="ts">
import AppSelectDropDown from '@/components/AppSelectDropDown.vue';
import { ref } from 'vue';

const rf = ref('');
</script>
<template>
  <h1>App</h1>
  <div class="w-80 m-auto">
    <app-select-drop-down 
      name="select"
      v-model="rf"
      placeholder="enter a number"
      :options="[
        {
          id: 1,
          value: 'one',
          label: 'One'
        },
        {
          id: 2,
          value: 'two',
          label: 'Two'
        },
        {
          id: 3,
          value: 'three',
          label: 'Three'
        }
      ]"
    />
  </div>
</template>