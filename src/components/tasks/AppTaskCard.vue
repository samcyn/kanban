<script setup lang="ts">
import { useQueryParams } from '@/hooks/useQueryParams';
import { DEFAULT_TASK_ACTIONS } from '@/constants/queryParamsModes';

withDefaults(
	defineProps<{
		id: string;
		title: string;
		subtitle?: string;
	}>(),
	{
		subtitle: '',
	}
);
const { onUpdateQuery } = useQueryParams();

const onClick = (taskId: string) => {
	onUpdateQuery({
		taskId,
		entity_mode: DEFAULT_TASK_ACTIONS.view,
	});
};
</script>
<template>
	<div
		class="py-6 px-4 bg-white dark:bg-black-300 rounded-lg cursor-cell"
		@click="() => onClick(id)"
	>
		<p
			class="title text-black-100 dark:text-white mb-2"
		>
			{{ title }}
		</p>
		<small class="text-grey-100">{{
			subtitle
		}}</small>
	</div>
</template>
<style lang="css" scoped>
.title {
	font-size: 15px;
	font-weight: 700;
	line-height: 19px;
}

.subtitle {
	font-size: 12px;
	font-weight: 700;
	line-height: 15px;
}
</style>
