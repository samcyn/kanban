<script setup lang="ts">
import AppModal from '@/components/shared/AppModal.vue';
import AppButton from '@/components/shared/AppButton.vue';
import { DEFAULT_COLUMN_ACTIONS } from '@/constants/queryParamsModes';
import {
	useQueryParams,
	useQueryMode,
} from '@/hooks/useQueryParams';

const { onUpdateQuery } = useQueryParams();
const { isAddMode } = useQueryMode(
	DEFAULT_COLUMN_ACTIONS,
	'board'
);

const onHide = () => {
	onUpdateQuery({
		taskId: undefined,
		entity_mode: undefined,
	});
};
</script>
<template>
	<app-modal :show="isAddMode" @hide="onHide">
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
