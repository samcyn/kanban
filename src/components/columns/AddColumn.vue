<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRoute } from 'vue-router';

import AppModal from '@/components/shared/AppModal.vue';
import AppButton from '@/components/shared/AppButton.vue';
import AppInput from '@/components/shared/AppInput.vue';

import { DEFAULT_COLUMN_ACTIONS } from '@/constants/queryParamsModes';
import {
	useQueryParams,
	useQueryMode,
} from '@/hooks/useQueryParams';
import { useColumnStore } from '@/store/useColumnStore';

const route = useRoute();
const ColumnStore = useColumnStore();

const { addColumnToBoard } = ColumnStore;

const { name, label } = route.query;


const { onUpdateQuery } = useQueryParams();

const { isAddMode } = useQueryMode(
	DEFAULT_COLUMN_ACTIONS,
	'board'
);

const onHide = () => {
	onUpdateQuery({
		taskId: undefined,
		entity_mode: undefined,
		name: undefined,
		label: undefined
	});
};

const { handleSubmit } = useForm({
	validationSchema: yup.object({
		name: yup.string().required('can\'t be empty'),
	}),
	initialValues: {
		name: (name as string) || '',
		label: (label as string) || '#000',
	},
});

const onSubmit = handleSubmit((values) => {
	// update query params to contain form fields
	onUpdateQuery({
		...values,
	});
	addColumnToBoard(route.params.boardId as string, {
		...values,
		tasks: []
	});
	onHide();
});
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
			<form
				class="flex flex-col gap-4"
				@submit="onSubmit"
			>
				<div class="flex flex-col gap-6 mb-6">
					<app-input
						label="Column Name"
						name="name"
						type="text"
					/>
					<app-input
						label="Column Color Code"
						name="label"
						type="color"
					/>
				</div>
				<div
					class="flex flex-col md:flex-row gap-4"
				>
					<app-button
						class="flex-1"
						variant="danger"
						type="submit"
						>Add Column</app-button
					>
					<app-button
						class="flex-1"
						variant="secondary"
						type="button"
						@click="onHide"
						>Cancel</app-button
					>
				</div>
			</form>
		</div>
	</app-modal>
</template>
