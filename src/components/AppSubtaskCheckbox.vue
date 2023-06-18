<script setup lang="ts">
import { InputHTMLAttributes, computed } from 'vue';

import AppCheckbox from '@/components/AppCheckbox.vue';

interface Props
	extends /* @vue-ignore */ InputHTMLAttributes {
	label?: string;
	value?: string;
	name?: string;
	modelValue?: boolean|string[];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
	value: '',
	name: ''
});

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		val: boolean|string[]
	): void;
}>();

const checked = computed(() => {
	if(Array.isArray(props.modelValue)) {
		return props.modelValue.includes(props.value);
	}
	return props.modelValue;
});

const onChange = (val: boolean|string[]) => {
	emit('update:modelValue', val);
};
</script>
<template>
	<label class="flex rounded bg-grey-300 dark:bg-black-200 p-3 gap-4 cursor-pointer transition hover:bg-purple/25">
		<app-checkbox
			v-bind="$attrs"
			:value="value"
			:name="name"
			:model-value="modelValue"
			@update:modelValue="onChange"
		/>
		<span 
			v-if="label"
			class="text-xs leading-[15px] text-black-100 dark:text-white font-bold select-none"
			:class="checked ? 'line-through opacity-50' : ''"
			>{{ label }}</span
		>
	</label>
</template>
