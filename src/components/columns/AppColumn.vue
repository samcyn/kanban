<script setup lang="ts">
import ColumnsHeader from "@/components/columns/AppColumnsHeader.vue"
import AppTaskCard from '@/components/tasks/AppTaskCard.vue';
import { IColumn } from '@/models';

defineProps</* @vue-ignore */ IColumn>();
</script>
<template>
	<div
    role="listitem"
		class="columns w-70 basis-70 shrink-0 grow-0 h-full relative"
	>
		<columns-header :title="name" :color="label" />
		<div
			role="list"
			class="columns__list flex flex-col gap-5"
		>

			<app-task-card
        v-for="task in tasks"
        :key="task.id"
				role="listitem"
				:title="task.title"
				:subtitle="`0 of ${task.subtasks.length} substasks`"
			/>
		</div>
	</div>
</template>
