<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface Props {
	name?: string;
	modelValue?: string;
	placeholder?: string;
	options?: {
		id: string | number;
		label: string;
		value: string;
	}[];
}

import AppIcon from '@/components/AppIcon.vue';

const isActive = ref(false);
const currentLabel = ref('');

const props = withDefaults(defineProps<Props>(), {
	placeholder: '',
	options: () => [],
});

const emit = defineEmits<{
	(event: 'update:modelValue', val: string): void;
}>();

const hasOptions = computed(
	() => props.options.length > 0
);

const computedLabel = computed(() => {
	if (!currentLabel.value) {
		const option = props.options.find(
			(record) =>
				record.value === props.modelValue
		);
		return option
			? option.label
			: props.modelValue;
	}
	return currentLabel.value;
});

const onToggle = () => {
	isActive.value = !isActive.value;
};

// update model value on selection of option
const onChange = (val: string, label: string) => {
	emit('update:modelValue', val);
	currentLabel.value = label;
};

// implements click outside
onMounted(() => {
	document.addEventListener('click', (e) => {
		const _component = (e.target as HTMLElement)
			.dataset.component;
		if (_component !== 'dropdown') {
			onToggle();
		}
	});
});
</script>
<template>
	<div
		class="dropdown is-active flex relative align-middle group"
		data-component="dropdown"
	>
		<div class="w-full" data-component="dropdown">
			<button
				class="bg-transparent ring-1 text-black-100 dark:text-white text-tiny font-medium cursor-pointer pt-2 pb-[9px] px-4 flex justify-between items-center whitespace-nowrap w-full"
				:class="
					isActive
						? 'ring-purple'
						: 'ring-grey-100/25 group-hover:ring-purple'
				"
				:aria-haspopup="isActive"
				:aria-controls="`${name}_id`"
				data-component="dropdown"
				@click="onToggle"
			>
				<span v-if="computedLabel">{{
					computedLabel
				}}</span>
				<span class="opacity-10" v-else>{{
					placeholder
				}}</span>
				<!-- app icon -->
				<app-icon
					class-name="text-purple"
					width="10"
					height="7"
					:icon="
						isActive
							? 'cheveron-down'
							: 'cheveron-up'
					"
				/>
			</button>
		</div>

		<div
			v-if="hasOptions"
			class="dropdown-menu w-full absolute left-0 right-0 z-20"
			:class="isActive ? 'block' : 'hidden'"
			:id="`${name}_id`"
			role="menu"
			data-component="dropdown"
		>
			<div
				class="bg-white dark:bg-black-200 rounded-lg pt-2 pb-2"
				data-component="dropdown"
			>
				<button
					v-for="option in options"
					:key="option.id"
					class="block text-tiny font-medium py-2 px-4 relative w-full whitespace-nowrap text-left"
					:class="
						modelValue === option.value
							? 'bg-purple text-white'
							: 'text-grey-100 hover:bg-grey-300/50 dark:hover:bg-transparent dark:hover:opacity-70 hover:text-black-400'
					"
					data-component="dropdown"
					@click="
						onChange(option.value, option.label)
					"
				>
					{{ option.label }}
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped lang="css">
.dropdown-menu {
	top: calc(100% + 8px);
}
</style>
