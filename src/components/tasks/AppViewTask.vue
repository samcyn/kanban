<script lang="ts" setup>
import AppModal from '@/components/shared/AppModal.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppSubtaskCheckbox from '@/components/tasks/AppSubtaskCheckbox.vue';
import AppSelectDropDown from '@/components/shared/AppSelectDropDown/index.vue';

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
				<app-icon-button
					class-name="text-grey-100"
					width="5"
					height="20"
					viewBox="0 0 5 20"
					icon="more"
				/>
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
</template>
