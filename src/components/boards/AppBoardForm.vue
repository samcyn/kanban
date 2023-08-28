<script lang="ts" setup>
import { toRef } from 'vue';

import AppModal from '@/components/shared/AppModal.vue';
import AppInput from '@/components/shared/AppInput.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppButton from '@/components/shared/AppButton.vue';

import useControlled from '@/hooks/useControlled';

type Prop = {
	modelValue?: boolean;
} & (
	| {
			mode: 'add';
	  }
	| {
			mode: 'edit';
			boardId: string;
	  }
);

const props = withDefaults(defineProps<Prop>(), {
	mode: 'add',
	modelValue: undefined,
});

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		value: boolean
	): void;
}>();

const modelValue  = toRef(props, 'modelValue');

const [visible, onSetVisible] =
	useControlled<boolean>({
		controlled: modelValue,
		componentName: 'AppBoardForm'
	});

const onView = () => {
	emit('update:modelValue', true);
	onSetVisible(true);
};

const onHide = () => {
	emit('update:modelValue', false);
	onSetVisible(false);
};
</script>
<template>
	<slot :onView="onView" :onHide="onHide"></slot>
	<app-modal :show="visible" @hide="onHide">
		<div
			class="card bg-white dark:bg-black-300 p-6 md:p-8 rounded-md m-auto md:max-w-[480px]"
		>
			<p
				class="text-black-100 dark:text-white text-middle font-bold mb-6"
			>
				{{
					mode === 'add'
						? 'Add New Board'
						: 'Edit Board'
				}}
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
								<app-input placeholder="Todo" />
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
								<app-input placeholder="Todo" />
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
								<app-input placeholder="Todo" />
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
								<app-input placeholder="Todo" />
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
								<app-input placeholder="Todo" />
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
						>+Add New Column</app-button
					>
				</fieldset>
				<app-button class="w-full" type="submit">
					{{
						mode === 'add'
							? 'Create New Board'
							: 'Save Changes'
					}}
				</app-button>
			</form>
		</div>
	</app-modal>
</template>
<style scoped lang="css">
.boards__link {
	padding-top: 14px;
	padding-bottom: 15px;
	font-size: 15px;
	line-height: 19px;
}
</style>
