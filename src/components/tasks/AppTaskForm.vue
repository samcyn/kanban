<script lang="ts" setup>
// import { computed } from 'vue';

import AppModal from '@/components/shared/AppModal.vue';
import AppInput from '@/components/shared/AppInput.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppButton from '@/components/shared/AppButton.vue';
import AppSelectDropDown from '@/components/shared/AppSelectDropDown/index.vue';

import {
	useQueryParams,
	useQueryMode,
} from '@/hooks/useQueryParams';

const { onUpdateQuery } = useQueryParams();
const { isAddMode, isEditMode } = useQueryMode();

const onHideTask = () => {
	onUpdateQuery({
		taskId: undefined,
		entity_mode: undefined,
	});
};
</script>
<template>
	<app-modal
		:show="isAddMode || isEditMode"
		@hide="onHideTask"
	>
		<div
			class="card bg-white dark:bg-black-300 p-6 md:p-8 rounded-md m-auto md:max-w-[480px]"
		>
			<p
				class="text-black-100 dark:text-white text-middle font-bold mb-6"
			>
				{{
					isAddMode ? 'Add New Task' : 'Edit Task'
				}}
			</p>
			<form class="flex flex-col gap-6">
				<app-input
					label="Title"
					placeholder="e.g Take coffee break"
				/>
				<app-input
					class="h-28"
					type="textarea"
					label="Description"
					placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
					resize="none"
					:rows="4"
				/>
				<fieldset>
					<p
						class="text-grey-100 dark:text-white text-small font-bold mb-2"
					>
						Subtasks
					</p>
					<!-- overflow scroll -->
					<div
						class="flex flex-col gap-3 max-h-[92px] overflow-y-auto mb-3"
					>
						<div class="flex items-center gap-4">
							<div class="flex-1">
								<app-input
									placeholder="e.g Take coffee break"
								/>
							</div>
							<app-icon-button
								class-name="text-grey-100"
								width="15"
								height="15"
								viewBox="0 0 15 15"
								icon="close"
							/>
						</div>
						<!-- todo take off -->
						<div class="flex items-center gap-4">
							<div class="flex-1">
								<app-input
									placeholder="e.g Take coffee break"
								/>
							</div>
							<app-icon-button
								class-name="text-grey-100"
								width="15"
								height="15"
								viewBox="0 0 15 15"
								icon="close"
							/>
						</div>
						<div class="flex items-center gap-4">
							<div class="flex-1">
								<app-input
									placeholder="e.g Take coffee break"
								/>
							</div>
							<app-icon-button
								class-name="text-grey-100"
								width="15"
								height="15"
								viewBox="0 0 15 15"
								icon="close"
							/>
						</div>
						<div class="flex items-center gap-4">
							<div class="flex-1">
								<app-input
									placeholder="e.g Take coffee break"
								/>
							</div>
							<app-icon-button
								class-name="text-grey-100"
								width="15"
								height="15"
								viewBox="0 0 15 15"
								icon="close"
							/>
						</div>
						<div class="flex items-center gap-4">
							<div class="flex-1">
								<app-input
									placeholder="e.g Take coffee break"
								/>
							</div>
							<app-icon-button
								class-name="text-grey-100"
								width="15"
								height="15"
								viewBox="0 0 15 15"
								icon="close"
							/>
						</div>
						<!-- todo take off ends -->
					</div>
					<app-button
						class="w-full"
						type="button"
						variant="secondary"
						>+Add New Subtask</app-button
					>
				</fieldset>
				<app-select-drop-down
					model-value=""
					label="Status"
					placeholder="Todo"
					:options="[
						{
							id: '1',
							text: 'One',
							value: 'one',
						},
						{
							id: '2',
							text: 'Two',
							value: 'two',
						},
					]"
				/>
				<app-button
					class="w-full"
					type="submit"
					>{{
						isAddMode
							? 'Create Task'
							: 'Save Changes'
					}}</app-button
				>
			</form>
		</div>
	</app-modal>
</template>
