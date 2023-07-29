<script lang="ts" setup>
import AppModal from '@/components/shared/AppModal.vue';
import AppInput from '@/components/shared/AppInput.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppButton from '@/components/shared/AppButton.vue';

type Prop = {
	visible: boolean;
} & (
	| {
			mode: 'add';
	  }
	| {
			mode: 'edit';
			taskId: string;
	  }
);

withDefaults(defineProps<Prop>(), {
	visible: false,
});

const emit = defineEmits<{
	(event: 'hide'): void;
}>();

const onHideTask = () => {
	emit('hide');
};
</script>
<template>
	<app-modal :show="visible" @hide="onHideTask">
		<div
			class="card bg-white dark:bg-black-300 p-6 md:p-8 rounded-md m-auto md:max-w-[480px]"
		>
			<p
				class="text-black-100 dark:text-white text-middle font-bold mb-6"
			>
				Add New Board
			</p>
			<form class="flex flex-col gap-6">
				<app-input
					label="Board Name"
					placeholder="e.g. Web Design"
				/>
				<fieldset>
					<p
						class="text-grey-100 dark:text-white text-small font-bold mb-2"
					>
					Board Columns
					</p>
					<!-- overflow scroll -->
					<div
						class="flex flex-col gap-3 max-h-[92px] overflow-y-auto mb-3"
					>
						<div class="flex items-center gap-4">
							<div class="flex-1">
								<app-input
									placeholder="Todo"
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
									placeholder="Todo"
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
									placeholder="Todo"
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
									placeholder="Todo"
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
									placeholder="Todo"
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
					<app-button class="w-full" type="button"
						variant="secondary">+Add New Column</app-button
					>
				</fieldset>
				<app-button class="w-full" type="submit"
					>Create New Board</app-button
				>
			</form>
		</div>
	</app-modal>
</template>
