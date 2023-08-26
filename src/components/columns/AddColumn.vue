<script setup lang="ts">
import {
	VNode,
	cloneVNode,
	h,
	ref,
	useSlots,
} from 'vue';

import AppModal from '@/components/shared/AppModal.vue';
import AppButton from '@/components/shared/AppButton.vue';

const visible = ref(false);

const onView = () => {
	visible.value = true;
};

const onHide = () => {
	visible.value = false;
};

const slots = useSlots();

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
	onClick: onView,
});
</script>
<template>
	<RootComponent />
	<app-modal :show="visible" @hide="onHide">
		<div
			class="bg-white dark:bg-black-300 rounded-md p-6 md:px-8 md:pt-8 md:pb-10 max-w-[480px] m-auto"
		>
			<p
				class="text-black-100 dark:text-white text-middle font-bold mb-6"
			>
				Add Column?
			</p>
			<p
				class="text-grey-100 text-tiny font-medium mb-6"
			>
				Add New Column to this board
			</p>
			<div
				class="flex flex-col md:flex-row gap-4"
			>
				<app-button
					class="flex-1"
					variant="danger"
					>Add Column</app-button
				>
				<app-button
					class="flex-1"
					variant="secondary"
					@click="onHide"
					>Cancel</app-button
				>
			</div>
		</div>
	</app-modal>
</template>
