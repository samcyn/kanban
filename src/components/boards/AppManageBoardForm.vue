<script setup lang="ts">
import { ref } from 'vue';

import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppBoardForm from '@/components/boards/AppBoardForm.vue';
import AppDropdown from '@/components/shared/AppDropdown/index.vue';
import AppDeleteBoard from '@/components/boards/AppDeleteBoard.vue';

const visible = ref('');

const options: Record<
	'text' | 'value' | 'id',
	string | number
>[] = [
	{
		id: '1',
		value: 'edit_board',
		text: 'Edit Board',
	},
	{
		id: '2',
		value: 'delete_board',
		text: 'Delete Board',
	},
];

const onCloseEdit = () => {
	visible.value = '';
};
</script>
<template>
	<app-dropdown
		v-model="visible"
		:options="options"
	>
		<app-icon-button
			icon="more"
			width="4"
			height="16"
			viewBox="0 0 4 16"
		/>
	</app-dropdown>
	<app-board-form
		:model-value="visible === 'edit_board'"
		@update:modelValue="onCloseEdit"
		mode="edit"
	></app-board-form>
	<app-delete-board
		:model-value="visible === 'delete_board'"
		@update:modelValue="onCloseEdit"
		boardId="1"
	/>
</template>
