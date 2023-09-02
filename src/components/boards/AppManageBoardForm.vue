<script setup lang="ts">
import { ref } from 'vue';

import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppDropdown from '@/components/shared/AppDropdown/index.vue';

import { DEFAULT_BOARD_ACTIONS } from '@/constants/queryParamsModes';
import { useQueryParams } from '@/hooks/useQueryParams';

const visible = ref('');

const options = [
	{
		id: '1',
		value: DEFAULT_BOARD_ACTIONS.edit,
		text: 'Edit Board',
	},
	{
		id: '2',
		value: DEFAULT_BOARD_ACTIONS.delete,
		text: 'Delete Board',
	},
];


const { onUpdateQuery } = useQueryParams();

const onUpdateOptions = (val: string|undefined) => {
	onUpdateQuery({
		taskId: undefined,
		entity_mode: val,
	});
}

</script>
<template>
	<app-dropdown
		:model-value="visible"
		@update:model-value="(val) => onUpdateOptions(val as string)"
		:options="options"
	>
		<app-icon-button
			icon="more"
			width="4"
			height="16"
			viewBox="0 0 4 16"
		/>
	</app-dropdown>
</template>
