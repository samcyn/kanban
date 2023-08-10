<script setup lang="ts">
import { computed, ref } from 'vue';

import AppIcon from '@/components/shared/AppIcon.vue';
import AppDropdown from '@/components/shared/AppDropdown/index.vue';

interface Props {
	name?: string;
	modelValue: string;
	placeholder?: string;
	label?: string;
	options?: {
		id: string | number;
		text: string | number;
		value: string | number;
	}[];
	dropdownClass?: string
}

const selectedOptionText = ref('');

const props = withDefaults(defineProps<Props>(), {
	placeholder: '',
	dropdownClass: 'min-w-[250px]',
	options: () => [],
});

const emit = defineEmits<{
	(event: 'update:modelValue', val: string): void;
}>();

const computedLabel = computed(() => {
	if (!selectedOptionText.value) {
		const option = props.options.find(
			(record) =>
				record.value === props.modelValue
		);
		return option
			? option.text
			: props.modelValue;
	}
	return selectedOptionText.value;
});

// update model value on selection of option
const onChange = (val: string, text: string) => {
	emit('update:modelValue', val);
	selectedOptionText.value = text;
};
</script>
<template>
	<div
		class="dropdown is-active flex flex-col gap-2 relative align-middle group"
		data-component="dropdown"
	>
		<p
			v-if="label"
			class="label text-grey-100 dark:text-white"
		>
			{{ label }}
		</p>

		<app-dropdown
			:model-value="modelValue"
			:options="options"
			:dropdown-class="dropdownClass"
			has-full-width
			@update:model-value="onChange"
		>
			<template
				#trigger="{ toggleRef, onOpen, isOpen, ...rest }"
			>
				<button
					class="dropdown__btn bg-transparent 
						ring-1 text-black-100 dark:text-white text-tiny 
						font-medium cursor-pointer pt-2 px-4 flex 
						justify-between items-center whitespace-nowrap w-full"
					:class="
						isOpen
							? 'ring-purple'
							: 'ring-grey-100/25 group-hover:ring-purple'
					"
					:aria-controls="`${name}_id`"
					:ref="toggleRef"
					data-component="dropdown"
					type="button"
					v-bind="rest"
					@click="onOpen"
				>
					<span v-if="computedLabel">{{
						computedLabel
					}}</span>
					<span
						class="font-medium text-tiny text-black-100 dark:text-white opacity-25"
						v-else
						>{{ placeholder }}</span
					>
					<!-- app icon -->
					<app-icon
						class-name="text-purple"
						width="10"
						height="7"
						:icon="
							isOpen
								? 'cheveron-down'
								: 'cheveron-up'
						"
					/>
				</button>
			</template>
		</app-dropdown>

	</div>
</template>
<style scoped lang="css">
.label {
	font-size: 12px;
	font-weight: 700;
	line-height: 15px;
}
.dropdown__btn {
	padding-bottom: 9px;
}
</style>
