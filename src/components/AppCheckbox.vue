<script setup lang="ts">
import {
	Events,
	InputHTMLAttributes,
	computed,
} from 'vue';

import AppIcon from '@/components/AppIcon.vue';

interface Props
	extends /* @vue-ignore */ InputHTMLAttributes {
	value: string;
	name: string;
	modelValue?: boolean | string[];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(
	defineProps<Props>(),
	{}
);

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		val: boolean | string[]
	): void;
}>();

const checked = computed(() => {
	if (Array.isArray(props.modelValue)) {
		return props.modelValue.includes(props.value);
	}
	return props.modelValue;
});

const onChange = (e: Events['onChange']) => {
	if (Array.isArray(props.modelValue)) {
		const indexOfValue = props.modelValue.indexOf(
			props.value
		);
		if (indexOfValue !== -1) {
			// remove value
			emit('update:modelValue', [
				...props.modelValue.filter(
					(x) => x !== props.value
				),
			]);
		} else {
			// add value
			emit('update:modelValue', [
				...props.modelValue,
				props.value,
			]);
		}
	} else {
		emit(
			'update:modelValue',
			(e.target as HTMLInputElement).checked
		);
	}
};
</script>
<template>
	<span
		class="inline-flex items-center justify-center relative bg-transparent outline-none border-none m-0 cursor-pointer select-none align-middle appearance-none no-underline rounded-full"
	>
		<input
			v-bind="$attrs"
			class="absolute opacity-0 w-full h-full inset-0 m-0 p-0 z-[1]"
			type="checkbox"
			:checked="checked"
			@change="onChange"
		/>

		<div
			v-if="checked"
			class="w-4 h-4 rounded-sm text-white bg-purple inline-flex items-center justify-center"
		>
			<AppIcon
				:aria-hidden="checked"
				icon="check"
				width="10"
				height="8"
			/>
		</div>
		<div
			v-else
			class="w-4 h-4 rounded-sm ring-1 ring-grey-100/25 bg-white dark:bg-black-300"
		></div>

		<span
			class="overflow-hidden pointer-events-none absolute z-0 inset-0 rounded-full"
		></span>
	</span>
</template>
