<script setup lang="ts">
import { computed, ref } from 'vue';

import AppDropdown from '@/components/shared/AppDropdown/index.vue';
import AppSelectButton from '@/components/shared/AppSelectDropDown/AppSelectButton.vue';

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
	dropdownClass?: string;
}

const selectedOptionText = ref<string | number>(
	''
);

const props = withDefaults(defineProps<Props>(), {
	placeholder: '',
	dropdownClass: 'min-w-[250px]',
	options: () => [],
});

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		val: string | number
	): void;
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
const onChange = (
	val: string | number,
	text: string | number
) => {
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
			will-use-default-slot-props
			@update:model-value="onChange"
		>
			<!-- TODO note this won't be needed once Appdropdown API works as expected -->
			<template #default="{onOpen, show, setRef, ...rest}">
				<app-select-button
					:name="name"
					:label="computedLabel"
					:placeholder="placeholder"
					:visible="show"
					:setRef="setRef"
					@click="onOpen"
					v-bind="rest"
				/>
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
</style>
