<script setup lang="ts">
import { ref } from 'vue';
import AppDropdown from '@/components/shared/AppDropdown/index.vue';
import AppSelectDropDown from '@/components/shared/AppSelectDropDown/index.vue'
import AppTable from '@/components/shared/AppTable/index.vue';

const selectedOptionValue = ref('option1');
const options = [
	{
		id: 1,
		text: 'Option 1',
		value: 'option1',
	},
	{
		id: 2,
		text: 'Option 2',
		value: 'option2',
	},
	{
		id: 3,
		text: 'Option 3',
		value: 'option3',
	},
	{
		id: 4,
		text: 'Option 4',
		value: 'option4',
	},
	{
		id: 5,
		text: 'Option 6',
		value: 'option6',
	},
];
</script>
<template>
	<app-dropdown
		v-model="selectedOptionValue"
		:options="options"
	>
		<input
			type="text"
			aria-label="name"
			class="border-black-200"
			:placeholder="selectedOptionValue"
		/>
	</app-dropdown>
	<app-select-drop-down v-model:model-value="selectedOptionValue" :options="options" />
	<app-table />
</template>
