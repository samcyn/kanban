<script lang="ts" setup>
import { ref } from 'vue';

import AppModal from '@/components/shared/AppModal.vue';
import AppSubtaskCheckbox from '@/components/tasks/AppSubtaskCheckbox.vue';
import AppSelectDropDown from '@/components/shared/AppSelectDropDown/index.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppTaskForm from '@/components/tasks/AppTaskForm.vue';
import AppDropdown from '@/components/shared/AppDropdown/index.vue';
import AppDeleteTask from '@/components/tasks/AppDeleteTask.vue';

withDefaults(
	defineProps<{
		showTask: boolean;
		taskId: string;
	}>(),
	{
		showTask: false,
	}
);

const emit = defineEmits<{
	(event: 'hide'): void;
}>();

const onHideTask = () => {
	emit('hide');
};

const visible = ref('');

const options: Record<
	'text' | 'value' | 'id',
	string | number
>[] = [
	{
		id: '1',
		value: 'edit_task',
		text: 'Edit Task',
	},
	{
		id: '2',
		value: 'delete_task',
		text: 'Delete Task',
	},
];

const onTaskUpdate = (val: string | number) => {
	emit('hide');
	visible.value = val as string;
};

const onCloseEdit = () => {
	visible.value = '';
};
</script>
<template>
	<app-modal :show="showTask" @hide="onHideTask">
		<div
			class="card bg-white dark:bg-black-300 px-6 pt-6 pb-8 md:p-8 rounded-md m-auto md:max-w-[480px]"
		>
			<div
				class="card__header flex items-center gap-4 md:gap-6 mb-6"
			>
				<p
					class="text-middle font-bold text-black-100 dark:text-white"
				>
					Research pricing points of various
					competitors and trial different business
					models
				</p>

				<app-dropdown
					:model-value="visible"
					:options="options"
					@update:model-value="onTaskUpdate"
				>
					<app-icon-button
						class-name="text-grey-100"
						width="5"
						height="20"
						viewBox="0 0 5 20"
						icon="more"
					/>
				</app-dropdown>
			</div>
			<div>
				<p
					class="text-grey-100 text-tiny font-medium mb-6"
				>
					We know what we're planning to build for
					version one. Now we need to finalise the
					first pricing model we'll use. Keep
					iterating the subtasks until we have a
					coherent proposition.
				</p>
				<p
					class="text-grey-100 dark:text-white text-small font-bold mb-4"
				>
					Subtasks (2 of 3)
				</p>
				<!-- subtasks -->
				<div
					class="subtasks flex flex-col gap-2 mb-6"
				>
					<app-subtask-checkbox
						label="Research competitor pricing and business models"
					/>
					<app-subtask-checkbox
						label="Research competitor pricing and business models"
					/>
					<app-subtask-checkbox
						label="Research competitor pricing and business models"
					/>
					<app-subtask-checkbox
						label="Research competitor pricing and business models"
					/>
				</div>
				<div>
					<app-select-drop-down
						model-value=""
						label="Current Status"
						placeholder="hello"
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
				</div>
			</div>
		</div>
	</app-modal>
	<!-- edit task here -->
	<app-task-form
		:model-value="visible === 'edit_task'"
		@update:modelValue="onCloseEdit"
		mode="edit"
		taskId="1"
		>{{ '' }}</app-task-form
	>
	<!-- delete task -->
	<app-delete-task
		:model-value="visible === 'delete_task'"
		@update:modelValue="onCloseEdit"
		taskId="1"
	/>
</template>
