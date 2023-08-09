<script setup lang="ts">
import {
	ref,
	computed,
	toRefs,
	VNodeRef,
	onMounted,
	onBeforeUnmount,
} from 'vue';
import {
	useFloating,
	flip,
} from '@floating-ui/vue';

interface Option {
	id: number;
	text: string;
	value: string;
}

type Props = {
	modelValue: string;
	options: Option[];
};

const props = defineProps<Props>();

const { modelValue, options } = toRefs(props);

const isOpen = ref(false);

const emit = defineEmits();

const dropdownContainer = ref<
	VNodeRef | undefined
>(undefined);

const floating = ref(null);

const { floatingStyles } = useFloating(
	dropdownContainer,
	floating,
	{
		middleware: [flip()],
	}
);

const selectedOption = computed(() => {
	const selectedOption = options.value.find(
		(option) => option.value === modelValue.value
	);
	return selectedOption;
});

const onSelect = (option: Option) => {
	isOpen.value = false;
	emit('update:modelValue', option.value);
};

const onToggle = () => {
	isOpen.value = !isOpen.value;
};

const onOpen = () => {
	isOpen.value = true;
};

const onClose = () => {
	isOpen.value = false;
};

const handleRef: VNodeRef = (node) => {
	dropdownContainer.value = node;
};

const buttonId = `dropdown-button-${Math.random()
	.toString(36)
	.substr(2, 9)}`;

const handleOutsideClick = (event: MouseEvent) => {
  if (
    isOpen.value &&
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target as Node)
  ) {
    onClose();
  }
};

onMounted(() => {
	document.addEventListener(
		'click',
		handleOutsideClick
	);
});

onBeforeUnmount(() => {
	document.removeEventListener(
		'click',
		handleOutsideClick
	);
});
</script>
<template>
	<div class="relative">
		<slot
			name="trigger"
			:toggleRef="handleRef"
			:onToggle="onToggle"
			:onOpen="onOpen"
			:onClose="onClose"
			:id="buttonId"
		>
			<button
				@click="onToggle"
				class="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
				ref="dropdownContainer"
				:aria-expanded="isOpen"
				:id="buttonId"
			>
				<span>{{
					selectedOption?.text ||
					'Select an option'
				}}</span>
				<svg
					class="fill-current h-4 w-4 ml-2"
					xmlns="http://www.w3.org/2000/svg"
					:class="{ 'rotate-180': isOpen }"
					viewBox="0 0 20 20"
				>
					<path
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					/>
				</svg>
			</button>
		</slot>
		<teleport to="body">
			<div
				v-if="isOpen"
				class="absolute z-[9999] min-w-[250px] bg-white dark:bg-black-200 rounded-lg p-4 flex flex-col gap-2 shadow-[0_10px_20px_0_rgba(54,78,126,0.25)]"
				ref="floating"
				:style="floatingStyles"
				:aria-labelledby="buttonId"
				data-dropdown="dropdown"
			>
				<slot
					:is-open="isOpen"
					:options="options"
					:on-select="onSelect"
					:selected-option-text="
						selectedOption?.text
					"
					:selected-option="selectedOption"
				>
					<template
						v-for="option in options"
						:key="option.id"
					>
						<button
							@click="onSelect(option)"
							class="block w-full text-left text-grey-100 text-tiny font-medium"
						>
							{{ option.text }}
						</button>
					</template>
				</slot>
			</div>
		</teleport>
	</div>
</template>
