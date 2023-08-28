<script setup lang="ts">
import {
	ref,
	computed,
	toRefs,
	VNodeRef,
	onMounted,
	onBeforeUnmount,
	useSlots,
	cloneVNode,
	VNode,
	h,
} from 'vue';
import {
	useFloating,
	flip,
	offset,
} from '@floating-ui/vue';

import useControlled from '@/hooks/useControlled';

interface Option {
	id: string | number;
	text: string | number;
	value: string | number;
}

type Props = {
	modelValue: string;
	options: Option[];
	dropdownClass?: string;
	hasFullWidth?: boolean;
	visible?: boolean;
	willUseDefaultSlotProps?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
	dropdownClass: 'min-w-[250px]',
	hasFullWidth: false,
	visible: undefined,
});

const {
	modelValue,
	options,
	hasFullWidth,
	visible,
} = toRefs(props);

const [show, setShow] = useControlled<boolean>({
	controlled: visible,
	componentName: 'AppDropdown'
});

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		value: string | number,
		text: string | number
	): void;
	(event: 'update:visible', value: boolean): void;
}>();

const dropdownContainer = ref<
	VNodeRef | undefined
>(undefined);

const floating = ref(null);

const { floatingStyles } = useFloating(
	dropdownContainer,
	floating,
	{
		middleware: [
			offset({
				mainAxis: 8,
			}),
			flip(),
		],
	}
);

const selectedOption = computed(() => {
	const selectedOption = options.value.find(
		(option) => option.value === modelValue.value
	);
	return selectedOption;
});

const onSelect = (option: Option) => {
	setShow(false);
	emit('update:visible', false);
	emit(
		'update:modelValue',
		option.value,
		option.text
	);
};

const onToggle = () => {
	emit('update:visible', !show.value);
	setShow(!show.value);
};

const onOpen = () => {
	emit('update:visible', true);
	setShow(true);
};

const onClose = () => {
	emit('update:visible', false);
	setShow(false);
};

const buttonId = `dropdown-button-${Math.random()
	.toString(36)
	.substr(2, 9)}`;

const dropdownStyles = computed(() => {
	if (dropdownContainer.value && hasFullWidth) {
		return {
			...floatingStyles.value,
			width:
				dropdownContainer.value.offsetWidth +
				'px',
		};
	}
	return floatingStyles.value;
});

const handleOutsideClick = (
	event: MouseEvent
) => {
	if (
		show.value &&
		dropdownContainer.value &&
		!dropdownContainer.value.contains(
			event.target as Node
		)
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

const slots = useSlots();

// // if no default slot passed use button element
const child =
	(slots.default?.({})[0] as VNode) ||
	h(
		'button',
		{
			class: `ring-1 text-black-100 
				dark:text-white text-tiny 
				font-medium cursor-pointer 
				py-2 px-4 flex justify-between
				 items-center whitespace-nowrap w-full`,
		},
		'Missing Dropdown Trigger e.g button or input'
	);

const RootComponent = cloneVNode(child, {
	id: buttonId,
	onClick: onToggle,
	onVnodeMounted(node) {
		dropdownContainer.value = node.el;
	},
	onVnodeUnmounted() {
		dropdownContainer.value = undefined;
	},
});

// TODO take this off
const setRef: VNodeRef | undefined = (node) =>
	(dropdownContainer.value = node);
</script>
<template>
	<!-- TODO take this off in the future -->
	<slot
		v-if="willUseDefaultSlotProps"
		:onOpen="onOpen"
		:id="buttonId"
		:setRef="setRef"
		:show="show"
		:aria-expanded="show"
		:aria-haspopup="show"
	></slot>
	<RootComponent
		v-else
		:aria-expanded="show"
		:aria-haspopup="show"
	/>
	<teleport to="body">
		<div
			v-if="show"
			class="absolute z-[9999] bg-white dark:bg-black-200 rounded-lg p-4 flex flex-col gap-2 shadow-[0_10px_20px_0_rgba(54,78,126,0.25)]"
			:class="dropdownClass"
			ref="floating"
			:style="dropdownStyles"
			:aria-labelledby="buttonId"
			data-dropdown="dropdown"
		>
			<slot
				name="overlay"
				:is-open="show"
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
</template>
