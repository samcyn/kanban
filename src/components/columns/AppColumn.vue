<script setup lang="ts">
import { ref } from 'vue';

import ColumnsHeader from '@/components/columns/AppColumnsHeader.vue';
import AppTaskCard from '@/components/tasks/AppTaskCard.vue';
import AppViewTask from "@/components/tasks/AppViewTask.vue";
import { IColumn } from '@/models';

defineProps</* @vue-ignore */ IColumn>();

const showTask = ref(false);

const onViewTask = (id: string) => {
	console.log(id);
	showTask.value = true;
};

const onHideTask = () => {
	showTask.value = false;
};
</script>
<template>
	<div
		role="listitem"
		class="columns w-70 basis-70 shrink-0 grow-0 h-full relative"
	>
		<columns-header
			:title="name"
			:color="label"
		/>
		<div
			role="list"
			class="columns__list flex flex-col gap-5"
		>
			<app-task-card
				v-for="task in tasks"
				:key="task.id"
				role="listitem"
				:id="task.id"
				:title="task.title"
				:subtitle="`0 of ${task.subtasks.length} substasks`"
				@onViewTask="onViewTask"
			/>
		</div>
	</div>
	<!-- view task modal here -->
	<app-view-task
		:show-task="showTask"
		task-id=""
		@hide="onHideTask"
	/>
</template>
