<script setup lang="ts">
import { ref } from 'vue';

// import AppSelectDropDown from '@/components/AppSelectDropDown.vue';
import AppSwitch from '@/components/AppSwitch.vue';
import AppModal from '@/components/AppModal.vue';


const rf = ref(false);
</script>
<template>
  <h1>App</h1>
  <div class="w-80 m-auto pt-40">
    <AppSwitch name="sign" v-model="rf" />
    <AppModal :show="rf" @hide="() => rf = false">
      <div class="bg-white rounded-md p-10">
        hello
      </div>
    </AppModal>
    <!-- <app-select-drop-down 
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
    /> -->
  </div>
</template>