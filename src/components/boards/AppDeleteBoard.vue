<script lang="ts" setup>
import AppModal from '@/components/shared/AppModal.vue';
import AppButton from '@/components/shared/AppButton.vue';

type Props = {
	modelValue: boolean;
	boardId: string | number;
};

defineProps<Props>();

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		value: boolean
	): void;
}>();

const onHide = () => {
	emit('update:modelValue', false);
};
</script>
<template>
	<app-modal :show="modelValue" @hide="onHide">
		<div
			class="bg-white dark:bg-black-300 rounded-md p-6 md:px-8 md:pt-8 md:pb-10 max-w-[480px] m-auto"
		>
			<p
				class="text-red-100 text-middle font-bold mb-6"
			>
				Delete this board?
			</p>
			<p
				class="text-grey-100 text-tiny font-medium mb-6"
			>
				Are you sure you want to delete the
				‘Platform Launch’ board? This action will
				remove all columns and tasks and cannot be
				reversed.
			</p>
			<div
				class="flex flex-col md:flex-row gap-4"
			>
				<app-button
					class="flex-1"
					variant="danger"
					>Delete</app-button
				>
				<app-button
					class="flex-1"
					variant="secondary"
					>Cancel</app-button
				>
			</div>
		</div>
	</app-modal>
</template>
